import { usePost, useUser } from "../providers/context-hooks";
import { reseedData } from "../utils";

export default function ReseedButton() {
  const { refetchAllUsers } = useUser();
  const { refetchAllPosts } = usePost();
  const fetchAllData = () =>
    Promise.resolve().then(() => {
      refetchAllUsers();
      refetchAllPosts();
    });

  return (
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
  );
}
