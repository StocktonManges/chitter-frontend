import { Outlet } from "react-router-dom";
import { useNav } from "../providers/context-hooks";
import ReseedButton from "./ReseedButton";

export default function GeneralHeader() {
  const { navigate, navUrls } = useNav();

  return (
    <>
      <div className="container text-bg-dark p-0 m-0 mw-100">
        <header className="d-flex flex-wrap justify-content-center py-3 px-5 border-bottom">
          <ReseedButton />
          <ul className="nav nav-pills">
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => {
                  navigate(navUrls.home);
                }}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => {
                  navigate(navUrls.login);
                }}
              >
                Login
              </button>
            </li>
          </ul>
        </header>
      </div>
      <Outlet />
    </>
  );
}
