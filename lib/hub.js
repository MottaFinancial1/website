// Motta Hub public API helpers.
// Docs: contact -> POST /api/public/contact, intake -> POST /api/public/intake.
// CORS: motta.cpa, www.motta.cpa, *.vercel.app, www.mottafinancial.com.

export const HUB_BASE_URL =
  process.env.NEXT_PUBLIC_HUB_BASE_URL || 'https://hub.motta.cpa';

export const HUB_LOGIN_URL = `${HUB_BASE_URL}/login`;

// Origin the Hub trusts for public form submissions. Server-side proxy
// routes present this when forwarding (a server fetch sends no Origin).
// Override with HUB_TRUSTED_ORIGIN to match the deployed domain.
export const HUB_TRUSTED_ORIGIN =
  process.env.HUB_TRUSTED_ORIGIN || 'https://www.motta.cpa';

// The Hub does real work synchronously before replying (creates the
// record, pushes to Karbon/Salesforce, looks up bookable hosts), which
// normally lands well under this. It exists so a stalled Hub fails
// with a clear, retryable message instead of leaving the submit button
// stuck on "Submitting…" indefinitely.
const HUB_REQUEST_TIMEOUT_MS = 20_000;

export async function postToHub(path, payload) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), HUB_REQUEST_TIMEOUT_MS);

  let res;
  try {
    // Call our own same-origin proxy route (app/api/public/*) rather
    // than the Hub directly. The proxy forwards to HUB_BASE_URL
    // server-side, which sidesteps the browser CORS restriction (the
    // Hub only allows a fixed origin allowlist, which excludes preview
    // sandboxes).
    res = await fetch(path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
  } catch (err) {
    if (err.name === 'AbortError') {
      const timeoutErr = new Error(
        "That's taking longer than expected. Please try again."
      );
      timeoutErr.status = 504;
      throw timeoutErr;
    }
    throw err;
  } finally {
    clearTimeout(timeout);
  }

  let body = {};
  try {
    body = await res.json();
  } catch {
    /* non-json response */
  }
  if (!res.ok) {
    const err = new Error(body.error || `Request failed (${res.status})`);
    err.status = res.status;
    err.body = body;
    throw err;
  }
  return body;
}

// Friendly user-facing error messages keyed by HTTP status.
export function hubErrorMessage(err) {
  const status = err && err.status;
  if (status === 400) return 'Please check the highlighted fields and try again.';
  if (status === 403) return "We couldn't send that message. Please try again later.";
  if (status === 429)
    return 'Too many submissions from this network — please wait a moment and try again.';
  if (status === 500) return 'Something went wrong on our end. Please try again.';
  return (err && err.message) || 'Unable to submit right now. Please try again.';
}
