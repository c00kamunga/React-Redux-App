import React from "react";
import GhibliMovies from "./components/GhibliMovies";
import styled from "styled-components";


const StyledMovies = styled.div`
  border: 3px solid black;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
`;

function App() {
  return (
    <div className="App">
      <StyledMovies>
        <GhibliMovies />
      </StyledMovies>
    </div>
  );
}

export default App;
