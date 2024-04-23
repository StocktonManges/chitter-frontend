import { Navigate } from "react-router-dom";
import { useAuth, useNav } from "../providers/context-hooks";
import toast from "react-hot-toast";
import { BSClass } from "../css/bootstrapClasses";

export default function SignUpForm() {
  const {
    activeUser,
    newUserFirstName,
    setNewUserFirstName,
    newUserLastName,
    setNewUserLastName,
    newUserEmail,
    setNewUserEmail,
    newUserPassword,
    setNewUserPassword,
    newUserVerifyPassword,
    setNewUserVerifyPassword,
    handleValidSignUpSubmit,
  } = useAuth();
  const { navUrls } = useNav();

  const validationsPassed =
    newUserPassword === newUserVerifyPassword &&
    newUserFirstName !== "" &&
    newUserLastName !== "" &&
    newUserEmail !== "" &&
    newUserPassword !== "" &&
    newUserVerifyPassword !== "";

  return activeUser ? (
    <Navigate to={navUrls.userHome} />
  ) : (
    <div className="container-fluid d-flex align-items-center position-absolute translate-middle top-50 start-50">
      <div className="login-form-wrapper d-flex flex-column align-items-center w-100">
        <h3>Create Account</h3>
        <form
          className="sign-up-form d-flex flex-column align-items-center flex-wrap w-100"
          onSubmit={(e) => {
            e.preventDefault();
            validationsPassed
              ? handleValidSignUpSubmit()
              : toast.error("Invalid user details", {
                  id: "invalid-user-details",
                });
          }}
        >
          <div className={BSClass.formInputWrapper}>
            <label htmlFor="new-user-first-name">First Name:</label>
            <input
              className={BSClass.formInput}
              id="new-user-first-name"
              type="text"
              value={newUserFirstName}
              onChange={(e) => {
                setNewUserFirstName(e.target.value);
              }}
            />
          </div>

          <div className={BSClass.formInputWrapper}>
            <label htmlFor="new-user-last-name">Last Name:</label>
            <input
              className={BSClass.formInput}
              id="new-user-last-name"
              type="text"
              value={newUserLastName}
              onChange={(e) => {
                setNewUserLastName(e.target.value);
              }}
            />
          </div>

          <div className={BSClass.formInputWrapper}>
            <label htmlFor="new-user-email">Email:</label>
            <input
              className={BSClass.formInput}
              id="new-user-email"
              type="email"
              value={newUserEmail}
              onChange={(e) => {
                setNewUserEmail(e.target.value);
              }}
            />
          </div>

          <div className={BSClass.formInputWrapper}>
            <label htmlFor="new-user-password">Password:</label>
            <input
              className={BSClass.formInput}
              id="new-user-password"
              type="text"
              value={newUserPassword}
              onChange={(e) => {
                setNewUserPassword(e.target.value);
              }}
            />
          </div>

          <div className={BSClass.formInputWrapper + "mb-3"}>
            <label htmlFor="new-user-password2">Re-enter Password:</label>
            <input
              className={BSClass.formInput}
              id="new-user-password2"
              type="text"
              value={newUserVerifyPassword}
              onChange={(e) => {
                setNewUserVerifyPassword(e.target.value);
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
