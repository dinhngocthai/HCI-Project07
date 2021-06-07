import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
    
      {/* START: Footer */}
      <footer className="nk-footer">
        <div className="container">
          <div className="nk-gap-3" />
          <div className="row vertical-gap">
            <div className="col-md-6">
              <div className="nk-widget">
                <h4 className="nk-widget-title"><span className="text-main-1">Contact</span> With Us</h4>
                <div className="nk-widget-content">
                  <form action="php/ajax-contact-form.php" className="nk-form nk-form-ajax">
                    <div className="row vertical-gap sm-gap">
                      <div className="col-md-6">
                        <input type="email" className="form-control required" name="email" placeholder="Email *" />
                      </div>
                      <div className="col-md-6">
                        <input type="text" className="form-control required" name="name" placeholder="Name *" />
                      </div>
                    </div>
                    <div className="nk-gap" />
                    <textarea className="form-control required" name="message" rows={5} placeholder="Message *" defaultValue={""} />
                    <div className="nk-gap-1" />
                    <button className="nk-btn nk-btn-rounded nk-btn-color-white">
                      <span>Send</span>
                      <span className="icon"><i className="ion-paper-airplane" /></span>
                    </button>
                    <div className="nk-form-response-success" />
                    <div className="nk-form-response-error" />
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="nk-widget">
                <div className="nk-widget-content">
                  <div className="row vertical-gap sm-gap">
                    <div className="col-lg-6">
                      <div className="nk-widget-post-2">
                        
                        <div className="address">
                        <h4 className="nk-widget-title"><span className="text-main-1">Address</span> </h4>  
                        <h6>84/418 Bien Hoa City, Dong Nai Province</h6>
                        <h6>Phone : 0704614563</h6>
                        <h6>Email : 17130209@st.hcmuaf.edu.vn</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="nk-widget-post-2">
                        
                        <div className="address">
                        <h4 className="nk-widget-title"><span className="text-main-1">Contact </span>Time</h4>
                        
                        <h6>Monday - Friday : 7am - 10pm</h6>
                        <h6>​​Saturday: 8am - 10pm</h6>
                        <h6>​Sunday: 8am - 11pm</h6>

                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
            
            </div>
          </div>
          <div className="nk-gap-3" />
        </div>
        <div className="nk-copyright">
          <div className="container">
            <div className="nk-copyright-left">
              
            </div>
           
          </div>
        </div>
      </footer>
     
      </div>
    );
  }
}
