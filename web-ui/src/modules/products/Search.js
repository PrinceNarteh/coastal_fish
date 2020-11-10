import React from "react";
import styled from "styled-components";

const Search = () => {
  return (
    <Styled>
      <div className="search-box">
        <form>
          <input type="search" placeholder="Search for fish..." />
          <button type="submit">search</button>
        </form>
      </div>
    </Styled>
  );
};

const Styled = styled.div`
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;

  .search-box {
    border: 0.2rem solid #ccc;
    border-radius: 5rem;
    width: 30rem;
    padding: 0.5rem 1rem;
    color: #555;
  }

  form {
    width: 100%;
    display: flex;
  }

  input {
    border: none;
    outline: none;
    flex-grow: 2;
    font-size: 1.5rem;
  }

  button {
    background-color: teal;
    border: none;
    color: white;
    padding: 0.8rem 2rem;
    border-radius: 2rem;
    cursor: pointer;
  }
`;

export default Search;
