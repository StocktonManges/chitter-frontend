import { useAuth } from "../providers/context-hooks";

export default function UserSettingsModal() {
  const { logout } = useAuth();
  return (
    <div className="modal fade" id="user-settings-modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h2>User Settings</h2>
            <button
              className="btn-close"
              data-bs-dismiss="modal"
              data-bs-target="#user-settings-modal"
            ></button>
          </div>
          <div className="modal-body">Here are some settings.</div>
          <div className="modal-footer">
            <button
              className="btn btn-outline-danger"
              onClick={logout}
              data-bs-dismiss="modal"
              data-bs-target="#user-settings-modal"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
