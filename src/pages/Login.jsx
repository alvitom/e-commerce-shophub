import React from "react"
import Breadcrumb from "../components/Breadcrumb"
import Meta from "../components/Meta"
import Container from "../components/Container"
import CustomInput from "../components/CustomInput"

const Login = () => {
  return (
    <>
      <Meta title="Login" />
      <Breadcrumb title="Login" />
      <Container class1="auth-wrapper py-5">
        <div className="row">
          <div className="col-4 mx-auto">
            <div className="auth-container">
              <h1 className="text-center">Login</h1>
              <form action="">
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
                <a href="/forgot-password" className="mx-2">
                  Forgot password
                </a>
                <div className="d-flex align-items-center justify-content-center gap-3">
                  <button type="submit" className="submit">
                    Login
                  </button>
                  <a href="/sign-up" className="sign-up">
                    Sign Up
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Login
