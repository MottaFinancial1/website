export default function Callback1() {
  return (
    <>
      <section className="call-back-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="call-back-content">
                <div className="section-title white-title mb-10 tg-heading-subheading animation-style3">
                  <h2 className="title tg-element-title">How can we help?</h2>
                </div>
                <p>
                  Tell us more about your accounting needs and we will get in
                  touch as soon as possible to find out how we can support them.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="call-back-form">
                <form action="#">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input type="text" placeholder="Name *" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input type="email" placeholder="E-mail *" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input type="number" placeholder="Phone *" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <button type="submit" className="btn">
                        Send Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
