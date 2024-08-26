import Link from 'next/link';

export default function Menu() {
  return (
    <>
      <ul className="navigation">
        <li className="active">
          <Link href="#">Home</Link>
          {/* <ul className="sub-menu">
            <li className="active">
              <Link href="/">Business</Link>
            </li>
            <li>
              <Link href="/index-2">Finance</Link>
            </li>
            <li>
              <Link href="/index-3">Consulting</Link>
            </li>
            <li>
              <Link href="/index-4">Insurance</Link>
            </li>
            <li>
              <Link href="/index-5">Digital agency</Link>
            </li>
          </ul> */}
        </li>
        <li className="">
          <Link href="#about">About Us</Link>
          {/* <ul className="sub-menu">
            <li>
              <Link href="/about">Business About</Link>
            </li>
            <li>
              <Link href="/about-2">Finance About</Link>
            </li>
            <li>
              <Link href="/about-5">Consulting About</Link>
            </li>
            <li>
              <Link href="/about-3">Insurance About</Link>
            </li>
            <li>
              <Link href="/about-4">Digital agency About</Link>
            </li>
          </ul> */}
        </li>
        <li className="menu-item-has-children">
          <Link href="#">Services</Link>
          <ul className="sub-menu">
            <li>
              <Link href="/">Tax Planning & Preparation</Link>
            </li>
            <li>
              <Link href="/">Accounting Advisory & Payroll Services</Link>
            </li>
            <li>
              <Link href="/">Business Organization</Link>
            </li>
            <li>
              <Link href="/">Financial Planning & Advisory</Link>
            </li>
            <li>
              <Link href="/">Management Consulting</Link>
            </li>
            <li>
              <Link href="/">Financial Statement Preparation & Analysis</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="#">Resources</Link>
          <ul className="sub-menu">
            <li>
              <Link href="/">Articles</Link>
            </li>
            <li>
              <Link href="/">Where's My Refund?</Link>
            </li>
            <li>
              <Link href="/">FAQs</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/contact">contacts</Link>
        </li>
      </ul>
    </>
  );
}
