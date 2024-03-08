import React from "react"
import Meta from "../components/Meta"
import Breadcrumb from "../components/Breadcrumb"
import Container from "../components/Container"

const Wishlist = () => {
  return (
    <>
      <Meta title="Wishlist" />
      <Breadcrumb title="Wishlist" />
      <Container class1="wishlist-wrapper py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="/images/cross.svg"
                alt="Cross"
                className="cross position-absolute"
              />
              <div className="product-image">
                <img src="/images/tab.jpg" alt="Tab" className="img-fluid" />
              </div>
              <div className="product-details">
                <a href="#" className="title">
                  Honor T1 7.0. 1 GB RAM 8 GB ROM 7 Inch with Wi-Fi+3G Tablet
                </a>
                <p className="price mb-2">$100.00</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="/images/cross.svg"
                alt="Cross"
                className="cross position-absolute"
              />
              <div className="product-image">
                <img src="/images/tab.jpg" alt="Tab" className="img-fluid" />
              </div>
              <div className="product-details">
                <a href="#" className="title">
                  Honor T1 7.0. 1 GB RAM 8 GB ROM 7 Inch with Wi-Fi+3G Tablet
                </a>
                <p className="price mb-2">$100.00</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="/images/cross.svg"
                alt="Cross"
                className="cross position-absolute"
              />
              <div className="product-image">
                <img src="/images/tab.jpg" alt="Tab" className="img-fluid" />
              </div>
              <div className="product-details">
                <a href="#" className="title">
                  Honor T1 7.0. 1 GB RAM 8 GB ROM 7 Inch with Wi-Fi+3G Tablet
                </a>
                <p className="price mb-2">$100.00</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="/images/cross.svg"
                alt="Cross"
                className="cross position-absolute"
              />
              <div className="product-image">
                <img src="/images/tab.jpg" alt="Tab" className="img-fluid" />
              </div>
              <div className="product-details">
                <a href="#" className="title">
                  Honor T1 7.0. 1 GB RAM 8 GB ROM 7 Inch with Wi-Fi+3G Tablet
                </a>
                <p className="price mb-2">$100.00</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Wishlist
