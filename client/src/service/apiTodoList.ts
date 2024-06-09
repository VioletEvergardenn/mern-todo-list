import axios from "axios";
import { NotesListType } from "./types";

export async function getNotes() {
  const { data } = await axios.get("http://localhost:3000/");
  return data;
}

export async function addNotes(newNote: NotesListType) {
  const { data } = await axios.post("http://localhost:3000/new", newNote);
  return data;
}
