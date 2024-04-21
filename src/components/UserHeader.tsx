import { Outlet } from "react-router-dom";
import { useNav, usePost, useUser } from "../providers/context-hooks";
import { reseedData } from "../utils";
import UserSettingsModal from "./UserSettingsModal";

export default function UserHeader() {
  const { refetchAllUsers } = useUser();
  const { refetchAllPosts } = usePost();
  const { navigate, navUrls } = useNav();
  const fetchAllData = () => {
    refetchAllPosts();
    refetchAllUsers();
  };

  return (
    <>
      <div className="container text-bg-dark p-0 m-0 mw-100">
        <header className="d-flex flex-wrap justify-content-center py-3 px-5 border-bottom">
          <button
            className="btn btn-secondary me-auto"
            type="button"
            onClick={async () => {
              await reseedData();
              console.log("Fetching updated data...");
              await fetchAllData();
              console.log("Data fetched! ✅");
            }}
          >
            Reseed Data
          </button>
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
                A
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
