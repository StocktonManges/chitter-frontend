import { Outlet } from "react-router-dom";
import { useAuth, useNav } from "../providers/context-hooks";
import UserSettingsModal from "./UserSettingsModal";
import ReseedButton from "./ReseedButton";

export default function UserHeader() {
  const { navigate, navUrls } = useNav();
  const { activeUser } = useAuth();

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
                  navigate(navUrls.userHome);
                }}
              >
                My Posts
              </button>
            </li>
            <li className="nav-item col-auto">
              <button
                className="user-icon btn btn-primary rounded-circle"
                data-bs-toggle="modal"
                data-bs-target="#user-settings-modal"
              >
                {activeUser?.name[0]}
              </button>
            </li>
          </ul>
        </header>
      </div>
      <UserSettingsModal />
      <Outlet />
    </>
  );
}
