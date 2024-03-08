import React from "react"
import Meta from "../components/Meta"
import Breadcrumb from "../components/Breadcrumb"
import { Link } from "react-router-dom"
import {
  FaArrowLeft,
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa"
import Container from "../components/Container"

const SingleBlog = () => {
  return (
    <>
      <Meta title="Blog Title" />
      <Breadcrumb title="Blog Title" />
      <Container class1="blog-wrapper py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-container d-flex flex-column gap-3">
              <div className="filter-card">
                <h1 className="title">Find By Categories</h1>
                <ul className="my-4">
                  <li>
                    <Link className="link">Sport</Link>
                  </li>
                  <li>
                    <Link className="link">Politic</Link>
                  </li>
                  <li>
                    <Link className="link">Social</Link>
                  </li>
                  <li>
                    <Link className="link">International</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="blog-container">
                <h1 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h1>
                <img src="/images/blog-1.jpg" alt="id" className="w-100" />
                <p className="mb-0">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta voluptates sint placeat mollitia officiis, quam
                  repellat, molestiae est possimus et quae veritatis ab tenetur
                  ipsum repudiandae iusto repellendus maiores accusantium.
                </p>
                <div className="d-flex gap-4 mb-4">
                  <p className="mb-0">11 Jun, 2022</p>
                  <p className="mb-0">writer</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-5">
                  <Link
                    to="/blog"
                    className="text-dark d-flex align-items-center gap-2"
                  >
                    <FaArrowLeft />
                    <p className="my-0 d-inline-block">Back to blog</p>
                  </Link>
                  <div className="social-media-icon d-flex gap-4">
                    <Link to="#" className="text-dark">
                      <FaFacebookSquare />
                    </Link>
                    <Link to="#" className="text-dark">
                      <FaTwitter />
                    </Link>
                    <Link to="#" className="text-dark">
                      <FaInstagram />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="comment-container">
                <h1>Leave A Comment</h1>
                <form action="">
                  <div className="form-input d-flex gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="form-control"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <textarea
                    name="comment"
                    id="comment"
                    rows="4"
                    className="form-control w-100 mt-3 border-0"
                    placeholder="Comment"
                  ></textarea>
                  <button type="submit" className="submit mt-3">
                    Post Comment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default SingleBlog
