import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>

      {/*
    Additional Classes:
        .nk-header-opaque
*/}
      <header className="nk-header nk-header-opaque">
        {/* START: Top Contacts */}
        <div className="nk-contacts-top">
          <div className="container">
            <div className="nk-contacts-left">
              <ul className="nk-social-links">
                <li><a className="nk-social-rss" href="#"><span className="fa fa-rss" /></a></li>
                <li><a className="nk-social-twitch" href="#"><span className="fab fa-twitch" /></a></li>
                <li><a className="nk-social-steam" href="#"><span className="fab fa-steam" /></a></li>
                <li><a className="nk-social-facebook" href="#"><span className="fab fa-facebook" /></a></li>
                <li><a className="nk-social-google-plus" href="#"><span className="fab fa-google-plus" /></a></li>
                <li><a className="nk-social-twitter" href="#" target="_blank"><span className="fab fa-twitter" /></a></li>
                <li><a className="nk-social-pinterest" href="#"><span className="fab fa-pinterest-p" /></a></li>
              </ul>
            </div>
            <div className="nk-contacts-right">
              <ul className="nk-contacts-icons">
                <li>
                  <a href="#" data-toggle="modal" data-target="#modalSearch">
                    <span className="fa fa-search" />
                  </a>
                </li>
                <li>
                  {/* <a href="#" data-toggle="modal" data-target="#modalLogin"> */}
                  <a href="/SignIn">
                    <span className="fa fa-user" />
                  </a>
                </li>
                <li>
                  <span className="nk-cart-toggle">
                    <span className="fa fa-shopping-cart" />
                    <span className="nk-badge">27</span>
                  </span>
                  <div className="nk-cart-dropdown">
                    <div className="nk-widget-post">
                      <a href="/Product" className="nk-post-image">
                        <img src="assets/images/product-5-xs.jpg" alt="In all revolutions of" />
                      </a>
                      <h3 className="nk-post-title">
                        <a href="/Product" className="nk-cart-remove-item"><span className="ion-android-close" /></a>
                        <a href="/Product">In all revolutions of</a>
                      </h3>
                      <div className="nk-gap-1" />
                      <div className="nk-product-price">€ 23.00</div>
                    </div>
                    <div className="nk-widget-post">
                      <a href="/Product" className="nk-post-image">
                        <img src="assets/images/product-7-xs.jpg" alt="With what mingled joy" />
                      </a>
                      <h3 className="nk-post-title">
                        <a href="/Product" className="nk-cart-remove-item"><span className="ion-android-close" /></a>
                        <a href="/Product">With what mingled joy</a>
                      </h3>
                      <div className="nk-gap-1" />
                      <div className="nk-product-price">€ 14.00</div>
                    </div>
                    <div className="nk-gap-2" />
                    <div className="text-center">
                      <a href="/Checkout" className="nk-btn nk-btn-rounded nk-btn-color-main-1 nk-btn-hover-color-white">Proceed to Checkout</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* END: Top Contacts */}
        {/*
        START: Navbar

        Additional Classes:
            .nk-navbar-sticky
            .nk-navbar-transparent
            .nk-navbar-autohide
    */}
        <nav className="nk-navbar nk-navbar-top nk-navbar-sticky nk-navbar-autohide">
          <div className="container">
            <div className="nk-nav-table">
              <a href="/" className="nk-nav-logo">
                <img src="assets/images/logo.png" alt="GoodGames" width={190} />

              </a>
           
              <ul className="nk-nav nk-nav-right d-none d-lg-table-cell" data-nav-mobile="#nk-nav-mobile">
              
                <li  class="">
                  <a href="/Blog">
                    Blog               
                  </a>
                </li>
                {/* <li class="  "> */}
                <li>
                  <a href="/Gallery">
                    Gallery
                  </a>
                </li>
                <li class="  ">
                  <a href="/Store">
                    Store
                  </a>
                </li>
                <li class="  ">
                  <a href="/Catalog">
                    Catalog
                  </a>
                </li>
                <li class="  ">
                  <a href="/Tournaments">
                    TOURNAMENTS
                  </a>
                </li>                
                <li class="  ">
                  <a href="/Cart">
                    CART
                  </a>
                </li>
                <li class="  ">
                  <a href="/StyleGuide">
                  StyleGuide
                  </a>
                </li>
              </ul>
              <ul className="nk-nav nk-nav-right nk-nav-icons">
                <li className="single-icon d-lg-none">
                  <a href="#" className="no-link-effect" data-nav-toggle="#nk-nav-mobile">
                    <span className="nk-icon-burger">
                      <span className="nk-t-1" />
                      <span className="nk-t-2" />
                      <span className="nk-t-3" />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* END: Navbar */}
       

      </header>
  

  {/* START: Search Modal */}
  <div className="nk-modal modal fade" id="modalSearch" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span className="ion-android-close" />
                </button>
                <h4 className="mb-0">Search</h4>
                <div className="nk-gap-1" />
                <form action="#" className="nk-form nk-form-style-1">
                  <input type="text" defaultValue name="search" className="form-control" placeholder="Type something and press Enter" autofocus />
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* END: Search Modal */}
       
      {/* START: Login Modal */}
      {/* <div className="nk-modal modal fade" id="modalLogin" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span className="ion-android-close" />
              </button>
              <h4 className="mb-0"><span className="text-main-1">Sign</span> In</h4>
              <div className="nk-gap-1" />
              <form action="#" className="nk-form text-white">
                <div className="row vertical-gap">
                  <div className="col-md-6">
                    Use email and password:
                    <div className="nk-gap" />
                    <input type="email" name="email" className=" form-control" placeholder="Email" />
                    <div className="nk-gap" />
                    <input type="password" name="password" className="required form-control" placeholder="Password" />
                  </div>
                  <div className="col-md-6">
                    Or social account:
                    <div className="nk-gap" />
                    <ul className="nk-social-links-2">
                      <li><a className="nk-social-facebook" href="#"><span className="fab fa-facebook" /></a></li>
                      <li><a className="nk-social-google-plus" href="#"><span className="fab fa-google-plus" /></a></li>
                      <li><a className="nk-social-twitter" href="#"><span className="fab fa-twitter" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="nk-gap-1" />
                <div className="row vertical-gap">
                  <div className="col-md-6">
                    <a href="#" className="nk-btn nk-btn-rounded nk-btn-color-white nk-btn-block">Sign In</a>
                  </div>
                  <div className="col-md-6">
                    <div className="mnt-5">
                      <small><a href="/ForgetPass">Forgot your password?</a></small>
                      
                    </div>
                    <div className="mnt-5">
                      <small><a href="/Signup">Not a member? Sign up</a></small>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
       
        </div>
      </div>
       */}
      {/* END: Login Modal */}


      
            </div>
     
     )
    }
}
