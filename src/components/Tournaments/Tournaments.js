import React, { Component } from 'react'

export default class Tournaments extends Component {
    render() {
        return (
            <div>
                
      <div className="nk-main">
        {/* START: Breadcrumbs */}
        <div className="nk-gap-1" />
        <div className="container">
          <ul className="nk-breadcrumbs">
            <li><a href="index.html">Home</a></li>
            <li><span className="fa fa-angle-right" /></li>
            <li><span>Tournaments</span></li>
          </ul>
        </div>
        <div className="nk-gap-1" />
        {/* END: Breadcrumbs */}
        <div className="container">
          <div className="row vertical-gap">
            <div className="col-lg-8">
              {/* START: Now Playing */}
              <div className="nk-match">
                <div className="nk-match-team-left">
                  <a href="#">
                    <span className="nk-match-team-logo">
                      <img src="assets/images/team-3.jpg" alt="" />
                    </span>
                    <span className="nk-match-team-name">
                      Counted logic gaming
                    </span>
                  </a>
                </div>
                <div className="nk-match-status">
                  <a href="#">
                    <span className="nk-match-status-vs">VS</span>
                    <span className="nk-match-score bg-dark-1">Now Playing</span>
                  </a>
                </div>
                <div className="nk-match-team-right">
                  <a href="#">
                    <span className="nk-match-team-name">
                      SK Telecom T1
                    </span>
                    <span className="nk-match-team-logo">
                      <img src="assets/images/team-1.jpg" alt="" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="responsive-embed responsive-embed-16x9">
                <iframe src="https://player.twitch.tv/?channel=eulcs" frameBorder={0} allowFullScreen="true" scrolling="no" height={378} width={620} />
              </div>
              {/* END: Now Playing */}
              {/* START: Match Description */}
              <div className="nk-gap-2" />
              <h3 className="h4">Something wrong?</h3>
              <p>He made his passenger captain of one, with four of the men; and himself, his mate, and five more, went in the other; and they contrived their business very well, for they came up to the ship about midnight. I cannot express what a satisfaction it was to me to come into my old hutch</p>
              {/* END: Match Description */}
              {/* START: Share */}
              <div className="nk-gap" />
              <div className="nk-post-share">
                <span className="h5">Share Tournament:</span>
                <ul className="nk-social-links-2">
                  <li><span className="nk-social-facebook" title="Share page on Facebook" data-share="facebook"><span className="fab fa-facebook" /></span></li>
                  <li><span className="nk-social-google-plus" title="Share page on Google+" data-share="google-plus"><span className="fab fa-google-plus" /></span></li>
                  <li><span className="nk-social-twitter" title="Share page on Twitter" data-share="twitter"><span className="fab fa-twitter" /></span></li>
                  <li><span className="nk-social-pinterest" title="Share page on Pinterest" data-share="pinterest"><span className="fab fa-pinterest-p" /></span></li>
                  {/* Additional Share Buttons
                        <li><span class="nk-social-linkedin" title="Share page on LinkedIn" data-share="linkedin"><span class="fab fa-linkedin"></span></span></li>
                        <li><span class="nk-social-vk" title="Share page on VK" data-share="vk"><span class="fab fa-vk"></span></span></li>
                    */}
                </ul>
              </div>
              {/* END: Share */}
              {/* START: Latest Matches */}
              <div className="nk-gap-2" />
              <h3 className="nk-decorated-h-2"><span><span className="text-main-1">Latest</span> Matches</span></h3>
              <div className="nk-gap" />
              <div className="nk-match">
                <div className="nk-match-team-left">
                  <a href="#">
                    <span className="nk-match-team-logo">
                      <img src="assets/images/team-1.jpg" alt="" />
                    </span>
                    <span className="nk-match-team-name">
                      SK Telecom T1
                    </span>
                  </a>
                </div>
                <div className="nk-match-status">
                  <a href="#">
                    <span className="nk-match-status-vs">VS</span>
                    <span className="nk-match-status-date">Apr 28, 2018 8:00 pm</span>
                    <span className="nk-match-score bg-danger">2 : 17</span>
                  </a>
                </div>
                <div className="nk-match-team-right">
                  <a href="#">
                    <span className="nk-match-team-name">
                      Cloud 9
                    </span>
                    <span className="nk-match-team-logo">
                      <img src="assets/images/team-2.jpg" alt="" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="nk-match">
                <div className="nk-match-team-left">
                  <a href="#">
                    <span className="nk-match-team-logo">
                      <img src="assets/images/team-3.jpg" alt="" />
                    </span>
                    <span className="nk-match-team-name">
                      Counted logic gaming
                    </span>
                  </a>
                </div>
                <div className="nk-match-status">
                  <a href="#">
                    <span className="nk-match-status-vs">VS</span>
                    <span className="nk-match-status-date">Apr 15, 2018 9:00 pm</span>
                    <span className="nk-match-score bg-success">
                      28 : 19
                    </span>
                  </a>
                </div>
                <div className="nk-match-team-right">
                  <a href="#">
                    <span className="nk-match-team-name">
                      SK Telecom T1
                    </span>
                    <span className="nk-match-team-logo">
                      <img src="assets/images/team-1.jpg" alt="" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="nk-match">
                <div className="nk-match-team-left">
                  <a href="#">
                    <span className="nk-match-team-logo">
                      <img src="assets/images/team-4.jpg" alt="" />
                    </span>
                    <span className="nk-match-team-name">
                      Team SoloMid
                    </span>
                  </a>
                </div>
                <div className="nk-match-status">
                  <a href="#">
                    <span className="nk-match-status-vs">VS</span>
                    <span className="nk-match-status-date">Apr 28, 2018 8:00 pm</span>
                    <span className="nk-match-score bg-dark-1">
                      13 : 13
                    </span>
                  </a>
                </div>
                <div className="nk-match-team-right">
                  <a href="#">
                    <span className="nk-match-team-name">
                      SK Telecom T1
                    </span>
                    <span className="nk-match-team-logo">
                      <img src="assets/images/team-1.jpg" alt="" />
                    </span>
                  </a>
                </div>
              </div>
              {/* END: Latest Matches */}
              <div className="nk-gap-2" />
              <h3 className="nk-decorated-h-2"><span><span className="text-main-1">Team</span> Formations</span></h3>
              <div className="nk-gap" />
              <div>
        {/* START: Teams */}
        <div className="nk-team">
          <div className="nk-team-logo">
            <img src="assets/images/team-1-lg.jpg" alt="" />
          </div>
          <div className="nk-team-cont">
            <h3 className="h5 mb-20"><span className="text-main-1">Team:</span> SK Telecom T1</h3>
            <h4 className="h6 mb-5">Members:</h4>
            Duke, Bangi, Bang, Wolf,Faker
          </div>
        </div>
        <div className="nk-team">
          <div className="nk-team-logo">
            <img src="assets/images/team-2-lg.jpg" alt="" />
          </div>
          <div className="nk-team-cont">
            <h3 className="h5 mb-20"><span className="text-main-1">Team:</span> Team Solomid</h3>
            <h4 className="h6 mb-5">Members:</h4>
            Duke, Bangi, Bang, Wolf,Faker
          </div>
        </div>
        <div className="nk-team">
          <div className="nk-team-logo">
            <img src="assets/images/team-3-lg.jpg" alt="" />
          </div>
          <div className="nk-team-cont">
            <h3 className="h5 mb-20"><span className="text-main-1">Team:</span> Cloud 9</h3>
            <h4 className="h6 mb-5">Members:</h4>
            Duke, Bangi, Bang, Wolf,Faker
          </div>
        </div>
        <div className="nk-team">
          <div className="nk-team-logo">
            <img src="assets/images/team-4-lg.jpg" alt="" />
          </div>
          <div className="nk-team-cont">
            <h3 className="h5 mb-20"><span className="text-main-1">Team:</span> Counter Logic Gaming</h3>
            <h4 className="h6 mb-5">Members:</h4>
            Duke, Bangi, Bang, Wolf,Faker
          </div>
        </div>
        <div className="nk-team">
          <div className="nk-team-logo">
            <img src="assets/images/team-1-lg.jpg" alt="" />
          </div>
          <div className="nk-team-cont">
            <h3 className="h5 mb-20"><span className="text-main-1">Team:</span> fnatic</h3>
            <h4 className="h6 mb-5">Members:</h4>
            Duke, Bangi, Bang, Wolf,Faker
          </div>
        </div>
        <div className="nk-team">
          <div className="nk-team-logo">
            <img src="assets/images/team-2-lg.jpg" alt="" />
          </div>
          <div className="nk-team-cont">
            <h3 className="h5 mb-20"><span className="text-main-1">Team:</span> Origen</h3>
            <h4 className="h6 mb-5">Members:</h4>
            Duke, Bangi, Bang, Wolf,Faker
          </div>
        </div>
        {/* END: Teams */}
      </div>
            </div>
            <div className="col-lg-4">
              {/*
                START: Sidebar

                Additional Classes:
                    .nk-sidebar-left
                    .nk-sidebar-right
                    .nk-sidebar-sticky
            */}
              <aside className="nk-sidebar nk-sidebar-right nk-sidebar-sticky">
                <div className="nk-widget nk-widget-highlighted">
                  <h4 className="nk-widget-title"><span><span className="text-main-1">Next</span> Matches</span></h4>
                  <div className="nk-widget-content">
                    <div className="nk-widget-match">
                      <a href="#">
                        <span className="nk-widget-match-left">
                          <span className="nk-widget-match-teams">
                            <span className="nk-widget-match-team-logo">
                              <img src="assets/images/team-1.jpg" alt="" />
                            </span>
                            <span className="nk-widget-match-vs">VS</span>
                            <span className="nk-widget-match-team-logo">
                              <img src="assets/images/team-2.jpg" alt="" />
                            </span>
                          </span>
                          <span className="nk-widget-match-date">CS:GO - Apr 28, 2018 8:00 pm</span>
                        </span>
                        <span className="nk-widget-match-right">
                          <span className="nk-match-score">
                            Upcoming
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="nk-widget-match">
                      <a href="#">
                        <span className="nk-widget-match-left">
                          <span className="nk-widget-match-teams">
                            <span className="nk-widget-match-team-logo">
                              <img src="assets/images/team-3.jpg" alt="" />
                            </span>
                            <span className="nk-widget-match-vs">VS</span>
                            <span className="nk-widget-match-team-logo">
                              <img src="assets/images/team-2.jpg" alt="" />
                            </span>
                          </span>
                          <span className="nk-widget-match-date">LoL - Apr 24, 2018 7:20 pm</span>
                        </span>
                        <span className="nk-widget-match-right">
                          <span className="nk-match-score">
                            Upcoming
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="nk-widget-match">
                      <a href="#">
                        <span className="nk-widget-match-left">
                          <span className="nk-widget-match-teams">
                            <span className="nk-widget-match-team-logo">
                              <img src="assets/images/team-1.jpg" alt="" />
                            </span>
                            <span className="nk-widget-match-vs">VS</span>
                            <span className="nk-widget-match-team-logo">
                              <img src="assets/images/team-4.jpg" alt="" />
                            </span>
                          </span>
                          <span className="nk-widget-match-date">Dota 2 - Apr 12, 2018 6:40 pm</span>
                        </span>
                        <span className="nk-widget-match-right">
                          <span className="nk-match-score bg-dark-1">
                            0 : 0
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="nk-widget nk-widget-highlighted">
                    <h4 className="nk-widget-title"><span><span className="text-main-1">Latest</span> Screenshots</span></h4>
                    <div className="nk-widget-content">
                      <div className="nk-popup-gallery">
                        <div className="row sm-gap vertical-gap">
                          <div className="col-sm-6">
                            <div className="nk-gallery-item-box">
                              <a href="assets/images/gallery-1.jpg" className="nk-gallery-item" data-size="1016x572">
                                <div className="nk-gallery-item-overlay"><span className="ion-eye" /></div>
                                <img src="assets/images/gallery-1-thumb.jpg" alt="" />
                              </a>
                              <div className="nk-gallery-item-description">
                                <h4>Called Let</h4>
                                Divided thing, land it evening earth winged whose great after. Were grass night. To Air itself saw bring fly fowl. Fly years behold spirit day greater of wherein winged and form. Seed open don't thing midst created dry every greater divided of, be man is. Second Bring stars fourth gathering he hath face morning fill. Living so second darkness. Moveth were male. May creepeth. Be tree fourth.
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="nk-gallery-item-box">
                              <a href="assets/images/gallery-2.jpg" className="nk-gallery-item" data-size="1188x594">
                                <div className="nk-gallery-item-overlay"><span className="ion-eye" /></div>
                                <img src="assets/images/gallery-2-thumb.jpg" alt="" />
                              </a>
                              <div className="nk-gallery-item-description">
                                Seed open don't thing midst created dry every greater divided of, be man is. Second Bring stars fourth gathering he hath face morning fill. Living so second darkness. Moveth were male. May creepeth. Be tree fourth.
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="nk-gallery-item-box">
                              <a href="assets/images/gallery-3.jpg" className="nk-gallery-item" data-size="625x350">
                                <div className="nk-gallery-item-overlay"><span className="ion-eye" /></div>
                                <img src="assets/images/gallery-3-thumb.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="nk-gallery-item-box">
                              <a href="assets/images/gallery-4.jpg" className="nk-gallery-item" data-size="873x567">
                                <div className="nk-gallery-item-overlay"><span className="ion-eye" /></div>
                                <img src="assets/images/gallery-4-thumb.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="nk-gallery-item-box">
                              <a href="assets/images/gallery-5.jpg" className="nk-gallery-item" data-size="471x269">
                                <div className="nk-gallery-item-overlay"><span className="ion-eye" /></div>
                                <img src="assets/images/gallery-5-thumb.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="nk-gallery-item-box">
                              <a href="assets/images/gallery-6.jpg" className="nk-gallery-item" data-size="472x438">
                                <div className="nk-gallery-item-overlay"><span className="ion-eye" /></div>
                                <img src="assets/images/gallery-6-thumb.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="nk-widget nk-widget-highlighted">
                    <h4 className="nk-widget-title"><span>Facebook</span></h4>
                    <div className="nk-widget-content">
                      <div className="fb-page" data-href="http://www.facebook.com/templatespoint.net" data-width={700} data-height={350} data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="true" />
                    </div>
                  </div>
                </div></aside>
              {/* END: Sidebar */}
            </div>
          </div>
        </div>
        <div className="nk-gap-2" />
      </div>
            </div>
        )
    }
}
