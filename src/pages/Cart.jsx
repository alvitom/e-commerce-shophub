import React from "react"
import Meta from "../components/Meta"
import Breadcrumb from "../components/Breadcrumb"
import { FaRegTrashAlt, FaPlus, FaMinus } from "react-icons/fa"
import { Link } from "react-router-dom"
import Container from "../components/Container"

const Cart = () => {
  const handleCheckout = () => {
    location.href = "/checkout"
  }
  return (
    <>
      <Meta title="Cart" />
      <Breadcrumb title="Cart" />
      <Container class1="cart-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header d-flex justify-content-between align-items-center">
              <h1 className="cart-col-1">PRODUCT</h1>
              <h1 className="cart-col-2">PRICE</h1>
              <h1 className="cart-col-3">QUANTITY</h1>
              <h1 className="cart-col-4">TOTAL</h1>
            </div>
            <div className="cart-data d-flex justify-content-between align-items-center">
              <div className="cart-col-1 d-flex align-items-center gap-3">
                <div className="product-image w-25">
                  <img
                    src="/images/macbook-air-m1.jpg"
                    alt="macbook-air-m1"
                    className="img-fluid"
                  />
                </div>
                <div className="product-details w-75 d-flex flex-column gap-2">
                  <p className="fw-bold mb-0">MacBook Air M1 (2020)</p>
                  <p className="mb-0">Color : Silver</p>
                  <p className="mb-0">Storage : 256 GB</p>
                </div>
              </div>
              <div className="cart-col-2">
                <p className="price fw-bold mb-0">$645.00</p>
              </div>
              <div className="cart-col-3 d-flex gap-4 align-items-center">
                <div className="quantity d-flex w-25 border border-1">
                  <div className="d-flex flex-column">
                    <button type="button" className="btn-action-qty">
                      <FaPlus />
                    </button>
                    <button type="button" className="btn-action-qty">
                      <FaMinus />
                    </button>
                  </div>
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    className="input-quantity form-control ps-4 border-0"
                    min={1}
                    max={10}
                    defaultValue={1}
                    readOnly
                  />
                </div>
                <div>
                  <button type="button" className="delete-cart-item">
                    <FaRegTrashAlt className="text-danger" />
                  </button>
                </div>
              </div>
              <div className="cart-col-4">
                <p className="total mb-0 fw-bold">$645.00</p>
              </div>
            </div>
            <div className="cart-data d-flex justify-content-between align-items-center">
              <div className="cart-col-1 d-flex align-items-center gap-3">
                <div className="product-image w-25">
                  <img
                    src="/images/macbook-air-m1.jpg"
                    alt="macbook-air-m1"
                    className="img-fluid"
                  />
                </div>
                <div className="product-details w-75 d-flex flex-column gap-2">
                  <p className="fw-bold mb-0">MacBook Air M1 (2020)</p>
                  <p className="mb-0">Color : Silver</p>
                  <p className="mb-0">Storage : 256 GB</p>
                </div>
              </div>
              <div className="cart-col-2">
                <p className="price fw-bold mb-0">$645.00</p>
              </div>
              <div className="cart-col-3 d-flex gap-4 align-items-center">
                <div className="quantity d-flex w-25 border border-1">
                  <div className="d-flex flex-column">
                    <button type="button" className="btn-action-qty">
                      <FaPlus />
                    </button>
                    <button type="button" className="btn-action-qty">
                      <FaMinus />
                    </button>
                  </div>
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    className="input-quantity form-control ps-4 border-0"
                    min={1}
                    max={10}
                    defaultValue={1}
                    readOnly
                  />
                </div>
                <div>
                  <button type="button" className="delete-cart-item">
                    <FaRegTrashAlt className="text-danger" />
                  </button>
                </div>
              </div>
              <div className="cart-col-4">
                <p className="total mb-0 fw-bold">$645.00</p>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4">
            <div className="d-flex justify-content-between">
              <div>
                <Link to="/store" className="button">
                  Continue To Shopping
                </Link>
              </div>
              <div className="text-end">
                <h3>SubTotal: $1000</h3>
                <p>Taxes and shipping calculated at checkout</p>
                <button className="button" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Cart
