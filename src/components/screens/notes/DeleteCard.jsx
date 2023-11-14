import React from "react";
import styled from "styled-components";
import { axiosConfig } from "../../../axiosConfig";

const DeleteCard = ({
  deleteModal,
  setDeleteModal,
  noteId,
  fetchListNotes,
}) => {
  const deleteNote = () => {
    axiosConfig.delete(`delete-note/${noteId}/`, {}).then((response) => {
      const { app_data } = response.data;
      if (app_data.StatusCode === 6000) {
        fetchListNotes();
        setDeleteModal(false);
      }
    });
  };
  return (
    <Cover>
      <Container className={deleteModal && "active"}>
        <Overlay onClick={() => setDeleteModal(false)}></Overlay>
        <Modal>
          <Wrapper>
            <MainContainer>
              <TopContainer>
                <MainTitle>
                  Do you really want to delete the product ?
                </MainTitle>
              </TopContainer>
              <ButtonContainer>
                <Button onClick={() => deleteNote()}>Confirm</Button>
                <Button
                  onClick={() => setDeleteModal(false)}
                  className="cancel"
                >
                  Cancel
                </Button>
              </ButtonContainer>
            </MainContainer>
          </Wrapper>
        </Modal>
      </Container>
    </Cover>
  );
};

export default DeleteCard;

const Cover = styled.div``;
const Container = styled.div`
  position: fixed;
  transition: 0.3s;
  transform: scale(0, 0);
  width: 100%;
  height: 100vh;
  z-index: 1000;
  left: 0;
  top: 0px;
  &.active {
    transform: scale(1, 1);
    backdrop-filter: blur(4px);
  }
`;
const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
  position: fixed;
  z-index: 101;
  left: 0;
  top: 0px;
  width: 100%;
  z-index: 1000;
  min-height: 100vh;
  max-height: 100vh;
  filter: blur(1px);
`;
const Modal = styled.div`
  width: 90%;
  max-width: 736px;
  max-height: 100vh;
  position: absolute;
  margin: 0 auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: 0.5s;
  z-index: 1000;
  border: 1px solid #fff;
  background: #fff;
  border-radius: 5px;
  overflow-y: hidden;
  box-shadow: 0px 3px 56px #000;
  overflow-y: scroll;
  padding-bottom: 30px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Wrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainContainer = styled.div``;
const TopContainer = styled.div`
  margin-top: 20px;
`;
const MainTitle = styled.div`
  font-size: 20px;
  text-align: center;
  color: grey;
`;
const ButtonContainer = styled.div`
  width: 30%;
  margin: 25px auto;
  display: flex;
  justify-content: space-between;
`;
const Button = styled.div`
  border: 1px solid red;
  color: red;
  text-align: center;
  font-weight: 700;
  border-radius: 5px;
  width: 90px;
  padding: 5px;
  margin-left: 10px;
  cursor: pointer;
  &.cancel {
    border: 1px solid green;
    color: green;
  }
`;
const DeleteImageContainer = styled.div`
  width: 10%;
  margin: 0 auto;
  margin-top: 10px;
  img {
    width: 100%;
    display: block;
  }
`;
