import React, { Component } from 'react'

export default class Checkout extends Component {
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
            <li><a href="/Store">Store</a></li>
            <li><span className="fa fa-angle-right" /></li>
            <li><a href="/Cart">Cart</a></li>
            <li><span className="fa fa-angle-right" /></li>
            <li><span>Checkout</span></li>
          </ul>
        </div>
        <div className="nk-gap-1" />
        {/* END: Breadcrumbs */}
        <div className="container">
          <div className="nk-store nk-store-checkout">
            <h3 className="nk-decorated-h-2"><span><span className="text-main-1">Billing</span> Details</span></h3>
            {/* START: Billing Details */}
            <div className="nk-gap" />
            <form action="#" className="nk-form">
              <div className="row vertical-gap">
                <div className="col-lg-6">
                  <div className="row vertical-gap">
                    <div className="col-sm-6">
                      <label htmlFor="fname">First Name <span className="text-main-1">*</span>:</label>
                      <input type="text" className="form-control required" name="fname" id="fname" />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="lname">Last Name <span className="text-main-1">*</span>:</label>
                      <input type="text" className="form-control required" name="lname" id="lname" />
                    </div>
                  </div>
                  <div className="nk-gap-1" />
                  <label htmlFor="company">Company Name:</label>
                  <input type="text" className="form-control" name="company" id="company" />
                  <div className="nk-gap-1" />
                  <div className="row vertical-gap">
                    <div className="col-sm-6">
                      <label htmlFor="email">Email Address <span className="text-main-1">*</span>:</label>
                      <input type="email" className="form-control required" name="email" id="email" />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="phone">Phone <span className="text-main-1">*</span>:</label>
                      <input type="tel" className="form-control required" name="phone" id="phone" />
                    </div>
                  </div>
                  <div className="nk-gap-1" />
                  <label htmlFor="country-sel">Country <span className="text-main-1">*</span>:</label>
                  <select name="country" className="form-control required" id="country-sel">
                    <option value>Select a country...</option>
                  </select>
                </div>
                <div className="col-lg-6">
                  <label htmlFor="address">Address <span className="text-main-1">*</span>:</label>
                  <input type="text" className="form-control required" name="address" id="address" />
                  <div className="nk-gap-1" />
                  <label htmlFor="city">Town / City <span className="text-main-1">*</span>:</label>
                  <input type="text" className="form-control required" name="city" id="city" />
                  <div className="nk-gap-1" />
                  <div className="row vertical-gap">
                    <div className="col-sm-6">
                      <label htmlFor="state">State / Country <span className="text-main-1">*</span>:</label>
                      <input type="text" className="form-control required" name="state" id="state" />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="zip">Postcode / ZIP <span className="text-main-1">*</span>:</label>
                      <input type="tel" className="form-control required" name="zip" id="zip" />
                    </div>
                  </div>
                  <div className="nk-gap-1" />
                  <label className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator" />
                    Ship to different address?
                  </label>
                </div>
              </div>
            </form>
            {/* END: Billing Details */}
            <div className="nk-gap-2" />
            <form action="#" className="nk-form">
              <div className="nk-gap-1" />
              <label htmlFor="notes">Order Notes:</label>
              <textarea className="form-control" name="notes" id="notes" placeholder="Order Notes" rows={6} defaultValue={""} />
            </form>
            {/* START: Order Products */}
            <div className="nk-gap-3" />
            <h3 className="nk-decorated-h-2"><span><span className="text-main-1">Your</span> Order</span></h3>
            <div className="nk-gap" />
            <div className="table-responsive">
              <table className="nk-table nk-table-sm">
                <thead className="thead-default">
                  <tr>
                    <th className="nk-product-cart-title">Product</th>
                    <th className="nk-product-cart-total">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="nk-product-cart-title">
                      However, I have reason × 1
                    </td>
                    <td className="nk-product-cart-total">
                      € 32.00
                    </td>
                  </tr>
                  <tr>
                    <td className="nk-product-cart-title">
                      She was bouncing × 1
                    </td>
                    <td className="nk-product-cart-total">
                      € 20.00
                    </td>
                  </tr>
                  <tr className="nk-store-cart-totals-subtotal">
                    <td>
                      Subtotal
                    </td>
                    <td>
                      € 52.00
                    </td>
                  </tr>
                  <tr className="nk-store-cart-totals-shipping">
                    <td>
                      Shipping
                    </td>
                    <td>
                      Free Shipping
                    </td>
                  </tr>
                  <tr className="nk-store-cart-totals-total">
                    <td>
                      Total
                    </td>
                    <td>
                      € 52.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* END: Order Products */}
            <div className="nk-gap-2" />
            <a className="nk-btn nk-btn-rounded nk-btn-color-main-1" href="#">Place Order</a>
          </div>
        </div>
        <div className="nk-gap-2" />
      </div>
            </div>
        )
    }
}
