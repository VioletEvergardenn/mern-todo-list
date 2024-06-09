import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="mt-16 flex gap-x-4">
      <div className="gap-x-2 flex items-center justify-center">
        <label htmlFor="notes" className="text-2xl">
          Title
        </label>
        <input
          type="text"
          id="notes"
          className="p-4 border-2 border-[#f4f4f4] bg-transparent rounded-md text-2xl"
        />
      </div>
      <div className="gap-x-2 flex items-center justify-center">
        <label htmlFor="notes" className="text-2xl">
          Tags
        </label>
        <input
          type="text"
          id="tags"
          className="p-4 border-2 border-[#f4f4f4] bg-transparent rounded-md text-2xl"
        />
      </div>
    </div>
  );
};

export default SearchBar;
