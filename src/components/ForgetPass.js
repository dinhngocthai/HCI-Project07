import React, { Component } from 'react'

export default class ForgetPass extends Component {
    render() {
        return (
            <div>
       <div>
                
                <div className="nk-main">
                  {/* START: Breadcrumbs */}
                  <div className="nk-gap-1" />
                  <div className="container">
                    <ul className="nk-breadcrumbs">
                      <li><a href="/">Home</a></li>
                      <li><span className="fa fa-angle-right" /></li>
                      <li><span>Forgot Pass</span></li>
                    </ul>
                  </div>
                  <div className="nk-gap-1" />
                  {/* END: Breadcrumbs */}
                  <div className="container">
                    <div className="nk-store nk-store-cart">
                      <div className="table-responsive">
                        {/* START: Products in Cart */}
                        <table className="table nk-store-cart-products">
                          <tbody>
                          <div className="modal-dialog modal-sm" role="document">
                                <div className="modal-content">
                                <div className="modal-body">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    </button>
                                    <h4 className="mb-0">Enter your Email</h4>
                                    <div className="nk-gap-1" />
                                    <form action="#" className="nk-form nk-form-style-1">
                                    <input type="text" defaultValue name="search" className="form-control" placeholder="Type something and press Enter" autofocus />
                                    </form>
                                </div>
                                </div>
                            </div>
                          </tbody>
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
            </div>
        )
    }
}
