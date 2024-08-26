import Link from 'next/link';

export default function Banner1() {
  return (
    <>
      <section
        className="banner-area banner-bg"
        data-background="/assets/img/banner/banner_bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-content">
                <h2 className="title" data-aos="fade-up" data-aos-delay={200}>
                  "No need to worry, <span>my accountant</span> handles that."
                </h2>
                <p data-aos="fade-up" data-aos-delay={400}>
                  Our CPA’s are some of the best in the business, and ready to
                  help you, your family, clients, or business achieve your
                  financial goals.
                </p>
                <Link
                  href="/about"
                  className="btn"
                  data-aos="fade-up"
                  data-aos-delay={600}
                >
                  Find Out How
                </Link>
              </div>
            </div>
          </div>
          <div className="banner-social">
            <h5 className="title">Follow us</h5>
            <ul className="list-wrap">
              <li>
                <Link href="/javascript:void(0)">
                  <i className="fab fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link href="/javascript:void(0)">
                  <i className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link href="/javascript:void(0)">
                  <i className="fab fa-instagram" />
                </Link>
              </li>
              <li>
                <Link href="/javascript:void(0)">
                  <i className="fab fa-pinterest-p" />
                </Link>
              </li>
              <li>
                <Link href="/javascript:void(0)">
                  <i className="fab fa-linkedin-in" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="banner-scroll">
            <Link href="#about">
              Scroll Down{' '}
              <span>
                <i className="fas fa-arrow-right" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
