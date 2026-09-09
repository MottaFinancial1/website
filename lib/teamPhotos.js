// Shared headshot lookup, sourced from the same photos used on /team and
// /about/team. The Hub's `booking_hosts` response sometimes omits
// `avatarUrl` for a host, in which case the intake form's host picker
// falls back to this map (matched by name) so the same face shown on the
// team pages also shows up when choosing who to book a call with.
//
// Keyed by the person's plain first + last name, lowercased, with any
// trailing credentials (", CPA", etc.) stripped — Hub host names come back
// plain (e.g. "Dat Le"), while the team pages suffix credentials onto the
// display name (e.g. "Dat Le, CPA").
const TEAM_PHOTOS_BY_NAME = {
  'dat le':
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Portrait%20%28Headshot%29%20-%20Dat%20Le%20%5BWM%5D-kVzKTBVlGdBFKtNQtGCsPYvs3UAxYw.jpg',
  'terry song':
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Terry%20Song.png-IEMyP44Vgb8Idx1fPdxCC2qbVjiPpW.jpeg',
  'amy sparaco':
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amy%20Sparaco-thMF9RPQsNKnzXdBn7bBp6qqnu74rt.jpg',
  'caleb long':
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Caleb%20Long-gj3veS3Ddc1lHawERIs0UQHSFk3wDX.jpg',
  'julian jacobson':
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Julian%20Jacobson-pV0TqUNQjGRcjZeurX7MCTny9ac5Gs.jpg',
  'justin bestel':
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Justin%20Bestel-NFYsWXGsvPNVcBDfDrnRighvOzAsbw.jpg',
  'andrew gianares':
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Andrew%20Gianares-1LBQBMRYrxTw8SGVVYLTUN4FeX7UU2.jpg',
  'shinika shelley':
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7CB62C0D-75E8-4D6A-B324-3EB9D7590D6C%20%281%29-AwUjJh6BnFVF5y4tdVS5bUiQ34gLng.png',
  'samprina zekio':
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Samprina%20Zekio-GTqi19ZdKp1732WGzF5s5YFygrWUz9.jpg',
};

export function getTeamPhoto(name) {
  if (!name) return null;
  const key = name
    .split(',')[0] // drop trailing credentials, e.g. ", CPA"
    .trim()
    .toLowerCase();
  return TEAM_PHOTOS_BY_NAME[key] || null;
}
