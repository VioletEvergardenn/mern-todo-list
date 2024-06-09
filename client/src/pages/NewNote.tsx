import React, { useState } from "react";
import HeadingText from "../components/HeadingText";
import { useNavigate } from "react-router-dom";
import { usePostNote } from "../service/usePostNote";

const NewNote: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const { addNote } = usePostNote();
  function handleAddNote(e: React.FormEvent) {
    e.preventDefault();
    if (!title || !description) return;
    addNote({ title, description });
  }
  function handleCancel() {
    setTitle("");
    setDescription("");
  }
  const navigate = useNavigate();
  return (
    <form
      className="max-w-[60dvw] mx-auto mt-8"
      onClick={(e) => e.preventDefault()}
    >
      <div className="flex justify-between items-center">
        <HeadingText label="New Note" />
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="text-2xl underline"
        >
          &larr; back
        </button>
      </div>
      <label htmlFor="note" />
      <div className="mt-16 flex gap-x-4">
        <div className="gap-y-4 flex flex-col items-start justify-start">
          <label htmlFor="notes" className="text-2xl">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            id="notes"
            className="p-4 border-2 border-[#f4f4f4] bg-transparent rounded-md text-2xl"
          />
        </div>
        <div className="gap-y-4 flex flex-col items-start justify-start">
          <label htmlFor="notes" className="text-2xl">
            Tags
          </label>
          <input
            type="text"
            id="tags"
            className="p-4 border-2 border-[#f4f4f4] bg-transparent rounded-md text-2xl"
          />
        </div>
        <br />
      </div>
      <div className="mt-8">
        <label htmlFor="notes" className="text-2xl">
          Note
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-4 w-full mt-8 border-2 border-[#f4f4f4] bg-transparent rounded-md text-2xl h-[450px]"
        ></textarea>
      </div>
      <div className="flex gap-x-4 mt-4 ml-auto w-max">
        <button
          onClick={handleAddNote}
          className="p-4 text-2xl border-2 rounded-md border-white"
        >
          Save
        </button>
        <button
          onClick={handleCancel}
          type="reset"
          className="p-4 text-2xl border-2 rounded-md border-white"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NewNote;
