import React from "react"
import Meta from "../components/Meta"
import Breadcrumb from "../components/Breadcrumb"
import Container from "../components/Container"
import CustomInput from "../components/CustomInput"

const SignUp = () => {
  return (
    <>
      <Meta title="Sign Up" />
      <Breadcrumb title="Sign Up" />
      <Container class1="auth-wrapper py-5">
        <div className="row">
          <div className="col-4 mx-auto">
            <div className="auth-container">
              <h1 className="text-center">Create Account</h1>
              <form action="">
                <CustomInput
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="form-control mt-3 py-2"
                />
                <CustomInput
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="form-control mt-3 py-2"
                />
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control mt-3 py-2"
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control mt-3 py-2"
                />
                <CustomInput
                  type="password"
                  name="confirm-password"
                  placeholder="Confirm Password"
                  className="form-control mt-3 py-2"
                />
                <div className="d-flex justify-content-center mt-3">
                  <button type="submit" className="submit">
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default SignUp
