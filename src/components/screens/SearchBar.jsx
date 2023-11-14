import React, { useState } from "react";
import styled from "styled-components";

const SearchBar = ({ fetchListNotes, setSearchQuery }) => {
  return (
    <div>
      <MainContainer>
        <ContentBar>
          <Form>
            <Search
              type="text"
              placeholder="Search here..."
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form>
        </ContentBar>
      </MainContainer>
    </div>
  );
};

export default SearchBar;

const MainContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #000;
`;
const ContentBar = styled.div`
  width: 80%;
`;
const Form = styled.form`
  display: flex;
`;
const Search = styled.input`
  width: 100%;
  padding: 4px;
`;
const SearchButton = styled.button`
  width: 100px;
  padding: 3px;
  background-color: aqua;
  border: none;
`;
