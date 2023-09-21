import React from "react";
import MyPage from "./MyPage";
import Profile from "./Profile";
import styled from "styled-components";

function App() {
  return (
    <div>
    <MyPage />
    <Profile />
    </div>
  );
}

const MainPage = styled.div `
  display: block;
`;

export default App;
