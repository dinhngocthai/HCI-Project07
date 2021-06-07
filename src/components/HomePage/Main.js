import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <div>
   
   <div className="nk-main">
        <div className="nk-gap-2" />
        {/* START: Image Slider */}
        
        <div className="nk-image-slider-item">
              <img src="assets/images/slide-3.jpg" alt="" className="nk-image-slider-img" data-thumb="assets/images/slide-3-thumb.jpg" />
            </div>
          {/* END: Image Slider */}
        <div className="container">
   
          {/* START: Categories */}
          <div className="nk-gap-2" />
          <div className="row vertical-gap">
            <div className="col-lg-4">
              <div className="nk-feature-1">
                <div className="nk-feature-icon">
                  <img src="assets/images/icon-mouse.png" alt="" />
                </div>
                <div className="nk-feature-cont">
                  <h3 className="nk-feature-title"><a href="#">PC</a></h3>
                  <h4 className="nk-feature-title text-main-1"><a href="#">View Games</a></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="nk-feature-1">
                <div className="nk-feature-icon">
                  <img src="assets/images/icon-gamepad.png" alt="" />
                </div>
                <div className="nk-feature-cont">
                  <h3 className="nk-feature-title"><a href="#">PS4</a></h3>
                  <h4 className="nk-feature-title text-main-1"><a href="#">View Games</a></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="nk-feature-1">
                <div className="nk-feature-icon">
                  <img src="assets/images/icon-gamepad-2.png" alt="" />
                </div>
                <div className="nk-feature-cont">
                  <h3 className="nk-feature-title"><a href="#">Xbox</a></h3>
                  <h4 className="nk-feature-title text-main-1"><a href="#">View Games</a></h4>
                </div>
              </div>
            </div>
          </div>
          {/* END: Categories */}
          {/* START: Latest News */}
          <div className="nk-gap-2" />
          <h3 className="nk-decorated-h-2"><span><span className="text-main-1">Latest</span> News</span></h3>
          <div className="nk-gap" />
          <div className="nk-news-box">
            <div className="nk-news-box-list">
              <div className="nano">
                <div className="nano-content">
                  <div className="nk-news-box-item nk-news-box-item-active">
                    <div className="nk-news-box-item-img">
                      <img src="assets/images/post-1-sm.jpg" alt="Smell magic in the air. Or maybe barbecue" />
                    </div>
                    <img src="assets/images/post-1.jpg" alt="Smell magic in the air. Or maybe barbecue" className="nk-news-box-item-full-img" />
                    <h3 className="nk-news-box-item-title">Smell magic in the air. Or maybe barbecue</h3>
                    <span className="nk-news-box-item-categories">
                      <span className="bg-main-4">MMO</span>
                    </span>
                    <div className="nk-news-box-item-text">
                      <p>With what mingled joy and sorrow do I take up the pen to write to my dearest friend! Oh, what a change between to-day and yesterday! Now I am friendless and alone...</p>
                      <a href="#">Read more</a>
                    </div>
                    <a href="/BlogArticle" className="nk-news-box-item-url">Read More</a>
                    <div className="nk-news-box-item-date"><span className="fa fa-calendar" /> Sep 18, 2018</div>
                  </div>
                  <div className="nk-news-box-item">
                    <div className="nk-news-box-item-img">
                      <img src="assets/images/post-2-sm.jpg" alt="Grab your sword and fight the Horde" />
                    </div>
                    <img src="assets/images/post-2.jpg" alt="Grab your sword and fight the Horde" className="nk-news-box-item-full-img" />
                    <h3 className="nk-news-box-item-title">Grab your sword and fight the Horde</h3>
                    <span className="nk-news-box-item-categories">
                      <span className="bg-main-1">Action</span>
                    </span>
                    <div className="nk-news-box-item-text">
                      <p>For good, too; though, in consequence of my previous emotions, I was still occasionally seized with a stormy sob . After we had jogged on for some little time, I asked the carrier...</p>
                    </div>
                    <a href="/BlogArticle" className="nk-news-box-item-url">Read More</a>
                    <div className="nk-news-box-item-date"><span className="fa fa-calendar" /> Sep 5, 2018</div>
                  </div>
                  <div className="nk-news-box-item">
                    <div className="nk-news-box-item-img">
                      <img src="assets/images/post-3-sm.jpg" alt="We found a witch! May we burn her?" />
                    </div>
                    <img src="assets/images/post-3.jpg" alt="We found a witch! May we burn her?" className="nk-news-box-item-full-img" />
                    <h3 className="nk-news-box-item-title">We found a witch! May we burn her?</h3>
                    <span className="nk-news-box-item-categories">
                      <span className="bg-main-2">Adventure</span>
                    </span>
                    <div className="nk-news-box-item-text">
                      <p>And she went on planning to herself how she would manage it. `They must go by the carrier,' she thought; `and how funny it'll seem, sending presents to one's own feet!...</p>
                    </div>
                    <a href="/BlogArticle" className="nk-news-box-item-url">Read More</a>
                    <div className="nk-news-box-item-date"><span className="fa fa-calendar" /> Aug 27, 2018</div>
                  </div>
                  <div className="nk-news-box-item">
                    <div className="nk-news-box-item-img">
                      <img src="assets/images/post-4-sm.jpg" alt="For good, too though, in consequence" />
                    </div>
                    <img src="assets/images/post-4.jpg" alt="For good, too though, in consequence" className="nk-news-box-item-full-img" />
                    <h3 className="nk-news-box-item-title">For good, too though, in consequence</h3>
                    <span className="nk-news-box-item-categories">
                      <span className="bg-main-3">Strategy</span>
                    </span>
                    <div className="nk-news-box-item-text">
                      <p>This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that...</p>
                    </div>
                    <a href="/BlogArticle" className="nk-news-box-item-url">Read More</a>
                    <div className="nk-news-box-item-date"><span className="fa fa-calendar" /> Aug 14, 2018</div>
                  </div>
                  <div className="nk-news-box-item">
                    <div className="nk-news-box-item-img">
                      <img src="assets/images/post-5-sm.jpg" alt="He made his passenger captain of one" />
                    </div>
                    <img src="assets/images/post-5.jpg" alt="He made his passenger captain of one" className="nk-news-box-item-full-img" />
                    <h3 className="nk-news-box-item-title">He made his passenger captain of one</h3>
                    <span className="nk-news-box-item-categories">
                      <span className="bg-main-5">Indie</span>
                    </span>
                    <div className="nk-news-box-item-text">
                      <p>Just then her head struck against the roof of the hall: in fact she was now more than nine feet high, and she at once took up the little golden key and hurried off to the garden door...</p>
                    </div>
                    <a href="/BlogArticle" className="nk-news-box-item-url">Read More</a>
                    <div className="nk-news-box-item-date"><span className="fa fa-calendar" /> Jul 23, 2018</div>
                  </div>
                  <div className="nk-news-box-item">
                    <div className="nk-news-box-item-img">
                      <img src="assets/images/post-6-sm.jpg" alt="At first, for some time, I was not able to answer" />
                    </div>
                    <img src="assets/images/post-6.jpg" alt="At first, for some time, I was not able to answer" className="nk-news-box-item-full-img" />
                    <h3 className="nk-news-box-item-title">At first, for some time, I was not able to answer</h3>
                    <span className="nk-news-box-item-categories">
                      <span className="bg-main-5">Racing</span>
                    </span>
                    <div className="nk-news-box-item-text">
                      <p>This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that...</p>
                    </div>
                    <a href="/BlogArticle" className="nk-news-box-item-url">Read More</a>
                    <div className="nk-news-box-item-date"><span className="fa fa-calendar" /> Jul 3, 2018</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nk-news-box-each-info">
              <div className="nano">
                <div className="nano-content">
                  {/* There will be inserted info about selected news*/}
                  <div className="nk-news-box-item-image">
                    <img src="assets/images/post-1.jpg" alt="" />
                    <span className="nk-news-box-item-categories">
                      <span className="bg-main-4">MMO</span>
                    </span>
                  </div>
                  <h3 className="nk-news-box-item-title">Smell magic in the air. Or maybe barbecue</h3>
                  <div className="nk-news-box-item-text">
                    <p>With what mingled joy and sorrow do I take up the pen to write to my dearest friend!</p>
                    <a href="/BlogArticle" className="nk-news-box-item-more">Read More</a>

                  </div>
                  <div className="nk-news-box-item-date">
                    <span className="fa fa-calendar" /> Sep 18, 2018
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nk-gap-2" />
          <div className="nk-blog-grid">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                {/* START: Post */}
                <div className="nk-blog-post">
                  <a href="/BlogArticle" className="nk-post-img">
                    <img src="assets/images/post-5-mid.jpg" alt="He made his passenger captain of one" />
                    <span className="nk-post-comments-count">13</span>
                    <span className="nk-post-categories">
                      <span className="bg-main-5">Indie</span>
                    </span>
                  </a>
                  <div className="nk-gap" />
                  <h2 className="nk-post-title h4"><a href="/BlogArticle">He made his passenger captain of one</a></h2>
                  <div className="nk-post-text">
                    <p>Just then her head struck against the roof of the hall: in fact she was now more than nine feet high, and she at once took up the little golden key and hurried off to the garden door...</p>
                  </div>
                  <div className="nk-gap" />
                  <a href="/BlogArticle" className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1">Read More</a>
                  <div className="nk-post-date float-right"><span className="fa fa-calendar" /> Jul 23, 2018</div>
                </div>
                {/* END: Post */}
              </div>
              <div className="col-md-6 col-lg-3">
                {/* START: Post */}
                <div className="nk-blog-post">
                  <a href="/BlogArticle" className="nk-post-img">
                    <img src="assets/images/post-6-mid.jpg" alt="At first, for some time, I was not able to answer" />
                    <span className="nk-post-comments-count">0</span>
                    <span className="nk-post-categories">
                      <span className="bg-main-5">Racing</span>
                    </span>
                  </a>
                  <div className="nk-gap" />
                  <h2 className="nk-post-title h4"><a href="/BlogArticle">At first, for some time, I was not able to answer</a></h2>
                  <div className="nk-post-text">
                    <p>This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that...</p>
                  </div>
                  <div className="nk-gap" />
                  <a href="/BlogArticle" className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1">Read More</a>
                  <div className="nk-post-date float-right"><span className="fa fa-calendar" /> Jul 3, 2018</div>
                </div>
                {/* END: Post */}
              </div>
              <div className="col-md-6 col-lg-3">
                {/* START: Post */}
                <div className="nk-blog-post">
                  <a href="/BlogArticle" className="nk-post-img">
                    <img src="assets/images/post-7-mid.jpg" alt="At length one of them called out in a clear" />
                    <span className="nk-post-comments-count">0</span>
                    <span className="nk-post-categories">
                      <span className="bg-main-6">MOBA</span>
                    </span>
                  </a>
                  <div className="nk-gap" />
                  <h2 className="nk-post-title h4"><a href="/BlogArticle">At length one of them called out in a clear</a></h2>
                  <div className="nk-post-text">
                    <p>TJust then her head struck against the roof of the hall: in fact she was now more than nine feet high, and she at once took up the little golden key and hurried off to the garden door...</p>
                  </div>
                  <div className="nk-gap" />
                  <a href="/BlogArticle" className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1">Read More</a>
                  <div className="nk-post-date float-right"><span className="fa fa-calendar" /> Jul 3, 2018</div>
                </div>
                {/* END: Post */}
              </div>
              <div className="col-md-6 col-lg-3">
                {/* START: Post */}
                <div className="nk-blog-post">
                  <a href="/BlogArticle" className="nk-post-img">
                    <img src="assets/images/post-8-mid.jpg" alt="For good, too though, in consequence" />
                    <span className="nk-post-comments-count">0</span>
                    <span className="nk-post-categories">
                      <span className="bg-main-2">Adventure</span>
                    </span>
                  </a>
                  <div className="nk-gap" />
                  <h2 className="nk-post-title h4"><a href="/BlogArticle">For good, too though, in consequence</a></h2>
                  <div className="nk-post-text">
                    <p>This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that...</p>
                  </div>
                  <div className="nk-gap" />
                  <a href="/BlogArticle" className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1">Read More</a>
                  <div className="nk-post-date float-right"><span className="fa fa-calendar" /> Jul 3, 2018</div>
                </div>
                {/* END: Post */}
              </div>
            </div>
          </div>
          {/* END: Latest News */}
          <div className="nk-gap-2" />
          <div className="row vertical-gap">
            <div className="col-lg-8">
              {/* START: Tabbed News  */}
              <div className="nk-gap-3" />
              <h3 className="nk-decorated-h-2"><span><span className="text-main-1">Tabbed</span> News</span></h3>
              <div className="nk-gap" />
              <div className="nk-tabs">
                {/*
                    Additional Classes:
                        .nav-tabs-fill
                */}
                <ul className="nav nav-tabs nav-tabs-fill" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" href="#tabs-1-1" role="tab" data-toggle="tab">Action</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#tabs-1-2" role="tab" data-toggle="tab">MMO</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#tabs-1-3" role="tab" data-toggle="tab">Strategy</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#tabs-1-4" role="tab" data-toggle="tab">Adventure</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#tabs-1-5" role="tab" data-toggle="tab">Racing</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#tabs-1-6" role="tab" data-toggle="tab">Indie</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div role="tabpanel" className="tab-pane fade show active" id="tabs-1-1">
                    <div className="nk-gap" />
                    {/* START: Action Tab */}
                    <div className="nk-blog-post nk-blog-post-border-bottom">
                      <a href="/BlogArticle" className="nk-post-img">
                        <img src="assets/images/post-2-fw.jpg" alt="Grab your sword and fight the Horde" />
                        <span className="nk-post-categories">
                          <span className="bg-main-1">Action</span>
                        </span>
                      </a>
                      <div className="nk-gap-1" />
                      <h2 className="nk-post-title h4"><a href="/BlogArticle">Grab your sword and fight the Horde</a></h2>
                      <div className="nk-post-date mt-10 mb-10">
                        <span className="fa fa-calendar" /> Sep 5, 2018
                        <span className="fa fa-comments" /> <a href="#">7 comments</a>
                      </div>
                      <div className="nk-post-text">
                        <p>For good, too; though, in consequence of my previous emotions, I was still occasionally seized with a stormy sob . After we had jogged on for some little time, I asked the carrier...</p>
                      </div>
                    </div>
                    <div className="nk-blog-post nk-blog-post-border-bottom">
                      <div className="row vertical-gap">
                        <div className="col-lg-3 col-md-5">
                          <a href="/BlogArticle" className="nk-post-img">
                            <img src="assets/images/post-7-mid-square.jpg" alt="At length one of them called out in a clear" />
                            <span className="nk-post-categories">
                              <span className="bg-main-1">Action</span>
                            </span>
                          </a>
                        </div>
                        <div className="col-lg-9 col-md-7">
                          <h2 className="nk-post-title h4"><a href="/BlogArticle">At length one of them called out in a clear</a></h2>
                          <div className="nk-post-date mt-10 mb-10">
                            <span className="fa fa-calendar" /> Jul 3, 2018
                            <span className="fa fa-comments" /> <a href="#">0 comments</a>
                          </div>
                          <div className="nk-post-text">
                            <p>TJust then her head struck against the roof of the hall: in fact she was now more than nine feet high, and she at once took up the little golden key and hurried off to the garden door...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="nk-blog-post nk-blog-post-border-bottom">
                      <div className="row vertical-gap">
                        <div className="col-lg-3 col-md-5">
                          <a href="/BlogArticle" className="nk-post-img">
                            <img src="assets/images/post-9-mid-square.jpg" alt="He made his passenger captain of one" />
                            <span className="nk-post-categories">
                              <span className="bg-main-1">Action</span>
                            </span>
                          </a>
                        </div>
                        <div className="col-lg-9 col-md-7">
                          <h2 className="nk-post-title h4"><a href="/BlogArticle">He made his passenger captain of one</a></h2>
                          <div className="nk-post-date mt-10 mb-10">
                            <span className="fa fa-calendar" /> Jul 3, 2018
                            <span className="fa fa-comments" /> <a href="#">0 comments</a>
                          </div>
                          <div className="nk-post-text">
                            <p>Just then her head struck against the roof of the hall: in fact she was now more than nine feet high, and she at once took up the little golden key and hurried off to the garden door...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* END: Action Tab */}
                    <div className="nk-gap" />
                  </div>
                  <div role="tabpanel" className="tab-pane fade" id="tabs-1-2">
                    <div className="nk-gap" />
                    {/* START: MMO Tab */}
                    <div className="nk-blog-post nk-blog-post-border-bottom">
                      <a href="/BlogArticle" className="nk-post-img">
                        <img src="assets/images/post-1-fw.jpg" alt="Smell magic in the air. Or maybe barbecue" />
                        <span className="nk-post-categories">
                          <span className="bg-main-4">MMO</span>
                        </span>
                      </a>
                      <div className="nk-gap-1" />
                      <h2 className="nk-post-title h4"><a href="/BlogArticle">Smell magic in the air. Or maybe barbecue</a></h2>
                      <div className="nk-post-date mt-10 mb-10">
                        <span className="fa fa-calendar" /> Sep 18, 2018
                        <span className="fa fa-comments" /> <a href="#">4 comments</a>
                      </div>
                      <div className="nk-post-text">
                        <p>With what mingled joy and sorrow do I take up the pen to write to my dearest friend! Oh, what a change between to-day and yesterday! Now I am friendless and alone...</p>
                      </div>
                    </div>
                    <div className="nk-blog-post nk-blog-post-border-bottom">
                      <div className="row vertical-gap">
                        <div className="col-lg-3 col-md-5">
                          <a href="/BlogArticle" className="nk-post-img">
                            <img src="assets/images/post-5-mid-square.jpg" alt="He made his passenger captain of one" />
                            <span className="nk-post-categories">
                              <span className="bg-main-4">MMO</span>
                            </span>
                          </a>
                        </div>
                        <div className="col-lg-9 col-md-7">
                          <h2 className="nk-post-title h4"><a href="/BlogArticle">He made his passenger captain of one</a></h2>
                          <div className="nk-post-date mt-10 mb-10">
                            <span className="fa fa-calendar" /> Jul 23, 2018
                            <span className="fa fa-comments" /> <a href="#">13 comments</a>
                          </div>
                          <div className="nk-post-text">
                            <p>Just then her head struck against the roof of the hall: in fact she was now more than nine feet high, and she at once took up the little golden key and hurried off to the garden door...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* END: MMO Tab */}
                    <div className="nk-gap" />
                  </div>
                  <div role="tabpanel" className="tab-pane fade" id="tabs-1-3">
                    <div className="nk-gap" />
                    {/* START: Strategy Tab */}
                    <div className="nk-blog-post nk-blog-post-border-bottom">
                      <a href="/BlogArticle" className="nk-post-img">
                        <img src="assets/images/post-3-fw.jpg" alt="We found a witch! May we burn her?" />
                        <span className="nk-post-categories">
                          <span className="bg-main-3">Strategy</span>
                        </span>
                      </a>
                      <div className="nk-gap-1" />
                      <h2 className="nk-post-title h4"><a href="/BlogArticle">We found a witch! May we burn her?</a></h2>
                      <div className="nk-post-date mt-10 mb-10">
                        <span className="fa fa-calendar" /> Aug 27, 2018
                        <span className="fa fa-comments" /> <a href="#">7 comments</a>
                      </div>
                      <div className="nk-post-text">
                        <p>And she went on planning to herself how she would manage it. `They must go by the carrier,' she thought; `and how funny it'll seem, sending presents to one's own feet!...</p>
                      </div>
                    </div>
                    <div className="nk-blog-post nk-blog-post-border-bottom">
                      <div className="row vertical-gap">
                        <div className="col-lg-3 col-md-5">
                          <a href="/BlogArticle" className="nk-post-img">
                            <img src="assets/images/post-4-mid-square.jpg" alt="For good, too though, in consequence" />
                            <span className="nk-post-categories">
                              <span className="bg-main-3">Strategy</span>
                            </span>
                          </a>
                        </div>
                        <div className="col-lg-9 col-md-7">
                          <h2 className="nk-post-title h4"><a href="/BlogArticle">For good, too though, in consequence</a></h2>
                          <div className="nk-post-date mt-10 mb-10">
                            <span className="fa fa-calendar" /> Aug 14, 2018
                            <span className="fa fa-comments" /> <a href="#">23 comments</a>
                          </div>
                          <div className="nk-post-text">
                            <p>This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* END: Strategy Tab */}
                    <div className="nk-gap" />
                  </div>
                  <div role="tabpanel" className="tab-pane fade" id="tabs-1-4">
                    <div className="nk-gap" />
                    {/* START: Adventure Tab */}
                    <div className="nk-blog-post nk-blog-post-border-bottom">
                      <a href="/BlogArticle" className="nk-post-img">
                        <img src="assets/images/post-6-fw.jpg" alt="At first, for some time, I was not able to answer" />
                        <span className="nk-post-categories">
                          <span className="bg-main-2">Adventure</span>
                        </span>
                      </a>
                      <div className="nk-gap-1" />
                      <h2 className="nk-post-title h4"><a href="/BlogArticle">At first, for some time, I was not able to answer</a></h2>
                      <div className="nk-post-date mt-10 mb-10">
                        <span className="fa fa-calendar" /> Jul 3, 2018
                        <span className="fa fa-comments" /> <a href="#">0 comments</a>
                      </div>
                      <div className="nk-post-text">
                        <p>This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that...</p>
                      </div>
                    </div>
                    {/* END: Adventure Tab */}
                    <div className="nk-gap" />
                  </div>
                  <div role="tabpanel" className="tab-pane fade" id="tabs-1-5">
                    <div className="nk-gap" />
                    {/* START: Racing Tab */}
                    <div className="nk-blog-post nk-blog-post-border-bottom">
                      <a href="/BlogArticle" className="nk-post-img">
                        <img src="assets/images/post-7-fw.jpg" alt="At length one of them called out in a clear" />
                        <span className="nk-post-categories">
                          <span className="bg-main-5">Racing</span>
                        </span>
                      </a>
                      <div className="nk-gap-1" />
                      <h2 className="nk-post-title h4"><a href="/BlogArticle">At length one of them called out in a clear</a></h2>
                      <div className="nk-post-date mt-10 mb-10">
                        <span className="fa fa-calendar" /> Jul 3, 2018
                        <span className="fa fa-comments" /> <a href="#">0 comments</a>
                      </div>
                      <div className="nk-post-text">
                        <p>TJust then her head struck against the roof of the hall: in fact she was now more than nine feet high, and she at once took up the little golden key and hurried off to the garden door...</p>
                      </div>
                    </div>
                    <div className="nk-blog-post nk-blog-post-border-bottom">
                      <div className="row vertical-gap">
                        <div className="col-lg-3 col-md-5">
                          <a href="/BlogArticle" className="nk-post-img">
                            <img src="assets/images/post-3-mid-square.jpg" alt="We found a witch! May we burn her?" />
                            <span className="nk-post-categories">
                              <span className="bg-main-5">Racing</span>
                            </span>
                          </a>
                        </div>
                        <div className="col-lg-9 col-md-7">
                          <h2 className="nk-post-title h4"><a href="/BlogArticle">We found a witch! May we burn her?</a></h2>
                          <div className="nk-post-date mt-10 mb-10">
                            <span className="fa fa-calendar" /> Aug 27, 2018
                            <span className="fa fa-comments" /> <a href="#">7 comments</a>
                          </div>
                          <div className="nk-post-text">
                            <p>And she went on planning to herself how she would manage it. `They must go by the carrier,' she thought; `and how funny it'll seem, sending presents to one's own feet!...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="nk-blog-post nk-blog-post-border-bottom">
                      <div className="row vertical-gap">
                        <div className="col-lg-3 col-md-5">
                          <a href="/BlogArticle" className="nk-post-img">
                            <img src="assets/images/post-4-mid-square.jpg" alt="For good, too though, in consequence" />
                            <span className="nk-post-categories">
                              <span className="bg-main-5">Racing</span>
                            </span>
                          </a>
                        </div>
                        <div className="col-lg-9 col-md-7">
                          <h2 className="nk-post-title h4"><a href="/BlogArticle">For good, too though, in consequence</a></h2>
                          <div className="nk-post-date mt-10 mb-10">
                            <span className="fa fa-calendar" /> Aug 14, 2018
                            <span className="fa fa-comments" /> <a href="#">23 comments</a>
                          </div>
                          <div className="nk-post-text">
                            <p>This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* END: Racing Tab */}
                    <div className="nk-gap" />
                  </div>
                  <div role="tabpanel" className="tab-pane fade" id="tabs-1-6">
                    <div className="nk-gap" />
                    {/* START: Indie Tab */}
                    <div className="nk-blog-post nk-blog-post-border-bottom">
                      <a href="/BlogArticle" className="nk-post-img">
                        <img src="assets/images/post-5-fw.jpg" alt="He made his passenger captain of one" />
                        <span className="nk-post-categories">
                          <span className="bg-main-2">Indie</span>
                        </span>
                      </a>
                      <div className="nk-gap-1" />
                      <h2 className="nk-post-title h4"><a href="/BlogArticle">He made his passenger captain of one</a></h2>
                      <div className="nk-post-date mt-10 mb-10">
                        <span className="fa fa-calendar" /> Jul 23, 2018
                        <span className="fa fa-comments" /> <a href="#">13 comments</a>
                      </div>
                      <div className="nk-post-text">
                        <p>Just then her head struck against the roof of the hall: in fact she was now more than nine feet high, and she at once took up the little golden key and hurried off to the garden door...</p>
                      </div>
                    </div>
                    {/* END: Indie Tab */}
                    <div className="nk-gap" />
                  </div>
                </div>
              </div>
              {/* END: Tabbed News */}
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
                <div className="nk-widget">
                </div>
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
                </div>
                <div className="nk-widget nk-widget-highlighted">
                  <h4 className="nk-widget-title"><span><span className="text-main-1">Most</span> Popular</span></h4>
                  <div className="nk-widget-content">
                    <div className="nk-widget-post">
                      <a href="/Product" className="nk-post-image">
                        <img src="assets/images/product-1-xs.jpg" alt="So saying he unbuckled" />
                      </a>
                      <h3 className="nk-post-title"><a href="/Product">So saying he unbuckled</a></h3>
                      <div className="nk-product-rating" data-rating={4}> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="far fa-star" /></div>
                      <div className="nk-product-price">€ 23.00</div>
                    </div>
                    <div className="nk-widget-post">
                      <a href="/Product" className="nk-post-image">
                        <img src="assets/images/product-2-xs.jpg" alt="However, I have reason" />
                      </a>
                      <h3 className="nk-post-title"><a href="/Product">However, I have reason</a></h3>
                      <div className="nk-product-rating" data-rating="2.5"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fas fa-star-half" /> <i className="far fa-star" /> <i className="far fa-star" /></div>
                      <div className="nk-product-price">€ 32.00</div>
                    </div>
                    <div className="nk-widget-post">
                      <a href="/Product" className="nk-post-image">
                        <img src="assets/images/product-3-xs.jpg" alt="It was some time before" />
                      </a>
                      <h3 className="nk-post-title"><a href="/Product">It was some time before</a></h3>
                      <div className="nk-product-rating" data-rating={5}> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /></div>
                      <div className="nk-product-price">€ 14.00</div>
                    </div>
                  </div>
                </div>
              </aside>
              {/* END: Sidebar */}
            </div>
          </div>
        </div>
        <div className="nk-gap-4" />
      </div>
            </div>
        )
    }
}
