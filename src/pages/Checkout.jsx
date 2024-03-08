import React from "react"
import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"

const Checkout = () => {
  return (
    <>
      <div className="checkout-wrapper">
        <div className="row">
          <div className="col-7 py-5 checkout-wrapper-left">
            <div className="checkout-left-data mx-5">
              <img
                src="/images/Shophub-icon.png"
                alt=""
                className="img-fluid"
              />
              <nav aria-label="breadcrumb" className="mt-4">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/cart" className="text-dark">
                      Cart
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Information
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Shipping
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Payment
                  </li>
                </ol>
              </nav>
              <div className="mt-4">
                <h1 className="title">Contact Information</h1>
                <p className="user-details mb-0">
                  Muhammad Alvito (muhammadalvito2@gmail.com)
                </p>
              </div>
              <form
                action=""
                className="d-flex gap-3 justify-content-between flex-wrap mt-4"
              >
                <h1 className="title">Shipping Address</h1>
                <div className="w-100">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Select Country
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apartment, Suite, etc"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                  />
                </div>
                <div className="flex-grow-1">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Select State
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Zipcode"
                  />
                </div>
              </form>
              <div className="d-flex justify-content-between align-items-center mt-4">
                <Link
                  to="/cart"
                  className="d-flex align-items-center gap-2 text-dark"
                >
                  <FaArrowLeft />
                  Return to Cart
                </Link>
                <button type="button" className="button">
                  Continue to Shipping
                </button>
              </div>
            </div>
          </div>
          <div className="col-5 py-5 checkout-wrapper-right">
            <div className="mx-5 checkout-right-data">
              <div className="border-bottom py-3">
                <div className="checkout-product-details d-flex flex-column gap-4">
                  <div className="product d-flex align-items-center gap-4">
                    <div className="product-image position-relative">
                      <img
                        src="/images/macbook-air-m1.jpg"
                        alt="macbook"
                        className="img-fluid"
                      />
                      <span className="indicator-qty position-absolute">1</span>
                    </div>
                    <div className="product-detail">
                      <p className="mb-0">Macbook Air M1 (2020)</p>
                      <p className="mb-0">Silver / 256 GB</p>
                    </div>
                    <p className="price mb-0">$100.00</p>
                  </div>
                  <div className="product d-flex align-items-center gap-4">
                    <div className="product-image position-relative">
                      <img
                        src="/images/macbook-air-m1.jpg"
                        alt="macbook"
                        className="img-fluid"
                      />
                      <span className="indicator-qty position-absolute">1</span>
                    </div>
                    <div className="product-detail">
                      <p className="mb-0">Macbook Air M1 (2020)</p>
                      <p className="mb-0">Silver / 256 GB</p>
                    </div>
                    <p className="price mb-0">$100.00</p>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0">Subtotal</p>
                  <p className="mb-0 fw-bold">$200.00</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0">Shipping</p>
                  <p className="mb-0 fw-bold">$19.65</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-end py-3">
                <p className="mb-0 fw-bold">Total</p>
                <div className="d-flex gap-2 align-items-end">
                  <span>USD</span>
                  <p className="mb-0 fw-bold fs-5">$219.65</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout
