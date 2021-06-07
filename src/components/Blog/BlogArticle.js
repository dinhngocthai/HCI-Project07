import React, { Component } from 'react'

export default class BlogArticle extends Component {
    render() {
        return (
            <div>
                
      <div className="nk-main">
        {/* START: Breadcrumbs */}
        <div className="nk-gap-1" />
        <div className="container">
          <ul className="nk-breadcrumbs">
            <li><a href="/">Home</a></li>
            <li><span className="fa fa-angle-right" /></li>
            <li><a href="/Blog">Blog</a></li>
            <li><span className="fa fa-angle-right" /></li>
            <li><span>Grab your sword and fight the Horde</span></li>
          </ul>
        </div>
        <div className="nk-gap-1" />
        {/* END: Breadcrumbs */}
        <div className="container">
          <div className="row vertical-gap">
            <div className="col-lg-8">
              {/* START: Post */}
              <div className="nk-blog-post nk-blog-post-single">
                {/* START: Post Text */}
                <div className="nk-post-text mt-0">
                  <div className="nk-post-img">
                    <img src="assets/images/post-2.jpg" alt="Grab your sword and fight the Horde" />
                  </div>
                  <div className="nk-gap-1" />
                  <h1 className="nk-post-title h4">Grab your sword and fight the Horde</h1>
                  <div className="nk-post-by">
                    <img src="assets/images/avatar-2.jpg" alt="Witch Murder" className="rounded-circle" width={35} /> by <a href="#">Witch Murder</a> in Sep 5, 2018
                    <div className="nk-post-categories">
                      <span className="bg-main-1">Action</span>
                      <span className="bg-main-2">Adventure</span>
                    </div>
                  </div>
                  <div className="nk-gap" />
                  <p>Just then her head struck against the roof of the hall: in fact she was now more than nine feet high, and she at once took up the little golden key and hurried off to the garden door.	The first question of course was, how to get dry again: they had a consultation about this, and after a few minutes it seemed quite natural to Alice to find herself talking familiarly with them, as if she had known them all her life. Indeed, she had quite a long argument with the Lory, who at last turned sulky, and would only say, `I am older than you, and must know better'; and this Alice would not allow without knowing how old it was, and, as the Lory positively refused to tell its age, there was no more to be said.</p>
                  <div className="nk-gap" />
                  <blockquote className="nk-blockquote">
                    <div className="nk-blockquote-icon"><span>"</span></div>
                    <div className="nk-blockquote-content">
                      Just then her head struck against the roof of the hall: in fact she was now more than nine feet high, and she at once took up the little golden key and hurried off to the garden door. As if she had known them all her life. Indeed, she had quite a long argument with the Lory.
                    </div>
                    <div className="nk-blockquote-author"><span>Samuel Marlow</span></div>
                  </blockquote>
                  <div className="nk-gap" />
                  <img className="float-left mt-0" src="assets/images/post-inner-img.jpg" alt="" />
                  <h3 className="h4">Now the races of these two have been</h3>
                  <p>I confess this side of the country was much pleasanter than mine; but yet I had not the least inclination to remove, for as I was fixed in my habitation it became natural to me, and I seemed all the while I was here to be as it were upon a journey, and from home. However, I travelled along the shore she clutched the matron by the arm, and forcing her into a chair by the bedside, was about to speak, wh en looking round, she caught sight of the two old women bending forward in the attitude of eager list eners.They belong to the old gentleman, said Oliver, wringing his hands; "to the good, kind, old gentle man who took me into his house, and had me nursed, when I was near dying of the fever . Oh, pray send them back; send him back the books and money</p>

                  <p>This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise, she lost sight of her in a moment, and found herself walking in at the front-door again. For some minutes Alice stood without speaking, looking out in all directions over the country - and a most curious country it was.</p>
                  <div className="nk-gap" />
                  <div className="nk-post-share">
                    <span className="h5">Share Article:</span>
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
                </div>
                {/* END: Post Text */}
                {/* START: Similar Articles */}
                <div className="nk-gap-2" />
                <h3 className="nk-decorated-h-2"><span><span className="text-main-1">Similar</span> Articles</span></h3>
                <div className="nk-gap" />
                <div className="row">
                  <div className="col-md-6">
                    {/* START: Post */}
                    <div className="nk-blog-post">
                      <a href="/BlogArticle" className="nk-post-img">
                        <img src="assets/images/post-3-mid.jpg" alt="We found a witch! May we burn her?" />
                        <span className="nk-post-comments-count">7</span>
                        <span className="nk-post-categories">
                          <span className="bg-main-2">Adventure</span>
                        </span>
                      </a>
                      <div className="nk-gap" />
                      <h2 className="nk-post-title h4"><a href="/BlogArticle">We found a witch! May we burn her?</a></h2>
                    </div>
                    {/* END: Post */}
                  </div>
                  <div className="col-md-6">
                    {/* START: Post */}
                    <div className="nk-blog-post">
                      <a href="/BlogArticle" className="nk-post-img">
                        <img src="assets/images/post-4-mid.jpg" alt="For good, too though, in consequence" />
                        <span className="nk-post-comments-count">23</span>
                        <span className="nk-post-categories">
                          <span className="bg-main-3">Strategy</span>
                        </span>
                      </a>
                      <div className="nk-gap" />
                      <h2 className="nk-post-title h4"><a href="/BlogArticle">For good, too though, in consequence</a></h2>
                    </div>
                    {/* END: Post */}
                  </div>
                </div>
                {/* END: Similar Articles */}
                {/* START: Comments */}
                <div id="comments" />
                <h3 className="nk-decorated-h-2"><span><span className="text-main-1">3</span> Comments</span></h3>
                <div className="nk-gap" />
                <div className="nk-comments">
                  {/* START: Comment */}
                  <div className="nk-comment">
                    <div className="nk-comment-meta">
                      <img src="assets/images/avatar-2.jpg" alt="Witch Murder" className="rounded-circle" width={35} /> by <a href="#">Witch Murder</a> in 20 September, 2018
                      <a href="#" className="nk-btn nk-btn-rounded nk-btn-color-dark-3 float-right">Reply</a>
                    </div>
                    <div className="nk-comment-text">
                      <p>This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise, she lost sight of her in a moment, and found herself walking in at the front-door again.</p>
                    </div>
                    {/* START: Comment */}
                    <div className="nk-comment">
                      <div className="nk-comment-meta">
                        <img src="assets/images/avatar-1.jpg" alt="Hitman" className="rounded-circle" width={35} /> by <a href="#">Hitman</a> in 20 September, 2018
                        <a href="#" className="nk-btn nk-btn-rounded nk-btn-color-dark-3 float-right">Reply</a>
                      </div>
                      <div className="nk-comment-text">
                        <p>To her surprise, she lost sight of her in a moment, and found herself walking in at the front-door again.</p>
                      </div>
                    </div>
                    {/* END: Comment */}
                  </div>
                  {/* END: Comment */}
                  {/* START: Comment */}
                  <div className="nk-comment">
                    <div className="nk-comment-meta">
                      <img src="assets/images/avatar-3.jpg" alt="Wolfenstein" className="rounded-circle" width={35} /> by <a href="#">Wolfenstein</a> in 21 September, 2018
                      <a href="#" className="nk-btn nk-btn-rounded nk-btn-color-dark-3 float-right">Reply</a>
                    </div>
                    <div className="nk-comment-text">
                      <p>The sight of the tumblers restored Bob Sawyer to a degree of equanimity which he had not possessed since his interview with his landlady. His face brightened up, and he began to feel quite convivial.</p>
                    </div>
                  </div>
                  {/* END: Comment */}
                </div>
                {/* END: Comments */}
                {/* START: Reply */}
                <div className="nk-gap-2" />
                <h3 className="nk-decorated-h-2"><span><span className="text-main-1">Leave</span> a Reply</span></h3>
                <div className="nk-gap" />
                <div className="nk-reply">
                  <form action="#" className="nk-form" noValidate="novalidate">
                    <div className="row sm-gap vertical-gap">
                      <div className="col-md-4">
                        <input type="email" className="form-control required" name="email" placeholder="Email *" />
                      </div>
                      <div className="col-md-4">
                        <input type="text" className="form-control required" name="name" placeholder="Name *" />
                      </div>
                      <div className="col-md-4">
                        <input type="text" className="form-control" name="name" placeholder="Website" />
                      </div>
                    </div>
                    <div className="nk-gap-1" />
                    <textarea className="form-control required" name="message" rows={5} placeholder="Message *" aria-required="true" defaultValue={""} />
                    <div className="nk-gap-1" />
                    <div className="nk-form-response-success" />
                    <div className="nk-form-response-error" />
                    <button className="nk-btn nk-btn-rounded nk-btn-color-main-1">Post Comment</button>
                  </form>
                </div>
                {/* END: Reply */}
              </div>
              {/* END: Post */}
            </div>
            <div className="col-lg-4">
              {/*
                START: Sidebar

                Additional Classes:
                    .nk-sidebar-left
                    .nk-sidebar-right
                    .nk-sidebar-sticky
            */}
              <div className="nk-widget nk-widget-highlighted">
                <h4 className="nk-widget-title"><span><span className="text-main-1">We</span> Are Social</span></h4>
                <div className="nk-widget-content">
                  {/*
            Social Links 3

            Additional Classes:
                .nk-social-links-cols-5
                .nk-social-links-cols-4
                .nk-social-links-cols-3
                .nk-social-links-cols-2
        */}
                  <ul className="nk-social-links-3 nk-social-links-cols-4">
                    <li><a className="nk-social-twitch" href="#"><span className="fab fa-twitch" /></a></li>
                    <li><a className="nk-social-instagram" href="#"><span className="fab fa-instagram" /></a></li>
                    <li><a className="nk-social-facebook" href="#"><span className="fab fa-facebook" /></a></li>
                    <li><a className="nk-social-google-plus" href="#"><span className="fab fa-google-plus" /></a></li>
                    <li><a className="nk-social-youtube" href="#"><span className="fab fa-youtube" /></a></li>
                    <li><a className="nk-social-twitter" href="#" target="_blank"><span className="fab fa-twitter" /></a></li>
                    <li><a className="nk-social-pinterest" href="#"><span className="fab fa-pinterest-p" /></a></li>
                    <li><a className="nk-social-rss" href="#"><span className="fa fa-rss" /></a></li>
                    {/* Additional Social Buttons
                <li><a class="nk-social-behance" href="#"><span class="fab fa-behance"></span></a></li>
                <li><a class="nk-social-bitbucket" href="#"><span class="fab fa-bitbucket"></span></a></li>
                <li><a class="nk-social-dropbox" href="#"><span class="fab fa-dropbox"></span></a></li>
                <li><a class="nk-social-dribbble" href="#"><span class="fab fa-dribbble"></span></a></li>
                <li><a class="nk-social-deviantart" href="#"><span class="fab fa-deviantart"></span></a></li>
                <li><a class="nk-social-flickr" href="#"><span class="fab fa-flickr"></span></a></li>
                <li><a class="nk-social-foursquare" href="#"><span class="fab fa-foursquare"></span></a></li>
                <li><a class="nk-social-github" href="#"><span class="fab fa-github"></span></a></li>
                <li><a class="nk-social-linkedin" href="#"><span class="fab fa-linkedin"></span></a></li>
                <li><a class="nk-social-medium" href="#"><span class="fab fa-medium"></span></a></li>
                <li><a class="nk-social-odnoklassniki" href="#"><span class="fab fa-odnoklassniki"></span></a></li>
                <li><a class="nk-social-paypal" href="#"><span class="fab fa-paypal"></span></a></li>
                <li><a class="nk-social-reddit" href="#"><span class="fab fa-reddit"></span></a></li>
                <li><a class="nk-social-skype" href="#"><span class="fab fa-skype"></span></a></li>
                <li><a class="nk-social-soundcloud" href="#"><span class="fab fa-soundcloud"></span></a></li>
                <li><a class="nk-social-steam" href="#"><span class="fab fa-steam"></span></a></li>
                <li><a class="nk-social-slack" href="#"><span class="fab fa-slack"></span></a></li>
                <li><a class="nk-social-tumblr" href="#"><span class="fab fa-tumblr"></span></a></li>
                <li><a class="nk-social-vimeo" href="#"><span class="fab fa-vimeo"></span></a></li>
                <li><a class="nk-social-vk" href="#"><span class="fab fa-vk"></span></a></li>
                <li><a class="nk-social-wordpress" href="#"><span class="fab fa-wordpress"></span></a></li>
            */}
                  </ul>
                </div>
              </div>
              <div className="nk-widget nk-widget-highlighted">
                <h4 className="nk-widget-title"><span><span className="text-main-1">Top 3</span> Recent</span></h4>
                <div className="nk-widget-content">
                  <div className="nk-widget-post">
                    <a href="/BlogArticle" className="nk-post-image">
                      <img src="assets/images/post-1-sm.jpg" alt="" />
                    </a>
                    <h3 className="nk-post-title"><a href="/BlogArticle">Smell magic in the air. Or maybe barbecue</a></h3>
                    <div className="nk-post-date"><span className="fa fa-calendar" /> Sep 18, 2018</div>
                  </div>
                  <div className="nk-widget-post">
                    <a href="/BlogArticle" className="nk-post-image">
                      <img src="assets/images/post-2-sm.jpg" alt="" />
                    </a>
                    <h3 className="nk-post-title"><a href="/BlogArticle">Grab your sword and fight the Horde</a></h3>
                    <div className="nk-post-date"><span className="fa fa-calendar" /> Sep 5, 2018</div>
                  </div>
                  <div className="nk-widget-post">
                    <a href="/BlogArticle" className="nk-post-image">
                      <img src="assets/images/post-3-sm.jpg" alt="" />
                    </a>
                    <h3 className="nk-post-title"><a href="/BlogArticle">We found a witch! May we burn her?</a></h3>
                    <div className="nk-post-date"><span className="fa fa-calendar" /> Aug 27, 2018</div>
                  </div>
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
                    <a href="store-product.html" className="nk-post-image">
                      <img src="assets/images/product-1-xs.jpg" alt="So saying he unbuckled" />
                    </a>
                    <h3 className="nk-post-title"><a href="store-product.html">So saying he unbuckled</a></h3>
                    <div className="nk-product-rating" data-rating={4}> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="far fa-star" /></div>
                    <div className="nk-product-price">€ 23.00</div>
                  </div>
                  <div className="nk-widget-post">
                    <a href="store-product.html" className="nk-post-image">
                      <img src="assets/images/product-2-xs.jpg" alt="However, I have reason" />
                    </a>
                    <h3 className="nk-post-title"><a href="store-product.html">However, I have reason</a></h3>
                    <div className="nk-product-rating" data-rating="2.5"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fas fa-star-half" /> <i className="far fa-star" /> <i className="far fa-star" /></div>
                    <div className="nk-product-price">€ 32.00</div>
                  </div>
                  <div className="nk-widget-post">
                    <a href="store-product.html" className="nk-post-image">
                      <img src="assets/images/product-3-xs.jpg" alt="It was some time before" />
                    </a>
                    <h3 className="nk-post-title"><a href="store-product.html">It was some time before</a></h3>
                    <div className="nk-product-rating" data-rating={5}> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /></div>
                    <div className="nk-product-price">€ 14.00</div>
                  </div>
                </div>
              </div>
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
