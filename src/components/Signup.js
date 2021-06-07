import React, { Component } from 'react'

export default class Signup extends Component {
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
                           <li><span>Sign up</span></li>
                         </ul>
                       </div>
                       <div className="nk-gap-1" />
                       {/* END: Breadcrumbs */}
                       <div className="container">
                         <div className="nk-store nk-store-cart">
                           <div className="table-responsive">
                             {/* START: Products in Cart */}
                             <table className="table nk-store-cart-products">
                               <div className="modal-content">
                                        <div className="modal-body">
                                       
                                        <h4 className="mb-0"><span className="text-main-1">Sign</span> Up</h4>
                                        <div className="nk-gap-1" />
                                        <form action="#" className="nk-form text-white">
                                            <div className="row vertical-gap">
                                            <div className="col-md-6">
                                                Enter email and password:
                                                <div className="nk-gap" />
                                                <input type="email" name="email" className=" form-control" placeholder="Email" />
                                                <div className="nk-gap" />
                                                <input type="password"  name="password" className="required form-control" placeholder="Password" /> 
                                                <div className="nk-gap" />
                                                <input type="password" name="repassword" className="required form-control" placeholder="Re-enter Password" />
                                            </div>
                                            <div className="col-md-6">
                                                <div className="nk-gap" />
                                                <ul className="nk-social-links-2">
                                                Or social account:
                                                <div className="col-md-3">
                                            </div>
                                                <li><a className="nk-social-facebook" href="#"><span className="fab fa-facebook" /></a></li>
                                                <li><a className="nk-social-google-plus" href="#"><span className="fab fa-google-plus" /></a></li>
                                                <li><a className="nk-social-twitter" href="#"><span className="fab fa-twitter" /></a></li>
                                                </ul>
                                            </div>
                                            </div>
                                            <div className="nk-gap-1" />
                                            <div className="row vertical-gap">
                                            <div className="col-md-6">
                                                <a href="#" className="nk-btn nk-btn-rounded nk-btn-color-white nk-btn-block">Sign Up</a>
                                            </div>
                                    
                                            </div>
                                        </form>
                                        </div>
                                    </div>
                             </table>
                             {/* END: Products in Cart */}
                           </div>
                           <div className="nk-gap-1" />
                           <div className="clearfix" />
     
                           <div className="nk-gap-2" />
                           <div className="row vertical-gap">
                             <div className="col-md-6">
                      
                             </div>
                             <div className="col-md-6">
     
                             </div>
                           </div>
                           <div className="nk-gap-2" />
                           <div className="clearfix" />
                         </div>
                       </div>
                       <div className="nk-gap-2" />
                     </div>
                         
                         
          </div>
                 
        )
    }
}
