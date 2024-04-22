import { BSClass } from "../css/bootstrapClasses";
import { usePost } from "../providers/context-hooks";

export default function NewPostModal() {
  const {
    newPostTitle,
    setNewPostTitle,
    newPostContent,
    setNewPostContent,
    publishPost,
  } = usePost();

  return (
    <div className="modal fade" id="new-post-modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h2>New Post</h2>
            <button
              className="btn-close"
              data-bs-dismiss="modal"
              data-bs-target="#new-post-modal"
            />
          </div>
          <div className="modal-body">
            <form
              id="new-post-form"
              className="new-post-form d-flex flex-column align-items-center flex-wrap w-100"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className={BSClass.formInputWrapper}>
                <label htmlFor="title">Title:</label>
                <input
                  className={BSClass.formInput}
                  id="title"
                  type="text"
                  value={newPostTitle}
                  onChange={(e) => {
                    setNewPostTitle(e.target.value);
                  }}
                />
              </div>

              <div className={BSClass.formInputWrapper + "mb-3"}>
                <label htmlFor="content">Content:</label>
                <input
                  className={BSClass.formInput}
                  id="content"
                  type="text"
                  value={newPostContent}
                  onChange={(e) => {
                    setNewPostContent(e.target.value);
                  }}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              form="new-post-form"
              className="btn btn-outline-primary"
              onClick={publishPost}
              data-bs-dismiss="modal"
              data-bs-target="#new-post-modal"
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
