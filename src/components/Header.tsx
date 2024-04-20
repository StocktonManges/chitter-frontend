import { usePost, useUser } from "../providers/context-hooks";
import { reseedData } from "../utils";

export default function Header() {
  const { refetchAllUsers } = useUser();
  const { refetchAllPosts } = usePost();
  const fetchAllData = () => {
    refetchAllPosts();
    refetchAllUsers();
  };

  return (
    <header className="container text-bg-dark">
      <div className="row">
        <button
          className="col col-2 btn btn-secondary"
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
        <h3 className="col col-10 text-center">This is the header.</h3>
      </div>
    </header>
  );
}
