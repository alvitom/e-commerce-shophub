import React from "react"
import { Link } from "react-router-dom"

const BlogCard = ({ column }) => {
  return (
    <div
      className={location.pathname === "/blog" ? `col-${column} mb-4` : "col-3"}
    >
      <div className="blog-card">
        <div className="card-image">
          <img src="/images/blog-1.jpg" alt="Blog" className="img-fluid" />
        </div>
        <div className="blog-content">
          <p className="date">11 Juni 2023</p>
          <h5 className="title">A Beautiful Sunday Morning Renaissance</h5>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            dolore reprehenderit unde quae error, blanditiis hic facere totam
            cumque eos atque officia provident et dignissimos, asperiores
            accusantium rem laboriosam. Sed?
          </p>
          <Link to="/blog/:id" className="link">
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
