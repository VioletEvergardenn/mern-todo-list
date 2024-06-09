import { useQueryClient, useMutation } from "@tanstack/react-query";
import { addNotes } from "./apiTodoList";
import { NotesListType } from "./types";

export function usePostNote() {
  const queryClient = useQueryClient();
  const { mutate: addNote, isPending: isAddingNote } = useMutation({
    mutationFn: (newNote: NotesListType) => addNotes(newNote),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  return { addNote, isAddingNote };
}
