import { useQuery } from "@tanstack/react-query";
import { getNotes } from "./apiTodoList";
import { NotesListType } from "./types";

export function useGetNotes() {
  const { data: notes, isLoading: isLoadingNotes } = useQuery<NotesListType[]>({
    queryKey: ["notes"],
    queryFn: () => getNotes(),
  });

  return { notes, isLoadingNotes };
}
