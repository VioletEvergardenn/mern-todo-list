import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between  items-center">
      <h1 className="text-4xl left-auto">Notes</h1>
      <div className="flex gap-4">
        <Link
          to="/new"
          className="p-4 text-2xl border-white border-[1px] rounded-xl"
        >
          Create
        </Link>
        <button className="p-4 text-2xl border-white border-[1px] rounded-xl">
          Edit Tags
        </button>
      </div>
    </div>
  );
};

export default Header;
