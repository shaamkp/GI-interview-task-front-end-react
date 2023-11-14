import { create } from "zustand";

export const useDeleteIdStore = create((set) => ({
  noteId: "",
  setNoteId: (id) => set({ noteId: id }),
}));
