import React from "react"
import Meta from "../components/Meta"
import Breadcrumb from "../components/Breadcrumb"
import { Link } from "react-router-dom"
import BlogCard from "../components/BlogCard"
import Container from "../components/Container"

const Blog = () => {
  return (
    <>
      <Meta title="Blog" />
      <Breadcrumb title="Blog" />
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
              <BlogCard column={6} />
              <BlogCard column={6} />
              <BlogCard column={6} />
              <BlogCard column={6} />
              <BlogCard column={6} />
              <BlogCard column={6} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Blog
