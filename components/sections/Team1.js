import Link from 'next/link';
import SocialToggle from '../elements/SocialToggle';

export default function Team1() {
  return (
    <>
      <section className="team-area pt-120 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6">
              <div className="section-title mb-40 tg-heading-subheading animation-style3">
                <span className="sub-title">MEET OUR TEAM</span>
                <h2 className="title tg-element-title">
                  Financial Expertise You <br /> Can Trust
                </h2>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="section-content">
                <p>
                  Our power of choice is untrammelled and when nothing preven
                  tsbeing able to do what we like best every pleasure.
                </p>
              </div>
            </div>
          </div>
          <div className="team-item-wrap">
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="team-item">
                  <div className="team-thumb">
                    <img src="/assets/img/team/dat_team.jpg" alt="" />
                    <div className="team-social">
                      <SocialToggle />
                    </div>
                  </div>
                  <div className="team-content">
                    <h4 className="title">
                      <Link href="/team-details">Dat Le, CPA</Link>
                    </h4>
                    <span>Managing Partner</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="team-item">
                  <div className="team-thumb">
                    <img src="/assets/img/team/dat_team.jpg" alt="" />
                    <div className="team-social">
                      <SocialToggle />
                    </div>
                  </div>
                  <div className="team-content">
                    <h4 className="title">
                      <Link href="/team-details">Mark Dwyer</Link>
                    </h4>
                    <span>Finance Advisor</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="team-item">
                  <div className="team-thumb">
                    <img src="/assets/img/team/dat_team.jpg" alt="" />
                    <div className="team-social">
                      <SocialToggle />
                    </div>
                  </div>
                  <div className="team-content">
                    <h4 className="title">
                      <Link href="/team-details">Brian Downey</Link>
                    </h4>
                    <span>Finance Advisor</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="team-item">
                  <div className="team-thumb">
                    <img src="/assets/img/team/dat_team.jpg" alt="" />
                    <div className="team-social">
                      <SocialToggle />
                    </div>
                  </div>
                  <div className="team-content">
                    <h4 className="title">
                      <Link href="/team-details">Nick Raccuia</Link>
                    </h4>
                    <span>Finance Advisor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
