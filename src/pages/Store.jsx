import React, { useState } from "react"
import Breadcrumb from "../components/Breadcrumb"
import Meta from "../components/Meta"
import { Link } from "react-router-dom"
import ReactStars from "react-rating-stars-component"
import { RxHamburgerMenu } from "react-icons/rx"
import ProductCard from "../components/ProductCard"
import Color from "../components/Color"
import Container from "../components/Container"

const Store = () => {
  const [column, setColumn] = useState(3)

  return (
    <>
      <Meta title="Store" />
      <Breadcrumb title="Store" />
      <Container class1="store-wrapper py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-container d-flex flex-column gap-3">
              <div className="filter-card">
                <h1 className="title">Shop By Categories</h1>
                <ul className="my-4">
                  <li>
                    <Link className="link">Watch</Link>
                  </li>
                  <li>
                    <Link className="link">TV</Link>
                  </li>
                  <li>
                    <Link className="link">Camera</Link>
                  </li>
                  <li>
                    <Link className="link">Laptop</Link>
                  </li>
                </ul>
              </div>
              <div className="filter-card">
                <h1 className="title">Filter By</h1>
                <div className="my-4">
                  <h3 className="sub-title">Availability</h3>
                  <div className="form-check d-flex align-items-center gap-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label>In stock (2)</label>
                  </div>
                  <div className="form-check d-flex align-items-center gap-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label htmlFor="">Out of stock (0)</label>
                  </div>
                </div>
                <div className="my-4">
                  <h3 className="sub-title">Price</h3>
                  <div className="form-input d-flex align-items-center gap-1">
                    <label htmlFor="price-from">$</label>
                    <input
                      type="text"
                      id="price-from"
                      placeholder="From"
                      className="form-control"
                    />
                    <label htmlFor="price-to">$</label>
                    <input
                      type="text"
                      id="price-to"
                      placeholder="To"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="my-4">
                  <h3 className="sub-title">Color</h3>
                  <Color />
                </div>
                <div className="my-4">
                  <h3 className="sub-title">Size</h3>
                  <div className="form-check d-flex align-items-center gap-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label>In stock (2)</label>
                  </div>
                  <div className="form-check d-flex align-items-center gap-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label>In stock (2)</label>
                  </div>
                  <div className="form-check d-flex align-items-center gap-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label>In stock (2)</label>
                  </div>
                  <div className="form-check d-flex align-items-center gap-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label>In stock (2)</label>
                  </div>
                  <div className="form-check d-flex align-items-center gap-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label>In stock (2)</label>
                  </div>
                </div>
              </div>
              <div className="filter-card">
                <h1 className="title">Product Tag</h1>
                <div className="my-4 d-flex flex-wrap align-items-center gap-2">
                  <span className="product-tag">Headphone</span>
                  <span className="product-tag">TV</span>
                  <span className="product-tag">Mobile</span>
                  <span className="product-tag">Laptop</span>
                  <span className="product-tag">Watch</span>
                </div>
              </div>
              <div className="filter-card">
                <h1 className="title">Random Products</h1>
                <div className="my-4">
                  <div className="random-products d-flex align-items-center flex-wrap gap-3 mb-3">
                    <img
                      src="/images/macbook-air-m1.jpg"
                      alt="watch"
                      className="img-fluid w-25"
                    />
                    <div className="product-content">
                      <h6>MacBook Air M1</h6>
                      <ReactStars
                        count={5}
                        size={18}
                        value={5}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p>$600.00</p>
                    </div>
                  </div>
                  <div className="random-products d-flex align-items-center flex-wrap gap-3">
                    <img
                      src="/images/speaker.jpg"
                      alt="watch"
                      className="img-fluid w-25"
                    />
                    <div className="product-content">
                      <h6>Speaker</h6>
                      <ReactStars
                        count={5}
                        size={18}
                        value={5}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p>$100.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="sort-container d-flex flex-wrap align-items-center justify-content-between mb-4">
              <div className="sort-option d-flex flex-wrap align-items-center gap-2">
                <p className="mb-0">Sort By : </p>
                <select className="form-select sort-select">
                  <option value="manual">Featured</option>

                  <option defaultValue="best-selling">Best selling</option>

                  <option value="title-ascending">Alphabetically, A-Z</option>

                  <option value="title-descending">Alphabetically, Z-A</option>

                  <option value="price-ascending">Price, low to high</option>

                  <option value="price-descending">Price, high to low</option>

                  <option value="created-ascending">Date, old to new</option>

                  <option value="created-descending">Date, new to old</option>
                </select>
              </div>
              <div className="grid-option d-flex flex-wrap align-items-center gap-2">
                <p className="mb-0 text-secondary">21 products</p>
                <button
                  className={column === 3 ? "grid-icon active" : "grid-icon"}
                  onClick={() => setColumn(3)}
                >
                  <span>|</span>
                  <span>|</span>
                  <span>|</span>
                  <span>|</span>
                </button>
                <button
                  className={column === 4 ? "grid-icon active" : "grid-icon"}
                  onClick={() => setColumn(4)}
                >
                  <span>|</span>
                  <span>|</span>
                  <span>|</span>
                </button>
                <button
                  className={column === 6 ? "grid-icon active" : "grid-icon"}
                  onClick={() => setColumn(6)}
                >
                  <span>|</span>
                  <span>|</span>
                </button>
                <button
                  className={column === 12 ? "grid-icon active" : "grid-icon"}
                  onClick={() => setColumn(12)}
                >
                  <RxHamburgerMenu />
                </button>
              </div>
            </div>
            <div className="product-list row">
              <ProductCard column={column} />
              <ProductCard column={column} />
              <ProductCard column={column} />
              <ProductCard column={column} />
              <ProductCard column={column} />
              <ProductCard column={column} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Store
