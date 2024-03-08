import React from "react"
import ReactStars from "react-rating-stars-component"
import { Link } from "react-router-dom"

const ProductCard = ({ column }) => {
  return (
    <div
      className={
        location.pathname === "/store" ? `col-${column} mb-4` : "col-2"
      }
    >
      <Link to="/product/:id" className="card position-relative text-dark">
        <div className="wishlist-icon position-absolute">
          <button className="border-0 bg-transparent">
            <img src="/images/wish.svg" alt="Wishlist" />
          </button>
        </div>
        <div
          className={
            column === 12
              ? "d-flex align-items-center gap-5"
              : "d-flex flex-column"
          }
        >
          <div className="product-image">
            <img
              src="/images/macbook-air-m1.jpg"
              alt="Product"
              className="img-fluid"
            />
            <img
              src="/images/macbook-air-m1-2.jpg"
              alt="Product"
              className="img-fluid"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={5}
              edit={false}
              activeColor="#ffd700"
            />
            {column === 12 && (
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur voluptates modi sint odio tenetur assumenda id
                consequuntur necessitatibus dolorum quisquam sapiente, facere
                laborum nisi? Delectus pariatur quo asperiores accusamus
                officia?
              </p>
            )}
            <p className="price">$100.00</p>
          </div>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-2">
            <button className="border-0 bg-transparent">
              <img src="/images/prodcompare.svg" alt="Add-to-Cart" />
            </button>
            <button className="border-0 bg-transparent">
              <img src="/images/view.svg" alt="View" />
            </button>
            <button className="border-0 bg-transparent">
              <img src="/images/add-cart.svg" alt="addcart" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
