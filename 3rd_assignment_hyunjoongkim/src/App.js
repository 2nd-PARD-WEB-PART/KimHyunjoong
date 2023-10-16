import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyPage from "./MyPage";
import EditProfile from "./EditProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyPage />} />
        <Route path="/EditProfile" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
