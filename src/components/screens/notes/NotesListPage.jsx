import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { axiosConfig } from "../../../axiosConfig";
import { Link } from "react-router-dom";
import AddSinglePage from "./AddSinglePage";
import DeleteCard from "./DeleteCard";
import { useDeleteIdStore } from "../../context/Store";

const NotesListPage = ({ notes, fetchListNotes }) => {
  const setNoteId = useDeleteIdStore((state) => state.setNoteId);
  const noteId = useDeleteIdStore((state) => state.noteId);

  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <MainContainer>
      <Wrapper>
        <Top>
          <AddButton onClick={() => setModal(true)}>Add</AddButton>
        </Top>
        <Bottom>
          <NoteMainContainer>
            {notes?.length > 0 ? (
              notes.map((item) => (
                <NoteContainer>
                  <TopContainer to={`${item.id}`}>
                    <Title>{item.title}</Title>

                    <Para>{item.body}</Para>
                  </TopContainer>
                  <BottomContainer>
                    <ContentContainer>
                      <Para>{item.created_at}</Para>
                      <Delete
                        onClick={() => {
                          setDeleteModal(true);
                          setNoteId(item.id);
                        }}
                      >
                        <i class="ri-delete-bin-6-line"></i>
                      </Delete>
                    </ContentContainer>
                  </BottomContainer>
                </NoteContainer>
              ))
            ) : (
              <h1>No Notes Found</h1>
            )}
          </NoteMainContainer>
        </Bottom>
      </Wrapper>
      <AddSinglePage
        setModal={setModal}
        modal={modal}
        fetchListNotes={fetchListNotes}
      />
      <DeleteCard
        setDeleteModal={setDeleteModal}
        deleteModal={deleteModal}
        fetchListNotes={fetchListNotes}
        noteId={noteId}
      />
    </MainContainer>
  );
};

export default NotesListPage;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const Top = styled.div`
  display: flex;
  justify-content: end;
`;
const Bottom = styled.div``;
const AddButton = styled(Link)`
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  display: block;
  text-align: end;
  margin-top: 10px;
  background: black;
  color: #fff;
  padding: 10px 29px;
  border-radius: 8px;
  text-decoration: none;
`;
const NoteContainer = styled.div`
  width: 20.33%;
  text-decoration: none;
  color: black;
  height: 200px;
  background-color: red;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.75s ease;
  &:hover {
    scale: 1.1;
    transition: all 1s ease;
  }
`;
const TopContainer = styled(Link)`
  text-decoration: none;
  color: black;
`;
const Title = styled.h2`
  margin-left: 20px;
  margin-top: 10px;
`;
const BottomContainer = styled.div``;
const Para = styled.p`
  margin-left: 20px;
`;
const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const NoteMainContainer = styled.div`
  margin-top: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 31px;
  &:nth-child(3) {
    gap: 0;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
`;
const Delete = styled.div``;
