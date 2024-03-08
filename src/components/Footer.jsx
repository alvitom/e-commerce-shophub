import React from "react"
import { Link } from "react-router-dom"
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaGooglePlay,
  FaAppStoreIos,
} from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <footer className="footer-top py-4">
        <div className="container">
          <div className="row align-items-center my-4">
            <div className="col-5">
              <div className="footer-top-data d-flex align items-center gap-4">
                <img src="/images/newsletter.png" alt="Newsletter" />
                <h4 className="mb-0 text-light">Sign Up for Newsletter</h4>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                  placeholder="Your Email Address"
                />
                <button className="input-group-text" id="basic-addon2">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-middle py-4">
        <div className="container">
          <div className="row text-light my-4">
            <div className="col-3">
              <h4 className="mb-4">Contact Us</h4>
              <div>
                <address>
                  Jl. Pinang 2 No. 22 <br /> Kranggan Permai <br />
                  Jatisampurna, Bekasi, Jawa Barat <br /> Kode Pos : 17433
                </address>
                <Link className="link d-block my-3" to="tel:+62 81381547895">
                  +62 81381547895
                </Link>
                <Link
                  className="link d-block my-3"
                  to="mailto:muhammadalvito2@gmail.com"
                >
                  muhammadalvito2@gmail.com
                </Link>
                <div className="social-icons d-flex gap-4">
                  <Link className="link fs-4">
                    <FaGithub />
                  </Link>
                  <Link className="link fs-4">
                    <FaLinkedin />
                  </Link>
                  <Link className="link fs-4">
                    <FaInstagram />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-2">
              <h4 className="mb-4">Information</h4>
              <div className="footer-links d-flex flex-column gap-3">
                <Link to="/privacy-policy" className="link">Privacy Policy</Link>
                <Link to="/refund-policy" className="link">Refund Policy</Link>
                <Link to="/shipping-policy" className="link">Shipping Policy</Link>
                <Link to="/terms-of-service" className="link">Terms Of Service</Link>
                <Link to="/blog" className="link">Blogs</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="mb-4">Account</h4>
              <div className="footer-links d-flex flex-column gap-3">
                <Link className="link">Search</Link>
                <Link className="link">About Us</Link>
                <Link className="link">FAQ</Link>
                <Link className="link">Contact</Link>
                <Link className="link">Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column gap-3">
                <Link className="link">Accessories</Link>
                <Link className="link">Laptops</Link>
                <Link className="link">Headphones</Link>
                <Link className="link">Smart Watches</Link>
                <Link className="link">Tablets</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="mb-4">Our App</h4>
              <div className="footer-links d-flex flex-column gap-3">
                <p className="download-app mb-2">
                  Donwload our App and get extra 15% Discount on your first
                  order...
                </p>
                <div className="d-flex gap-1">
                  <div className="google-play d-flex align-items-center gap-2 bg-light text-dark px-3 py-1 rounded-3 w-100">
                    <FaGooglePlay />
                    <div className="d-flex flex-column">
                      <p className="mb-0">Get it on</p>
                      <p className="mb-0 fw-bold">Google play</p>
                    </div>
                  </div>
                  <div className="app-store d-flex align-items-center gap-2 bg-light text-dark px-3 py-1 rounded-3 w-100">
                    <FaAppStoreIos />
                    <div className="d-flex flex-column">
                      <p className="mb-0">Download on the</p>
                      <p className="mb-0 fw-bold">App Store</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-bottom py-4">
        <div className="row my-4">
          <div className="col-12">
            <p className="text-center mb-0 text-light">
              &copy; {new Date().getFullYear()}. Created by Shophub. All Right
              Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
