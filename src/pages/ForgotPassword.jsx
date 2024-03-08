import React from "react"
import Meta from "../components/Meta"
import Breadcrumb from "../components/Breadcrumb"
import Container from "../components/Container"
import CustomInput from "../components/CustomInput"

const ForgotPassword = () => {
  const cancel = () => {
    location.href = "/login"
  }
  return (
    <>
      <Meta title="Forgot Password" />
      <Breadcrumb title="Forgot Password" />
      <Container class1="auth-wrapper py-5">
        <div className="row">
          <div className="col-5 mx-auto">
            <div className="auth-container">
              <h1 className="text-center">Reset Your Password</h1>
              <p className="description text-center my-3">
                We will send you an email to reset your password
              </p>
              <form action="">
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control py-2"
                />
                <div className="d-flex flex-column align-items-center justify-content-center gap-2 mt-4">
                  <button type="submit" className="submit">
                    Submit
                  </button>
                  <button type="button" className="cancel" onClick={cancel}>
                    Cancel
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

export default ForgotPassword
