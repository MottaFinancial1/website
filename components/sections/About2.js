import Link from 'next/link';

export default function About2() {
  return (
    <>
      <section
        className="about__area-two about__bg"
        data-background="/assets/img/bg/about_bg.jpg"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="about__img-wrap-two">
                <img src="/assets/img/images/inner_about01.jpg" alt="" />
                <div className="shape">
                  <img
                    src="/assets/img/images/h2_about_img_shape.png"
                    alt=""
                    className="alltuchtopdown"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about__content-two">
                <div className="section-title mb-20 tg-heading-subheading animation-style3">
                  <span className="sub-title">About Motta Financial</span>
                  <h2 className="title tg-element-title">
                    Our role is to be your trusted partner for all of your tax,
                    accounting, and finance needs.
                  </h2>
                </div>
                <p>
                  Motta Financial is a full-service CPA firm committed to
                  providing exceptional tax, accounting, and advisory services
                  to individuals, businesses, and non-profit organizations. With
                  a team of experienced professionals, we combine deep expertise
                  with personalized attention to help our clients achieve their
                  financial goals and navigate complex financial landscapes with
                  confidence.
                </p>
                <div className="about__content-inner">
                  <div className="about__list-box">
                    <ul className="list-wrap">
                      <li>
                        <i className="flaticon-arrow-button" />
                        Solutions to empower your success
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Leveraging technology for operational efficiencies
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Industry-focused insights
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Strategic financial partnerships
                      </li>
                    </ul>
                  </div>
                  {/* <div className="about__list-img">
                    <img src="/assets/img/images/about_list_img.jpg" alt="" />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
