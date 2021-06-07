import React, { Component } from 'react'
import 'react-bootstrap'
export default class Galley extends Component {
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
            <li><span>Store</span></li>
          </ul>
        </div>
        <div className="nk-gap-1" />
        {/* END: Breadcrumbs */}
        <div className="container">
          {/* START: Categories */}
          <div className="row vertical-gap">
            <div className="col-lg-4">
              <div className="nk-feature-1">
                <div className="nk-feature-icon">
                  <img src="assets/images/icon-mouse.png" alt="" />
                </div>
                <div className="nk-feature-cont">
                  <h3 className="nk-feature-title"><a href="#">PC</a></h3>
                  <h3 className="nk-feature-title text-main-1"><a href="#">View Games</a></h3>
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
                  <h3 className="nk-feature-title text-main-1"><a href="#">View Games</a></h3>
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
                  <h3 className="nk-feature-title text-main-1"><a href="#">View Games</a></h3>
                </div>
              </div>
            </div>
          </div>
          {/* END: Categories */}
          {/* START: Some Products */}
          <div className="nk-gap-2" />
          <div className="row vertical-gap">
            <div className="col-md-6 col-lg-4">
              <div className="nk-gallery-item-box">
                <a href="/Product" className="nk-gallery-item">
                  <span className="nk-gallery-item-overlay"><span><span className="nk-icon-circles" /></span></span>
                  <img src="assets/images/product-4-lg.jpg" alt="She was bouncing" />
                </a>
                <div className="nk-gallery-item-label">
                  <h4 className="mb-0">She was bouncing</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 order-lg-3">
              <div className="nk-gallery-item-box">
                <a href="/Product" className="nk-gallery-item">
                  <span className="nk-gallery-item-overlay"><span><span className="nk-icon-circles" /></span></span>
                  <img src="assets/images/product-2-lg.jpg" alt="However, I have reason" />
                </a>
                <div className="nk-gallery-item-label">
                  <h4 className="mb-0">However, I have reason</h4>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="row vertical-gap">
                <div className="col-md-6">
                  <div className="nk-gallery-item-box">
                    <a href="/Product" className="nk-gallery-item">
                      <span className="nk-gallery-item-overlay"><span><span className="nk-icon-circles" /></span></span>
                      <img src="assets/images/product-3-lg.jpg" alt="It was some time before" />
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="nk-gallery-item-box">
                    <a href="/Product" className="nk-gallery-item">
                      <span className="nk-gallery-item-overlay"><span><span className="nk-icon-circles" /></span></span>
                      <img src="assets/images/product-1-lg.jpg" alt="So saying he unbuckled" />
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="nk-gallery-item-box">
                    <a href="/Product" className="nk-gallery-item">
                      <span className="nk-gallery-item-overlay"><span><span className="nk-icon-circles" /></span></span>
                      <img src="assets/images/product-5-lg.jpg" alt="In all revolutions of" />
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="nk-gallery-item-box">
                    <a href="/Product" className="nk-gallery-item">
                      <span className="nk-gallery-item-overlay"><span><span className="nk-icon-circles" /></span></span>
                      <img src="assets/images/product-6-lg.jpg" alt="Just then her head " />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END: Some Products */}
         
          {/* START: Featured Games */}
          <div className="nk-gap-3" />
          <h3 className="nk-decorated-h-2"><span><span className="text-main-1">Featured</span> Games</span></h3>
          <div className="nk-gap" />
          <div className="row vertical-gap">
            <div className="col-lg-6">
              <div className="nk-product-cat-2">
                <a className="nk-product-image" href="/Product">
                  <img src="assets/images/product-7-md.jpg" alt="With what mingled joy" />
                </a>
                <div className="nk-product-cont">
                  <h3 className="nk-product-title h5"><a href="/Product">With what mingled joy</a></h3>
                  <div className="nk-gap-1" />
                  <div className="nk-product-rating" data-rating="3.5"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fas fa-star-half" /> <i className="far fa-star" /></div>
                  <div className="nk-gap-1" />
                  She clutched the matron by the arm, and forcing her into a chair by the bedside, was about to speak, when looking round, she caught sight of the two old women
                  <div className="nk-gap-2" />
                  <div className="nk-product-price">€ 14.00</div>
                  <div className="nk-gap-1" />
                  <a href="#" className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1">Add to Cart</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="nk-product-cat-2">
                <a className="nk-product-image" href="/Product">
                  <img src="assets/images/product-8-md.jpg" alt="She was bouncing away" />
                </a>
                <div className="nk-product-cont">
                  <h3 className="nk-product-title h5"><a href="/Product">She was bouncing away</a></h3>
                  <div className="nk-gap-1" />
                  <div className="nk-product-rating" data-rating="4.5"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fas fa-star-half" /></div>
                  <div className="nk-gap-1" />
                  For good, too; though, in consequence of my previous emotions, I was still occasionally seized with a stormy sob. After we had jogged on for some little time
                  <div className="nk-gap-2" />
                  <div className="nk-product-price">€ 20.00</div>
                  <div className="nk-gap-1" />
                  <a href="#" className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1">Add to Cart</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="nk-product-cat-2">
                <a className="nk-product-image" href="/Product">
                  <img src="assets/images/product-9-md.jpg" alt="The word was" />
                </a>
                <div className="nk-product-cont">
                  <h3 className="nk-product-title h5"><a href="/Product">The word was</a></h3>
                  <div className="nk-gap-1" />
                  <div className="nk-product-rating" data-rating={5}> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /></div>
                  <div className="nk-gap-1" />
                  With what mingled joy and sorrow do I take up the pen to write to my dearest friend! Oh, what a change between to-day and yesterday! Now I am friendless and alone
                  <div className="nk-gap-2" />
                  <div className="nk-product-price">€ 23.00</div>
                  <div className="nk-gap-1" />
                  <a href="#" className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1">Add to Cart</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="nk-product-cat-2">
                <a className="nk-product-image" href="/Product">
                  <img src="assets/images/product-10-md.jpg" alt="My mother was so much" />
                </a>
                <div className="nk-product-cont">
                  <h3 className="nk-product-title h5"><a href="/Product">My mother was so much</a></h3>
                  <div className="nk-gap-1" />
                  <div className="nk-product-rating" data-rating="3.5"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fas fa-star-half" /> <i className="far fa-star" /></div>
                  <div className="nk-gap-1" />
                  A hundred thousand grateful loves to your dear papa and mamma . Is your poor brother recovered of his rack - punch ? Oh, dear!Oh, dear!How men should beware of wicked
                  <div className="nk-gap-2" />
                  <div className="nk-product-price">€ 32.00</div>
                  <div className="nk-gap-1" />
                  <a href="#" className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1">Add to Cart</a>
                </div>
              </div>
            </div>
          </div>
          {/* END: Featured Games */}
          {/* START: Most Popular */}
          <div className="nk-gap-3" />
          <h3 className="nk-decorated-h-2"><span><span className="text-main-1">Most</span> Popular</span></h3>
          <div className="nk-gap" />
          <div className="row vertical-gap">
            <div className="col-lg-4 col-md-6">
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
            <div className="col-lg-4 col-md-6">
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
            <div className="col-lg-4 col-md-6">
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
            <div className="col-lg-4 col-md-6">
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
            <div className="col-lg-4 col-md-6">
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
            <div className="col-lg-4 col-md-6">
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
          {/* END: Most Popular */}
        </div>
        <div className="nk-gap-2" />
      </div>
            </div>
        )
    }
}
