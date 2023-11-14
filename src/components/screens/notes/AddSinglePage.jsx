import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { axiosConfig } from "../../../axiosConfig";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";

const AddSinglePage = ({ setModal, modal, fetchListNotes }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const clearState = () => {
    setTitle("");
    setBody("");
  };

  const addDetails = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    axiosConfig.post(`add-notes/`, formData).then((response) => {
      const { app_data } = response.data;
      if (app_data.StatusCode === 6000) {
        fetchListNotes();
        clearState();
        setModal(false);
      }
    });
  };

  return (
    <MainContainer>
      <Container className={modal ? "active" : ""}>
        <Overlay onClick={() => setModal(false)}> </Overlay>
        <Modal>
          <Wrapper>
            <FormDiv>
              <Form>
                <TitleDiv>
                  <Label>Title</Label>
                  <InputDiv>
                    <input
                      type="text"
                      placeholder="Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </InputDiv>
                </TitleDiv>
                <TitleDiv>
                  <Label>Body</Label>
                  <InputDiv>
                    <textarea
                      rows="12"
                      col="70"
                      placeholder="Title"
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                    />
                  </InputDiv>
                </TitleDiv>
                <TitleDiv>
                  <Button
                    onClick={() => {
                      addDetails();
                    }}
                  >
                    Submit
                  </Button>
                </TitleDiv>
              </Form>
            </FormDiv>
          </Wrapper>
        </Modal>
      </Container>
    </MainContainer>
  );
};

export default AddSinglePage;

const MainContainer = styled.div`
  width: 100%;
`;
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
  height: 90vh;
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
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Wrapper = styled.div`
  width: 80%;
  height: 80vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FormDiv = styled.div`
  width: 70%;
  height: 300px;
  /* background-color: red; */
  border: 1px solid #000;
`;
const Form = styled.form`
  margin-top: 20px;
`;
const TitleDiv = styled.div`
  display: flex;
  margin-top: 10px;
`;
const Label = styled.label`
  width: 30%;
  text-align: center;
`;
const InputDiv = styled.div``;
const Button = styled.div`
  width: 100px;
  padding: 3px;
  background-color: aqua;
  border: none;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
`;
