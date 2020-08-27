import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Software Development Internship at Vodafone{" "}
                          <span>2018</span>
                        </h2>
                        <p>
                          I joined Vodafone India as a Software Development
                          Intern in the DevOps team. My major part of the work
                          has been into the field of creating sustainable and
                          flexible CI/CD (Continuous Integration & Continuous
                          Development) pipelines which enables developers at
                          Vodafone to do rapid development. Part of the work was
                          also collaborating with L3 teams in Product Incident
                          Management which involved using different automation
                          frameworks such as Selenium, TestShell, SKDF
                          (developed by Vodafone) and AutoIT.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          BAI at Trinity College, Dublin, Ireland{" "}
                          <span>2015-2019</span>
                        </h2>
                        <p>
                          I completed my Bachelor's in Computer Engineering. I
                          have taken courses such as DSA, OOPs, Computer
                          Networks, Database Management, Machine Learning over
                          the years and have better understanding of these
                          subjects. I was also a part of Dublin University
                          Computer Science Society (DUCSS).
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          St. Columba's School, New Delhi, India{" "}
                          <span>2003-2015</span>
                        </h2>
                        <p>
                          I have completed my higher secondary education with
                          major subjects as Physics, Chemistry, Maths and
                          Engineering Graphics with 92 merit. During my time at
                          school, I developed interest in solving fairly complex
                          engineering problems (thanks to my dad too, who is an
                          Electronics Engineer) which helped me to improve my
                          understanding of not only the concerned subjects but
                          of the world as well.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
