import React from "react"
import Meta from "../components/Meta"
import Breadcrumb from "../components/Breadcrumb"
import { FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { IoInformation, IoLocation } from "react-icons/io5"
import Container from "../components/Container"

const Contact = () => {
  return (
    <>
      <Meta title="Contact" />
      <Breadcrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5">
        <div className="row">
          <div className="col-12 mb-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126906.97520355189!2d106.8909760754195!3d-6.284362415921466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c6900964f69%3A0xd00495351896398!2sBekasi%2C%20Kota%20Bks%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1709450446561!5m2!1sid!2sid"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12">
            <div className="contact-container">
              <div className="row">
                <div className="col-6 px-3">
                  <h1>Contact</h1>
                  <form action="" className="d-flex flex-column gap-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone number"
                    />
                    <textarea
                      cols={30}
                      rows={4}
                      dr
                      className="w-100 form-control"
                      placeholder="Comment"
                      style={{ resize: "none" }}
                    />
                    <button type="submit" className="w-25">
                      Submit
                    </button>
                  </form>
                </div>
                <div className="col-6 px-3">
                  <h1>Get In Touch With Us</h1>
                  <ul className="ps-0 d-flex flex-column gap-2">
                    <li className="d-flex flex-wrap align-items-center gap-2">
                      <IoLocation />
                      <address className="mb-0">Bekasi, Jawa Barat</address>
                    </li>
                    <li className="d-flex flex-wrap align-items-center gap-2">
                      <FaPhoneAlt />
                      <a href="tel:+62 81381547895">(+62) 813 8154 7895</a>
                    </li>
                    <li className="d-flex flex-wrap align-items-center gap-2">
                      <MdEmail />
                      <a href="mailto:muhammadalvito2@gmail.com">
                        muhammadalvito2@gmail.com
                      </a>
                    </li>
                    <li className="d-flex flex-wrap align-items-center gap-2">
                      <IoInformation />
                      <p className="information mb-0">
                        Monday - Friday 08.00 - 17.00
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Contact
