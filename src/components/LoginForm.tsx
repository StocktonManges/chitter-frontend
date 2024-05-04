import { Navigate } from "react-router-dom";
import { useAuth, useNav } from "../providers/context-hooks";
import { BSClass } from "../css/bootstrapClasses";
import { useState } from "react";

export default function LoginForm() {
  const {
    setLoginEmail,
    setLoginPassword,
    loginEmail,
    loginPassword,
    login,
    activeUser,
  } = useAuth();
  const { navUrls, navigate } = useNav();
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  return activeUser ? (
    <Navigate to={navUrls.userHome} />
  ) : (
    <div className="container-fluid d-flex align-items-center position-absolute translate-middle top-50 start-50">
      <div className="login-form-wrapper d-flex flex-column align-items-center w-100">
        <h3>Login User</h3>
        <form
          className="login-form d-flex flex-column align-items-center flex-wrap w-100"
          onSubmit={(e) => {
            e.preventDefault();
            login();
          }}
        >
          <div className={BSClass.formInputWrapper}>
            <label htmlFor="login-email">Email:</label>
            <input
              className={BSClass.formInput}
              id="login-email"
              type="email"
              value={loginEmail}
              onChange={(e) => {
                setLoginEmail(e.target.value);
              }}
            />
          </div>

          <div className={BSClass.formInputWrapper + "mb-3 position-relative"}>
            <label htmlFor="login-password">Password:</label>
            <input
              className={BSClass.formInput}
              id="login-password"
              type={isPasswordVisible ? "text" : "password"}
              value={loginPassword}
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
            />
            <div
              className="position-absolute end-0 me-1 px-1 bg-white"
              onClick={() => {
                setIsPasswordVisible(!isPasswordVisible);
              }}
            >
              <i
                className={`fa-solid fa-eye${
                  isPasswordVisible ? "" : "-slash"
                }`}
              ></i>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <button
            type="button"
            className="btn btn-link"
            onClick={() => {
              navigate(navUrls.signUp);
            }}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
