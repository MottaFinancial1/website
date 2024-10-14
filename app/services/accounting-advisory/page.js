import VideoPopup from '@/components/elements/PopupVideo';
import Layout from '@/components/layout/Layout';
import BrandActiveSlider from '@/components/slider/BrandActiveSlider';
import Link from 'next/link';

export default function ServicesDetails() {
  return (
    <>
      <Layout
        headerStyle={5}
        footerStyle={1}
        breadcrumbTitle="Accounting Advisory & Payroll Services"
      >
        <div>
          <section className="services__details-area">
            <div className="container">
              <div className="services__details-wrap">
                <div className="row">
                  {/* <div className="col-70 order-0 order-lg-2">
                    <div className="services__details-thumb">
                      <img
                        src="/assets/img/services/services_details01.jpg"
                        alt=""
                      />
                    </div>
                    <div className="services__details-content">
                      <h2 className="title">
                        Accounting Advisory & Payroll Services
                      </h2>
                      <p>
                        We offer expert tax planning and preparation services to
                        help you navigate complex tax regulations and maximize
                        your financial benefits. Our experienced team provides
                        personalized strategies to minimize your tax liability
                        and ensure compliance with the latest laws. Whether for
                        individuals or businesses, we take the stress out of tax
                        season and help you plan for a more secure financial
                        future.
                      </p>
                      <p>
                        We offer expert tax planning and preparation services to
                        help you navigate complex tax regulations and maximize
                        your financial benefits. Our experienced team provides
                        personalized strategies to minimize your tax liability
                        and ensure compliance with the latest laws. Whether for
                        individuals or businesses, we take the stress out of tax
                        season and help you plan for a more secure financial
                        future.
                      </p>
                      <div className="services__details-list">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="services__details-list-box">
                              <div className="icon">
                                <i className="flaticon-life-insurance" />
                              </div>
                              <div className="content">
                                <h4 className="title">
                                  Accounting Advisory & Payroll Services
                                </h4>
                                <p>
                                  We successfully copey withtks arying mplexity
                                  aweprguara nd regularly master
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="services__details-list-box">
                              <div className="icon">
                                <i className="flaticon-insurance-agent" />
                              </div>
                              <div className="content">
                                <h4 className="title">Long Term Goals</h4>
                                <p>
                                  We successfully copey withtks arying mplexity
                                  aweprguara nd regularly masters
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        We offer expert tax planning and preparation services to
                        help you navigate complex tax regulations and maximize
                        your financial benefits. Our experienced team provides
                        personalized strategies to minimize your tax liability
                        and ensure compliance with the latest laws. Whether for
                        individuals or businesses, we take the stress out of tax
                        season and help you plan for a more secure financial
                        future.
                      </p>
                      <div className="services__details-inner">
                        <div className="row gutter-24 align-items-center">
                          <div className="col-44">
                            <div className="services__details-inner-img">
                              <img
                                src="/assets/img/services/services_details_inner01.jpg"
                                alt=""
                              />
                              <VideoPopup />
                            </div>
                          </div>
                          <div className="col-56">
                            <div className="services__details-inner-content">
                              <h4 className="title">
                                Raise capital faster negotiate <br /> on your
                                own terms
                              </h4>
                              <p>
                                We offer expert tax planning and preparation
                                services to help you navigate complex tax
                                regulations and maximize your financial
                                benefits. Our experienced team provides
                                personalized strategies to minimize your tax
                                liability and ensure compliance with the latest
                                laws. Whether for individuals or businesses, we
                                take the stress out of tax season and help you
                                plan for a more secure financial future.
                              </p>
                              <div className="about__list-box">
                                <ul className="list-wrap">
                                  <li>
                                    <i className="flaticon-arrow-button" />
                                    Business Growth
                                  </li>
                                  <li>
                                    <i className="flaticon-arrow-button" />
                                    Analysis Research
                                  </li>
                                  <li>
                                    <i className="flaticon-arrow-button" />
                                    100% Secure
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="last-info">
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen bookhas survived
                        not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchan
                        galley of type and scrambled it to make a type specimen
                        book.
                      </p>
                    </div>
                  </div> */}
                  <div className="col-70 order-0 order-lg-2">
                    <div className="services__details-top">
                      <div className="row gutter-24 align-items-center">
                        <div className="col-49">
                          <div className="services__details-thumb services__details-thumb-two">
                            <img
                              src="/assets/img/services/services_details02.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-51">
                          <div className="services__details-top-content">
                            <h2 className="title">Accounting Advisory</h2>
                            <p>
                              when an unknown printer took a galley of type and
                              scrambled it to make a type specimen bookhas
                              survived not only five centuries.but also the leap
                              into electronic typesetting, remaining.
                            </p>
                            <div className="about__list-box about__list-box-three">
                              <ul className="list-wrap">
                                <li>
                                  <i className="flaticon-arrow-button" />
                                  Business Growth
                                </li>
                                <li>
                                  <i className="flaticon-arrow-button" />
                                  100% Secure
                                </li>
                                <li>
                                  <i className="flaticon-arrow-button" />
                                  Research
                                </li>
                                <li>
                                  <i className="flaticon-arrow-button" />
                                  100% Secure
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="services__details-content">
                      <p>
                        eed a little help from our friends from time to time.
                        Although we offer the one-stop convenience of annery
                        integrated range of legal, financial services under one
                        roof, there are occasions when our clients areaneed
                        specia- list advice beyond the scope of our own
                        expertise. That’s why we’ve developed close working
                        relationships with a number of strategic partner.
                      </p>
                      <div className="services__details-inner-two">
                        <div className="row gutter-24 align-items-center">
                          <div className="col-48 order-0 order-md-2">
                            <div className="services__details-inner-img">
                              <img
                                src="/assets/img/services/services_details_inner02.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-52">
                            <div className="services__details-inner-content-two">
                              <h4 className="title">Accounting Advisory</h4>
                              <p>
                                eed a little help from our friends from time to
                                time. Although we offer the one-stop convenience
                                of annery integrated range of legal, financial
                                services under one roof, there are occasions
                                when our clients areaneed specia- list advice
                                beyond the scope of our own expertise. That’s
                                why we’ve developed.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h2 className="title-two">3 Simple Steps to Process</h2>
                      <p>
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen bookhas survived
                        not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchan
                        galley of type and scrambled it to make a type specimen
                        book.
                      </p>
                      <div className="services__details-list-two">
                        <div className="row gutter-24">
                          <div className="col-md-4">
                            <div className="services__details-list-box-two">
                              <div className="icon">
                                <i className="flaticon-report" />
                              </div>
                              <div className="content">
                                <h4 className="title">Business Ratings</h4>
                                <p>
                                  We successfully cope year withtks arying
                                  mplexity
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="services__details-list-box-two">
                              <div className="icon">
                                <i className="flaticon-email" />
                              </div>
                              <div className="content">
                                <h4 className="title">Digital Marketing</h4>
                                <p>
                                  We successfully cope year withtks arying
                                  mplexity
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="services__details-list-box-two">
                              <div className="icon">
                                <i className="flaticon-life-insurance" />
                              </div>
                              <div className="content">
                                <h4 className="title">Extend Coverage</h4>
                                <p>
                                  We successfully cope year withtks arying
                                  mplexity
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="last-info">
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen bookhas survived
                        not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchan
                        galley of type and scrambled it to make a type specimen
                        book.
                      </p>
                    </div>
                  </div>
                  <div className="col-30">
                    <aside className="services__sidebar">
                      <div className="sidebar__widget sidebar__widget-two">
                        <div className="sidebar__cat-list-two">
                          <h4 className="sidebar__widget-title">
                            Other Services
                          </h4>
                          <ul className="list-wrap">
                            <li>
                              <Link href="/services/accounting-advisory">
                                Accounting Advisory{' '}
                                <i className="flaticon-arrow-button" />
                              </Link>
                            </li>
                            <li>
                              <Link href="/services/business-entity-structuring">
                                Business Entity Structuring{' '}
                                <i className="flaticon-arrow-button" />
                              </Link>
                            </li>
                            <li>
                              <Link href="/services/financial-planning">
                                Financial Planning{' '}
                                <i className="flaticon-arrow-button" />
                              </Link>
                            </li>
                            <li>
                              <Link href="/services/management-consulting">
                                Management Consulting{' '}
                                <i className="flaticon-arrow-button" />
                              </Link>
                            </li>
                            <li>
                              <Link href="/services/financial-statement-analysis">
                                Financial Statement Analysis{' '}
                                <i className="flaticon-arrow-button" />
                              </Link>
                            </li>
                            <li>
                              <Link href="/services/tax-planning">
                                Tax Planning & Preparation{' '}
                                <i className="flaticon-arrow-button" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="sidebar__widget">
                        <h4 className="sidebar__widget-title">
                          Motta Documents
                        </h4>
                        <div className="sidebar__brochure">
                          <p>Learn about what we do!</p>
                          <Link
                            href="/assets/img/services/services_details01.jpg"
                            target="_blank"
                            download
                          >
                            <i className="far fa-file-pdf" />
                            Motta Background PDF. Download
                          </Link>
                          <Link
                            href="/assets/img/services/services_details01.jpg"
                            target="_blank"
                            download
                          >
                            <i className="far fa-file-alt" />
                            Welcome Guide DOC. Download
                          </Link>
                        </div>
                      </div>
                      <div className="sidebar__widget">
                        <h4 className="sidebar__widget-title">
                          Latest Articles
                        </h4>
                        <div className="sidebar__post-list">
                          <div className="sidebar__post-item">
                            <div className="sidebar__post-thumb">
                              <Link href="/blog-details">
                                <img
                                  src="/assets/img/blog/sb_post01.jpg"
                                  alt=""
                                />
                              </Link>
                            </div>
                            <div className="sidebar__post-content">
                              <h5 className="title">
                                <Link href="/blog-details">
                                  Tax Policy Crossroads
                                </Link>
                              </h5>
                              <span className="date">
                                <i className="flaticon-time" />
                                Oct 04, 2024
                              </span>
                            </div>
                          </div>
                          <div className="sidebar__post-item">
                            <div className="sidebar__post-thumb">
                              <Link href="/blog-details">
                                <img
                                  src="/assets/img/blog/sb_post02.jpg"
                                  alt=""
                                />
                              </Link>
                            </div>
                            <div className="sidebar__post-content">
                              <h5 className="title">
                                <Link href="/blog-details">
                                  Understanding the Tax Impact of Federal
                                  Student Aid
                                </Link>
                              </h5>
                              <span className="date">
                                <i className="flaticon-time" />
                                09 04, 2024
                              </span>
                            </div>
                          </div>
                          <div className="sidebar__post-item">
                            <div className="sidebar__post-thumb">
                              <Link href="/blog-details">
                                <img
                                  src="/assets/img/blog/sb_post03.jpg"
                                  alt=""
                                />
                              </Link>
                            </div>
                            <div className="sidebar__post-content">
                              <h5 className="title">
                                <Link href="/blog-details">
                                  Exploring Different Types of Rental Properties
                                </Link>
                              </h5>
                              <span className="date">
                                <i className="flaticon-time" />
                                Sep 15, 2024
                              </span>
                            </div>
                          </div>
                          <div className="sidebar__post-item">
                            <div className="sidebar__post-thumb">
                              <Link href="/blog-details">
                                <img
                                  src="/assets/img/blog/sb_post04.jpg"
                                  alt=""
                                />
                              </Link>
                            </div>
                            <div className="sidebar__post-content">
                              <h5 className="title">
                                <Link href="/blog-details">
                                  Are your accountant, attorney, and financial
                                  advisor teaming up for your success?
                                </Link>
                              </h5>
                              <span className="date">
                                <i className="flaticon-time" />
                                Sep 15, 2024
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sidebar__widget sidebar__widget-two">
                        <div className="sidebar__contact">
                          <h2 className="title">
                            If You Need Any Help Contact With Us
                          </h2>
                          <Link href="/tel:0123456789" className="btn">
                            <i className="flaticon-phone-call" />
                            +19783286959
                          </Link>
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* services-details-area-end */}
          {/* brand-area */}
        </div>
      </Layout>
    </>
  );
}
