import { Navigate } from "react-router-dom";
import { useAuth, useNav } from "../providers/context-hooks";

export default function LoginForm() {
  const {
    setLoginEmail,
    setLoginPassword,
    loginEmail,
    loginPassword,
    login,
    activeUser,
  } = useAuth();
  const { navUrls } = useNav();

  return activeUser ? (
    <Navigate to={navUrls.userHome} />
  ) : (
    <div className="container-fluid d-flex align-items-center position-absolute translate-middle top-50 start-50">
      <div className="login-form-wrapper d-flex flex-column align-items-center w-100">
        <h3>Login User</h3>
        <form
          className="d-flex flex-column align-items-center w-25"
          onSubmit={(e) => {
            e.preventDefault();
            login();
          }}
        >
          <div className="w-100 d-flex justify-content-between mt-3">
            <label htmlFor="login-email">Email:</label>
            <input
              id="login-email"
              type="email"
              value={loginEmail}
              onChange={(e) => {
                setLoginEmail(e.target.value);
              }}
            />
          </div>

          <div className="w-100 d-flex justify-content-between my-3">
            <label htmlFor="login-password">Password:</label>
            <input
              id="login-password"
              type="text"
              value={loginPassword}
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
