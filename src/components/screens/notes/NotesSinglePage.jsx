import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { axiosConfig } from "../../../axiosConfig";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const NotesSinglePage = () => {
  const { id } = useParams();
  const [note, setNote] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  const showSuccessAlert = () => {
    // const navigate = useNavigate();

    Swal.fire({
      title: "Success!",
      text: "Changes Updated.",
      icon: "success",
      confirmButtonColor: "rgb(9, 175, 244)",
      confirmButtonText: "Done",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  };

  const fetchNotesView = () => {
    axiosConfig.get(`single-note/${id}/`).then((response) => {
      const { app_data } = response.data;
      if (app_data.StatusCode === 6000) {
        console.log(app_data.data.title);
        setNote(app_data.data);
        setTitle(app_data.data.title);
        setBody(app_data.data.body);
      }
    });
  };

  const editNotes = () => {
    const formData = new FormData();

    if (note.name !== title) {
      formData.append("title", title);
    }

    if (note.body !== body) {
      formData.append("body", body);
    }

    axiosConfig.put(`edit-note/${id}/`, formData).then((response) => {
      const { app_data } = response.data;
      if (app_data.StatusCode === 6000) {
        showSuccessAlert();
      }
    });
  };

  useEffect(() => {
    fetchNotesView();
  }, []);
  return (
    <div>
      <MainContainer>
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
                    rows="4"
                    col="50"
                    placeholder="Title"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                </InputDiv>
              </TitleDiv>
              <TitleDiv>
                <Button
                  onClick={() => {
                    editNotes();
                  }}
                >
                  Submit
                </Button>
              </TitleDiv>
            </Form>
          </FormDiv>
        </Wrapper>
      </MainContainer>
    </div>
  );
};

export default NotesSinglePage;

const MainContainer = styled.div`
  width: 100%;
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
