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
                    We are well-versed in tax laws and regulations. Minimize
                    your tax liabilities and maximize deductions through our
                    strategic tax planning advice.
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
                    We are well-versed in tax laws and regulations. Minimize
                    your tax liabilities and maximize deductions through our
                    strategic tax planning advice.{' '}
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
                      <Link href="/">Business Organization</Link>
                    </h2>
                  </div>
                </div>
                <div className="services__content-three">
                  <p>
                    We are well-versed in tax laws and regulations. Minimize
                    your tax liabilities and maximize deductions through our
                    strategic tax planning advice.{' '}
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
                    We are well-versed in tax laws and regulations. Minimize
                    your tax liabilities and maximize deductions through our
                    strategic tax planning advice.{' '}
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
                    We are well-versed in tax laws and regulations. Minimize
                    your tax liabilities and maximize deductions through our
                    strategic tax planning advice.{' '}
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
                    We are well-versed in tax laws and regulations. Minimize
                    your tax liabilities and maximize deductions through our
                    strategic tax planning advice.{' '}
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
