import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyPage from "./MyPage";
import EditProfile from "./EditProfile";

function App() {
  const [profileData, setProfileData] = useState({
    nickname: "bbin_guuuu",
    intro: "Paypal",
    web: "https://github.com/hjkim0905",
    email: "eax9952@gmail.com",
    gender: "Male",
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyPage profileData={profileData} />} />
        <Route
          path="/EditProfile"
          element={
            <EditProfile
              profileData={profileData}
              setProfileData={setProfileData}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
