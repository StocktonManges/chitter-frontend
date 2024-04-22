import { Outlet } from "react-router-dom";
import { useAuth, useNav } from "../providers/context-hooks";
import UserSettingsModal from "./UserSettingsModal";
import ReseedButton from "./ReseedButton";
import NewPostModal from "./NewPostModal";

export default function UserHeader() {
  const { navigate, navUrls } = useNav();
  const { activeUser } = useAuth();

  return (
    <>
      <div className="container text-bg-dark p-0 m-0 mw-100">
        <header className="d-flex flex-wrap justify-content-center align-items-center py-3 px-5 border-bottom">
          <div className="me-4 d-flex flex-column align-items-center justify-content-center col-auto">
            <h3 className="m-0 border-bottom border-primary">Chitter</h3>
            <span style={{ fontSize: 10 }}>the new Twitter</span>
          </div>
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
            <li className="nav-item d-flex align-items-center">
              <button
                className="nav-link p-0 me-3"
                data-bs-toggle="modal"
                data-bs-target="#new-post-modal"
              >
                <i
                  className="fa-solid fa-circle-plus text-primary"
                  style={{ fontSize: 24 }}
                ></i>
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
      <NewPostModal />
      <Outlet />
    </>
  );
}
