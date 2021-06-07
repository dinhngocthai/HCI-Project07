import React, { Component } from 'react'

export default class Mobile extends Component {
    render() {
        return (
            <div>
                         {/*
    START: Navbar Mobile

    Additional Classes:
        .nk-navbar-left-side
        .nk-navbar-right-side
        .nk-navbar-lg
        .nk-navbar-overlay-content
*/}
          <div
            id="nk-nav-mobile"
            className="
        nk-navbar nk-navbar-side nk-navbar-right-side nk-navbar-overlay-content
        d-lg-none
      "
          >
            <div className="nano">
              <div className="nano-content">
                <a href="/" className="nk-nav-logo">
                  <img src="assets/images/logo.png" alt="" width={120} />
                </a>
                <div className="nk-navbar-mobile-content">
                <ul className="nk-nav" data-mobile-menu="#nk-nav-mobile">                    
               
                    <li className>
                      <a href="/Blog"> Blog </a>
                    </li>
                    <li>
                      <a href="/Gallery"> Gallery </a>
                    </li>
                    <li className>
                      <a href="/Store"> Store </a>
                    </li>
                    <li className>
                      <a href="/Catalog"> Catalog </a>
                    </li>
                    <li className>
                      <a href="/Tournaments"> Tournaments </a>
                    </li>
                    <li className>
                      <a href="/Cart"> Cart </a>
                    </li>
                    <li className>
                      <a href="/StyleGuide"> StyleGuide </a>
                    </li>
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
