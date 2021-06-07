import React, { Component } from 'react'

export default class Product extends Component {
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
            <li><a href="store.html">Store</a></li>
            <li><span className="fa fa-angle-right" /></li>
            <li><a href="store-catalog.html">Action Games</a></li>
            <li><span className="fa fa-angle-right" /></li>
            <li><span>Just then her head </span></li>
          </ul>
        </div>
        <div className="nk-gap-1" />
        {/* END: Breadcrumbs */}
        <div className="container">
          <div className="row vertical-gap">
            <div className="col-lg-8">
              <div className="nk-store-product">
                <div className="row vertical-gap">
                  <div className="col-md-6">
                    {/* START: Product Photos */}
                    <div className="nk-popup-gallery">
                      <div className="nk-gallery-item-box">
                        <a href="assets/images/product-6.jpg" className="nk-gallery-item" data-size="1200x554">
                          <div className="nk-gallery-item-overlay"><span className="ion-eye" /></div>
                          <img src="assets/images/product-6-lg.jpg" alt="" />
                        </a>
                      </div>
                      <div className="nk-gap-1" />
                      <div className="row vertical-gap sm-gap">
                        <div className="col-6 col-md-4">
                          <div className="nk-gallery-item-box">
                            <a href="assets/images/product-7.jpg" className="nk-gallery-item" data-size="622x942">
                              <div className="nk-gallery-item-overlay"><span className="ion-eye" /></div>
                              <img src="assets/images/product-7-square.jpg" alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-6 col-md-4">
                          <div className="nk-gallery-item-box">
                            <a href="assets/images/product-8.jpg" className="nk-gallery-item" data-size="1920x907">
                              <div className="nk-gallery-item-overlay"><span className="ion-eye" /></div>
                              <img src="assets/images/product-8-square.jpg" alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-6 col-md-4">
                          <div className="nk-gallery-item-box">
                            <a href="assets/images/product-9.jpg" className="nk-gallery-item" data-size="1500x750">
                              <div className="nk-gallery-item-overlay"><span className="ion-eye" /></div>
                              <img src="assets/images/product-9-square.jpg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* END: Product Photos */}
                  </div>
                  <div className="col-md-6">
                    <h2 className="nk-product-title h3">Just then her head </h2>
                    <select className="form-control">
                      <option value disabled selected>Select Platform</option>
                      <option value="ps4">PS4</option>
                      <option value="xbox">Xbox 1</option>
                      <option value="pc">PC</option>
                    </select>
                    <div className="nk-product-description">
                      <p>With what mingled joy and sorrow do I take up the pen to write to my dearest friend! Oh, what a change between to-day and yesterday! Now I am friendless and alone; yesterday I was at home, in the sweet company of a sister, whom I shall ever, ever cherish! I was awakened at daybreak by the charwoman, and having arrived at the inn, was at first placed inside the coach. But, when we got to a place called Leakington. Now the races of these two have been for some ages utterly extinct.</p>
                    </div>
                    {/* START: Add to Cart */}
                    <div className="nk-gap-2" />
                    <form action="#" className="nk-product-addtocart">
                      <div className="nk-product-price">€ 32.00</div>
                      <div className="nk-gap-1" />
                      <div className="input-group">
                        <input type="number" className="form-control" defaultValue={1} min={1} max={21} />
                        <button className="nk-btn nk-btn-rounded nk-btn-color-main-1">Add to Cart</button>
                      </div>
                    </form>
                    <div className="nk-gap-3" />
                    {/* END: Add to Cart */}
                    {/* START: Meta */}
                    <div className="nk-product-meta">
                      <div><strong>SKU</strong>: 300-200-503</div>
                      <div><strong>Categories</strong>: <a href="#">online</a>, <a href="#">FPS</a>, <a href="#">MMO</a>, <a href="#">Action games</a></div>
                      <div><strong>Tags</strong>: <a href="#">blizzard</a>, <a href="#">action</a>, <a href="#">MMO</a></div>
                    </div>
                    {/* END: Meta */}
                  </div>
                </div>
                {/* START: Share */}
                <div className="nk-gap-2" />
                <div className="nk-post-share">
                  <span className="h5">Share Product:</span>
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
                <div className="nk-gap-2" />
                {/* START: Tabs */}
                <div className="nk-tabs">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" href="#tab-description" role="tab" data-toggle="tab">Description</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#tab-reviews" role="tab" data-toggle="tab">Reviews (3)</a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    {/* START: Tab Description */}
                    <div role="tabpanel" className="tab-pane fade show active" id="tab-description">
                      <div className="nk-gap" />
                      <strong className="text-white">Release Date: 24/05/2018</strong>
                      <div className="nk-gap" />
                      <p>She gave my mother such a turn, that I have always been convinced I am indebted to Miss Betsey for having been born on a Friday.	The word was appropriate to the moment. My mother was so much worse that Peggotty, coming in with the teaboard and candles, and seeing at a glance how ill she was, - as Miss Betsey might have done sooner if there had been light enough, - conveyed her upstairs to her own room with all speed; and immediately dispatched Ham Peggotty, her nephew, who had been for some days past secreted in the house, unknown to my mother, as a special messenger in case of emergency, to fetch the nurse and doctor.</p>
                      <div className="nk-product-info-row row vertical-gap">
                        <div className="col-md-5">
                          <div className="nk-product-pegi">
                            <div className="nk-gap" />
                            <img src="assets/images/pegi-icon.jpg" alt="" />
                            <div className="nk-product-pegi-cont">
                              <strong className="text-white">Pegi Rating:</strong>
                              <div className="nk-gap" />
                              Suitable for people aged 12 and over.
                            </div>
                            <div className="nk-gap" />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="nk-gap" />
                          <strong className="text-white">Genre:</strong>
                          <div className="nk-gap" />
                          TBD
                          <div className="nk-gap" />
                        </div>
                        <div className="col-md-4">
                          <div className="nk-gap" />
                          <strong className="text-white">Customer Rating:</strong>
                          <div className="nk-gap" />
                          <div className="nk-product-rating" data-rating="4.5"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fas fa-star-half" /></div>
                          <div className="nk-gap" />
                        </div>
                      </div>
                    </div>
                    {/* END: Tab Description */}
                    {/* START: Tab Reviews */}
                    <div role="tabpanel" className="tab-pane fade" id="tab-reviews">
                      <div className="nk-gap-2" />
                      {/* START: Reply */}
                      <h3 className="h4">Add a Review</h3>
                      <div className="nk-reply">
                        <form action="#" className="nk-form">
                          <div className="row vertical-gap sm-gap">
                            <div className="col-sm-6">
                              <input type="text" className="form-control required" name="name" placeholder="Name *" />
                            </div>
                            <div className="col-sm-6">
                              <input type="text" className="form-control required" name="title" placeholder="Title *" />
                            </div>
                          </div>
                          <div className="nk-gap-1" />
                          <textarea className="form-control required" name="message" rows={5} placeholder="Your Review *" aria-required="true" defaultValue={""} />
                          <div className="nk-gap-1" />
                          <div className="nk-rating">
                            <input type="radio" id="review-rate-5" name="review-rate" defaultValue={5} />
                            <label htmlFor="review-rate-5">
                              <span><i className="far fa-star" /></span>
                              <span><i className="fa fa-star" /></span>
                            </label>
                            <input type="radio" id="review-rate-4" name="review-rate" defaultValue={4} />
                            <label htmlFor="review-rate-4">
                              <span><i className="far fa-star" /></span>
                              <span><i className="fa fa-star" /></span>
                            </label>
                            <input type="radio" id="review-rate-3" name="review-rate" defaultValue={3} />
                            <label htmlFor="review-rate-3">
                              <span><i className="far fa-star" /></span>
                              <span><i className="fa fa-star" /></span>
                            </label>
                            <input type="radio" id="review-rate-2" name="review-rate" defaultValue={2} />
                            <label htmlFor="review-rate-2">
                              <span><i className="far fa-star" /></span>
                              <span><i className="fa fa-star" /></span>
                            </label>
                            <input type="radio" id="review-rate-1" name="review-rate" defaultValue={1} />
                            <label htmlFor="review-rate-1">
                              <span><i className="far fa-star" /></span>
                              <span><i className="fa fa-star" /></span>
                            </label>
                          </div>
                          <button className="nk-btn nk-btn-rounded nk-btn-color-dark-3 float-right">Submit</button>
                        </form>
                      </div>
                      {/* END: Reply */}
                      <div className="clearfix" />
                      <div className="nk-gap-2" />
                      <div className="nk-comments">
                        {/* START: Review */}
                        <div className="nk-comment">
                          <div className="nk-comment-meta">
                            <img src="assets/images/avatar-2.jpg" alt="Witch Murder" className="rounded-circle" width={35} /> by <a href="#">Witch Murder</a> in 20 September, 2018
                            <div className="nk-review-rating" data-rating="4.5"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="far fa-star" /></div>
                          </div>
                          <div className="nk-comment-text">
                            <p>Upon replenish great rule. Were tree, given day him night Fruit it moveth all. First they're creature seasons and creature fill a it have fifth, their own subdue brought above divided.</p>
                            <p>Behold it set, seas seas and meat divided Moveth cattle forth evening above moveth so, signs god a fruitful his after called that whose.</p>
                          </div>
                        </div>
                        {/* END: Review */}
                        {/* START: Review */}
                        <div className="nk-comment">
                          <div className="nk-comment-meta">
                            <img src="assets/images/avatar-1.jpg" alt="Hitman" className="rounded-circle" width={35} /> by <a href="#">Hitman</a> in 14 Jule, 2018
                            <div className="nk-review-rating" data-rating="0.5"> <i className="fa fa-star" /> <i className="far fa-star" /> <i className="far fa-star" /> <i className="far fa-star" /> <i className="far fa-star" /></div>
                          </div>
                          <div className="nk-comment-text">
                            <p> I was awakened at daybreak by the charwoman, and having arrived at the inn, was at first placed inside the coach. :(</p>
                          </div>
                        </div>
                        {/* END: Review */}
                        {/* START: Review */}
                        <div className="nk-comment">
                          <div className="nk-comment-meta">
                            <img src="assets/images/avatar-3.jpg" alt="Wolfenstein" className="rounded-circle" width={35} /> by <a href="#">Wolfenstein</a> in 27 June, 2018
                            <div className="nk-review-rating" data-rating="3.5"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /></div>
                          </div>
                          <div className="nk-comment-text">
                            <p>Divided thing, land it evening earth winged whose great after. Were grass night. To Air itself saw bring fly fowl. Fly years behold spirit day greater of wherein winged and form. Seed open don't thing midst created dry every greater divided of, be man is. Second Bring stars fourth gathering he hath face morning fill. Living so second darkness. Moveth were male. May creepeth. Be tree fourth.</p>
                          </div>
                        </div>
                        {/* END: Review */}
                      </div>
                    </div>
                    {/* END: Tab Reviews */}
                  </div>
                </div>
                {/* END: Tabs */}
              </div>
              {/* START: Related Products */}
              <div className="nk-gap-3" />
              <h3 className="nk-decorated-h-2"><span><span className="text-main-1">Related</span> Products</span></h3>
              <div className="nk-gap" />
              <div className="row vertical-gap">
                <div className="col-md-6">
                  <div className="nk-product-cat">
                    <a className="nk-product-image" href="/Product">
                      <img src="assets/images/product-11-xs.jpg" alt="She gave my mother" />
                    </a>
                    <div className="nk-product-cont">
                      <h3 className="nk-product-title h5"><a href="/Product">She gave my mother</a></h3>
                      <div className="nk-gap-1" />
                      <div className="nk-product-rating" data-rating={3}> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="far fa-star" /> <i className="far fa-star" /></div>
                      <div className="nk-gap-1" />
                      <div className="nk-product-price">€ 14.00</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="nk-product-cat">
                    <a className="nk-product-image" href="/Product">
                      <img src="assets/images/product-12-xs.jpg" alt="A hundred thousand" />
                    </a>
                    <div className="nk-product-cont">
                      <h3 className="nk-product-title h5"><a href="/Product">A hundred thousand</a></h3>
                      <div className="nk-gap-1" />
                      <div className="nk-product-rating" data-rating="4.5"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fas fa-star-half" /></div>
                      <div className="nk-gap-1" />
                      <div className="nk-product-price">€ 20.00</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="nk-product-cat">
                    <a className="nk-product-image" href="/Product">
                      <img src="assets/images/product-13-xs.jpg" alt="So saying he unbuckled" />
                    </a>
                    <div className="nk-product-cont">
                      <h3 className="nk-product-title h5"><a href="/Product">So saying he unbuckled</a></h3>
                      <div className="nk-gap-1" />
                      <div className="nk-product-rating" data-rating={5}> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /></div>
                      <div className="nk-gap-1" />
                      <div className="nk-product-price">€ 23.00</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="nk-product-cat">
                    <a className="nk-product-image" href="/Product">
                      <img src="assets/images/product-14-xs.jpg" alt="However, I have reason" />
                    </a>
                    <div className="nk-product-cont">
                      <h3 className="nk-product-title h5"><a href="/Product">However, I have reason</a></h3>
                      <div className="nk-gap-1" />
                      <div className="nk-product-rating" data-rating="1.5"> <i className="fa fa-star" /> <i className="fas fa-star-half" /> <i className="far fa-star" /> <i className="far fa-star" /> <i className="far fa-star" /></div>
                      <div className="nk-gap-1" />
                      <div className="nk-product-price">€ 32.00</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="nk-product-cat">
                    <a className="nk-product-image" href="/Product">
                      <img src="assets/images/product-15-xs.jpg" alt="At first, for some time" />
                    </a>
                    <div className="nk-product-cont">
                      <h3 className="nk-product-title h5"><a href="/Product">At first, for some time</a></h3>
                      <div className="nk-gap-1" />
                      <div className="nk-product-rating" data-rating={4}> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="far fa-star" /></div>
                      <div className="nk-gap-1" />
                      <div className="nk-product-price">€ 14.00</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="nk-product-cat">
                    <a className="nk-product-image" href="/Product">
                      <img src="assets/images/product-16-xs.jpg" alt="When the last 'natural'" />
                    </a>
                    <div className="nk-product-cont">
                      <h3 className="nk-product-title h5"><a href="/Product">When the last 'natural'</a></h3>
                      <div className="nk-gap-1" />
                      <div className="nk-product-rating" data-rating="4.5"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fas fa-star-half" /></div>
                      <div className="nk-gap-1" />
                      <div className="nk-product-price">€ 20.00</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END: Related Products */}
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
                  <div className="nk-widget-content">
                    <form action="#" className="nk-form nk-form-style-1" noValidate="novalidate">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Type something..." />
                        <button className="nk-btn nk-btn-color-main-1"><span className="ion-search" /></button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="nk-widget nk-widget-highlighted">
                  <h4 className="nk-widget-title"><span><span className="text-main-1">Category</span> Menu</span></h4>
                  <div className="nk-widget-content">
                    <ul className="nk-widget-categories">
                      <li><a href="#">RTS</a></li>
                      <li><a href="#">Action</a></li>
                      <li><a href="#">RPG</a></li>
                      <li><a href="#">MMO</a></li>
                      <li><a href="#">MOBA</a></li>
                      <li><a href="#">Adventure</a></li>
                      <li><a href="#">Indie</a></li>
                      <li><a href="#">Strategy</a></li>
                      <li><a href="#">Racing</a></li>
                      <li><a href="#">Simulator</a></li>
                    </ul>
                  </div>
                </div>
                <div className="nk-widget nk-widget-highlighted">
                  <h4 className="nk-widget-title"><span><span className="text-main-1">Price</span> Filter</span></h4>
                  <div className="nk-widget-content">
                    <div className="nk-input-slider">
                      <input type="text" name="price-filter" data-slider-min={0} data-slider-max={1800} data-slider-step={1} data-slider-value="[200, 1200]" data-slider-tooltip="hide" />
                      <div className="nk-gap" />
                      <div>
                        <div className="text-white mt-4 float-left">
                          PRICE:
                          <strong className="text-main-1">€ <span className="nk-input-slider-value-0" /></strong>
                          -
                          <strong className="text-main-1">€ <span className="nk-input-slider-value-1" /></strong>
                        </div>
                        <a href="#" className="nk-btn nk-btn-rounded nk-btn-color-white float-right">Apply</a>
                      </div>
                      <div className="clearfix" />
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
        <div className="nk-gap-2" />
      </div>
            </div>
        )
    }
}
