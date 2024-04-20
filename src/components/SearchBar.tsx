export default function SearchBar({
  searchInput,
  setSearchInput,
}: {
  searchInput: string;
  setSearchInput: (value: string) => void;
}) {
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="container align-items-center">
      <div className="row g-3">
        <div className="col col-auto">Search:</div>
        <div className="col col-8">
          <input
            type="text"
            className="col-12"
            placeholder="Key words..."
            value={searchInput}
            onChange={(e) => {
              handleSearchInput(e);
            }}
          />
        </div>
      </div>
    </div>
  );
}
