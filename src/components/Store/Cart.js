import React, { Component } from 'react'

export default class Cart extends Component {
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
            <li><span>Cart</span></li>
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
                  <tr>
                    <td className="nk-product-cart-thumb">
                      <a href="/Product" className="nk-image-box-1 nk-post-image">
                        <img src="assets/images/product-2-xs.jpg" alt="However, I have reason" width={115} />
                      </a>
                    </td>
                    <td className="nk-product-cart-title">
                      <h5 className="h6">Product:</h5>
                      <div className="nk-gap-1" />
                      <h2 className="nk-post-title h4">
                        <a href="/Product">However, I have reason</a>
                      </h2>
                    </td>
                    <td className="nk-product-cart-price">
                      <h5 className="h6">Price:</h5>
                      <div className="nk-gap-1" />
                      <strong>€ 32.00</strong>
                    </td>
                    <td className="nk-product-cart-quantity">
                      <h5 className="h6">Quantity:</h5>
                      <div className="nk-gap-1" />
                      <div className="nk-form">
                        <input type="number" className="form-control" defaultValue={1} min={1} max={21} />
                      </div>
                    </td>
                    <td className="nk-product-cart-total">
                      <h5 className="h6">Total:</h5>
                      <div className="nk-gap-1" />
                      <strong>€ 32.00</strong>
                    </td>
                    <td className="nk-product-cart-remove"><a href="#"><span className="ion-android-close" /></a></td>
                  </tr>
                  <tr>
                    <td className="nk-product-cart-thumb">
                      <a href="/Product" className="nk-image-box-1 nk-post-image">
                        <img src="assets/images/product-4-xs.jpg" alt="She was bouncing" width={115} />
                      </a>
                    </td>
                    <td className="nk-product-cart-title">
                      <h5 className="h6">Product:</h5>
                      <div className="nk-gap-1" />
                      <h2 className="nk-post-title h4">
                        <a href="/Product">She was bouncing</a>
                      </h2>
                    </td>
                    <td className="nk-product-cart-price">
                      <h5 className="h6">Price:</h5>
                      <div className="nk-gap-1" />
                      <strong>€ 20.00</strong>
                    </td>
                    <td className="nk-product-cart-quantity">
                      <h5 className="h6">Quantity:</h5>
                      <div className="nk-gap-1" />
                      <div className="nk-form">
                        <input type="number" className="form-control" defaultValue={1} min={1} max={21} />
                      </div>
                    </td>
                    <td className="nk-product-cart-total">
                      <h5 className="h6">Total:</h5>
                      <div className="nk-gap-1" />
                      <strong>€ 20.00</strong>
                    </td>
                    <td className="nk-product-cart-remove"><a href="#"><span className="ion-android-close" /></a></td>
                  </tr>
                </tbody>
              </table>
              {/* END: Products in Cart */}
            </div>
            <div className="nk-gap-1" />
            <a className="nk-btn nk-btn-rounded nk-btn-color-white float-right" href="#">Update Cart</a>
            <div className="clearfix" />
            <div className="nk-gap-2" />
            <div className="row vertical-gap">
              <div className="col-md-6">
                {/* START: Calculate Shipping */}
                <h3 className="nk-title h4">Calculate Shipping</h3>
                <form action="#" className="nk-form">
                  <label htmlFor="country-sel">Country <span className="text-main-1">*</span>:</label>
                  <select name="country" className="form-control required" id="country-sel">
                    <option value>Select a country...</option>
                  </select>
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
                  <a className="nk-btn nk-btn-rounded nk-btn-color-white float-right" href="#">Update Totals</a>
                </form>
                {/* END: Calculate Shipping */}
              </div>
              <div className="col-md-6">
                {/* START: Cart Totals */}
                <h3 className="nk-title h4">Cart Totals</h3>
                <table className="nk-table nk-table-sm">
                  <tbody>
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
                {/* END: Cart Totals */}
              </div>
            </div>
            <div className="nk-gap-2" />
            <a className="nk-btn nk-btn-rounded nk-btn-color-main-1 float-right" href="/Checkout">Proceed to Checkout</a>
            <div className="clearfix" />
          </div>
        </div>
        <div className="nk-gap-2" />
      </div>
            </div>
        )
    }
}
