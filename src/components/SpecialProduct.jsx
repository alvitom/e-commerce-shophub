import React from "react"
import ReactStars from "react-rating-stars-component"

const SpecialProduct = () => {
  return (
    <div className="col-4 mb-4">
      <div className="special-product-card">
        <div className="d-flex justify-content-around">
          <div className="special-product-image">
            <img
              src="/images/macbook-air-m1.jpg"
              alt="Special Product"
              className="img-fluid"
            />
          </div>
          <div className="special-product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="title">MacBook Air M1 (2020)</h5>
            <ReactStars
              count={5}
              size={24}
              value={5}
              edit={false}
              activeColor="#ffd700"
            />
            <div className="price d-flex gap-2">
              <p className="new-price">$695</p>
              <p className="old-price">$795</p>
            </div>
            <div className="time d-flex gap-2 align-items-center">
              <p className="mb-0">
                <strong>7</strong> Days
              </p>
              <div className="timer d-flex gap-1 align-items-center">
                <span>05</span>:<span>37</span>:<span>31</span>
              </div>
            </div>
            <div className="product-count mt-2 mb-4">
              <p className="mb-1">Products: 7</p>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
            </div>
            <button className="option mb-2">Option</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialProduct
