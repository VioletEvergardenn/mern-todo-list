import React from "react";
import { NotesListType } from "../service/types";

type NotesItemType = {
  note: NotesListType;
};

const NotesItem: React.FC<NotesItemType> = ({ note }) => {
  return (
    <li className="w-full p-4 h-full border-white border-2 aspect-video flex flex-col justify-center items-center">
      <p className="text-3xl">{note.title}</p>
      <div className="mt-4 flex gap-4 flex-wrap">
        {note.tag?.map((tagItem) => {
          return (
            <span className="p-2 text-xl bg-blue-400 rounded-md">
              {tagItem}
            </span>
          );
        })}
      </div>
    </li>
  );
};

export default NotesItem;
