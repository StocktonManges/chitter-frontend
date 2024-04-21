import { useRef } from "react";

export default function SearchBar({
  setSearchInput,
}: {
  setSearchInput: (value: string) => void;
}) {
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="d-flex justify-content-center col-auto">
      <form
        className="d-flex align-items-center form"
        onSubmit={(e) => {
          e.preventDefault();
          if (searchInputRef.current) {
            setSearchInput(searchInputRef.current.value);
            searchInputRef.current.value = "";
          }
        }}
      >
        <label className="form-label cols-1 pe-2" htmlFor="search-input">
          Search:
        </label>
        <div className="col cols-11 input-group">
          <input
            ref={searchInputRef}
            id="search-input"
            type="text"
            className="form-control"
            placeholder="Key words..."
          />
          <button className="btn btn-primary">Apply</button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              setSearchInput("");
              if (searchInputRef.current) searchInputRef.current.value = "";
            }}
          >
            Clear Filter
          </button>
        </div>
      </form>
    </div>
  );
}
