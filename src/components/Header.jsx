import React from "react"
import { NavLink, Link } from "react-router-dom"
import { BsSearch, BsFillTelephoneFill } from "react-icons/bs"

const Header = () => {
  return (
    <>
      <header className="header-top py-3">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-white mb-0 d-flex align-items-center gap-2 justify-content-end">
                <BsFillTelephoneFill /> Hotline:
                <a className="text-white" href="tel:+62 81381547895">
                  +62 81381547895
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-middle py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-2 me-5">
              <Link to="/">
                <img src="/images/brand.png" alt="Shophub" />
              </Link>
            </div>
            <div className="col-4 me-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  aria-label="Cari Produk..."
                  aria-describedby="basic-addon2"
                  placeholder="Cari Produk..."
                />
                <button className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </button>
              </div>
            </div>
            <div className="col-5">
              <div className="header-middle-links d-flex align-items-center justify-content-between">
                <div>
                  <Link to="/compare-product" className="link d-flex align-items-center gap-2 ">
                    <img src="/images/compare.svg" alt="Compare" />
                    <p className="mb-0">
                      Compare <br /> Product
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/wishlist" className="link d-flex align-items-center gap-2 ">
                    <img src="/images/wishlist.svg" alt="Wishlist" />
                    <p className="mb-0">
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/login" className="link d-flex align-items-center gap-2 ">
                    <img src="/images/user.svg" alt="User" />
                    <p className="mb-0">
                      Login <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/cart" className="link d-flex align-items-center gap-2 position-relative">
                    <img src="/images/cart.svg" alt="Cart" />
                    <span className="indicator bg-white text-dark position-absolute text-center">
                      0
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-5">
                <div className="dropdown">
                  <button
                    className="btn text-light dropdown-toggle d-flex align-items-center gap-3"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="me-5">Shop Categories</span>
                  </button>
                  <ul className="dropdown-menu">
                    <Link className="dropdown-item" to="">
                      Action
                    </Link>
                    <Link className="dropdown-item" to="">
                      Another action
                    </Link>
                    <Link className="dropdown-item" to="">
                      Something else here
                    </Link>
                  </ul>
                </div>
                <div className="menu-links">
                  <div className="d-flex aling-items-center gap-3">
                    <NavLink className="link" to="/">
                      HOME
                    </NavLink>
                    <NavLink className="link" to="/store">
                      STORE
                    </NavLink>
                    <NavLink className="link" to="/blog">
                      BLOG
                    </NavLink>
                    <NavLink className="link" to="/contact">
                      CONTACT
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
