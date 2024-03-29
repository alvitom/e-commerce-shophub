import React from "react"
import { Link } from "react-router-dom"

const Breadcrumb = ({ title }) => {
  return (
    <div className="breadcrumb mb-0 py-4">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0">
              <Link to="/">Home</Link> / {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb
