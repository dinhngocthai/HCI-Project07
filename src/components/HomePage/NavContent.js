import React, { Component } from 'react'

export default class NavContent extends Component {
    render() {
        return (
            <div>
               
      {/*         
    START: Navbar Mobile

    Additional Classes:
        .nk-navbar-left-side
        .nk-navbar-right-side
        .nk-navbar-lg
        .nk-navbar-overlay-content */}
      <div id="nk-nav-mobile" className="nk-navbar nk-navbar-side nk-navbar-right-side nk-navbar-overlay-content d-lg-none">
        <div className="nano">
          <div className="nano-content">
            <a href="index.html" className="nk-nav-logo">
              <img src="assets/images/logo.png" alt="" width={120} />
            </a>
            <div className="nk-navbar-mobile-content">
              <ul className="nk-nav">
                {/* Here will be inserted menu from [data-mobile-menu="#nk-nav-mobile"] */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* END: Navbar Mobile */} 
            </div>
        )
    }
}
