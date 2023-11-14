import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import NotesListPage from "./notes/NotesListPage";
import { axiosConfig } from "../../axiosConfig";

const Cover = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [notes, setNotes] = useState([]);

  const fetchListNotes = () => {
    axiosConfig
      .get(`list-notes/`, {
        params: {
          q: searchQuery,
        },
      })
      .then((response) => {
        const { app_data } = response.data;
        if (app_data.StatusCode === 6000) {
          setNotes(app_data.data);
        }
      });
  };

  useEffect(() => {
    fetchListNotes();
  }, [searchQuery]);
  return (
    <div>
      <SearchBar
        fetchListNotes={fetchListNotes}
        setSearchQuery={setSearchQuery}
      />
      <NotesListPage notes={notes} fetchListNotes={fetchListNotes} />
    </div>
  );
};

export default Cover;
