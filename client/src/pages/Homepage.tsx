import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import NotesList from "../components/NotesList";

const Homepage: React.FC = () => {
  return (
    <div className="max-w-[60dvw] mx-auto mt-8">
      <Header />
      <div className="flex flex-col gap-y-16">
        <SearchBar />
        <NotesList />
      </div>
    </div>
  );
};

export default Homepage;
