import Link from 'next/link';

export default function Services3() {
  return (
    <>
      <section className="services__area-three services__bg-three">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title white-title text-center mb-50 tg-heading-subheading animation-style3">
                <h2 className="title tg-element-title">Our Services</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center gutter-24">
            <div className="col-lg-4 col-md-6">
              <div className="services__item-three">
                <div className="services__item-top">
                  <div className="services__icon-three">
                    <i className="flaticon-profit" />
                  </div>
                  <div className="services__item-top-title">
                    <h2 className="title">
                      <Link href="/">Tax Planning & Preparation</Link>
                    </h2>
                  </div>
                </div>
                <div className="services__content-three">
                  <p>
                    We offer expert tax planning and preparation services to
                    help you navigate complex tax regulations and maximize your
                    financial benefits. Our experienced team provides
                    personalized strategies to minimize your tax liability and
                    ensure compliance with the latest laws. Whether for
                    individuals or businesses, we take the stress out of tax
                    season and help you plan for a more secure financial future.
                  </p>
                  <Link href="/" className="btn btn-two">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="services__item-three">
                <div className="services__item-top">
                  <div className="services__icon-three">
                    <i className="flaticon-target" />
                  </div>
                  <div className="services__top-title">
                    <h2 className="title">
                      <Link href="/services-details">
                        Accounting Advisory & Payroll Services
                      </Link>
                    </h2>
                  </div>
                </div>
                <div className="services__content-three">
                  <p>
                    Our expert team provides reliable accounting and bookkeeping
                    services, strategic financial advisory, and efficient
                    payroll management to help streamline your operations and
                    enhance your financial health. With a commitment to
                    accuracy, transparency, and personalized service, we ensure
                    that your business stays compliant and financially sound.
                    Let us handle the numbers so you can focus on growing your
                    business.
                  </p>
                  <Link href="/" className="btn btn-two">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="services__item-three">
                <div className="services__item-top">
                  <div className="services__icon-three">
                    <i className="flaticon-financial-profit" />
                  </div>
                  <div className="services__top-title">
                    <h2 className="title">
                      <Link href="/">Business Entity Structuring</Link>
                    </h2>
                  </div>
                </div>
                <div className="services__content-three">
                  <p>
                    LLCs, corporations, and partnerships can be essential tools
                    for maximizing tax savings. We evaluate various options for
                    structuring your business, considering the best type of
                    entity for your operations and the most strategic locations
                    for registration. Our comprehensive suite of services
                    ensures your legal entity structure is both effective and
                    efficient, tailored to support your business needs.
                  </p>
                  <Link href="/" className="btn btn-two">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="services__item-three">
                <div className="services__item-top">
                  <div className="services__icon-three">
                    <i className="flaticon-piggy-bank" />
                  </div>
                  <div className="services__top-title">
                    <h2 className="title">
                      <Link href="/">Financial Planning & Advisory</Link>
                    </h2>
                  </div>
                </div>
                <div className="services__content-three">
                  <p>
                    We provide comprehensive financial planning and advisory
                    services tailored to your unique goals and needs. Whether
                    you're planning for retirement, managing investments, or
                    navigating complex financial decisions, our team of
                    experienced advisors is here to guide you every step of the
                    way. We offer personalized strategies to help you achieve
                    financial security and peace of mind for the future.
                  </p>
                  <Link href="/" className="btn btn-two">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="services__item-three">
                <div className="services__item-top">
                  <div className="services__icon-three">
                    <i className="flaticon-investment-1" />
                  </div>
                  <div className="services__top-title">
                    <h2 className="title">
                      <Link href="/">Management Consulting</Link>
                    </h2>
                  </div>
                </div>
                <div className="services__content-three">
                  <p>
                    We provide expert management consulting services designed to
                    optimize your business operations, enhance performance, and
                    drive growth. Our team of experienced consultants works
                    closely with you to develop customized strategies that
                    address your unique challenges and capitalize on
                    opportunities. From organizational restructuring to process
                    improvement, we help you navigate change and achieve
                    sustainable success.
                  </p>
                  <Link href="/" className="btn btn-two">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="services__item-three">
                <div className="services__item-top">
                  <div className="services__icon-three">
                    <i className="flaticon-startup" />
                  </div>
                  <div className="services__top-title">
                    <h2 className="title">
                      <Link href="/">
                        Financial Statement Preparation & Analysis
                      </Link>
                    </h2>
                  </div>
                </div>
                <div className="services__content-three">
                  <p>
                    We offer comprehensive financial statement preparation,
                    compilation, and analysis services to help you gain a clear
                    understanding of your financial health. Our team ensures
                    accurate and timely preparation of financial statements,
                    tailored to meet regulatory standards and your specific
                    needs. We provide insightful analysis to guide informed
                    decision-making, enhance transparency, and support your
                    business growth.
                  </p>
                  <Link href="/" className="btn btn-two">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
