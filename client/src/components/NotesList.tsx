import React from "react";
import { useGetNotes } from "../service/useGetNotes";
import NotesItem from "./NotesItem";

const NotesList: React.FC = () => {
  const { notes, isLoadingNotes } = useGetNotes();
  console.log(notes);

  return (
    <ul className="grid grid-cols-6 gap-4">
      {notes?.map((note) => {
        return <NotesItem note={note} />;
      })}
    </ul>
  );
};

export default NotesList;
