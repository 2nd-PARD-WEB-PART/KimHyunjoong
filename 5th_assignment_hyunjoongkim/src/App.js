import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyPage from "./MyPage";
import EditProfile from "./EditProfile";
import Home from "./Home";
import HomeContext from "./HomeContext"; //생성한 Context 불러오기

function App() {
  const [profileData, setProfileData] = useState({
    nickname: "bbin_guuuu",
    intro: "Paypal",
    web: "https://github.com/hjkim0905",
    email: "eax9952@gmail.com",
    gender: "Male",
  });

  // likeStatus, likeCount, commentsList 초기 상태 선언
  const [likeStatus, setLikeStatus] = useState(false);
  const [likeCount, setLikeCount] = useState(1070);
  const [commentsList, setCommentsList] = useState([]);

  return (
    //좋아요 수, 댓글 값의 상태를 value로 포함한 Context Provider로 선언 및 하위 컴포넌트들 묶기
    <HomeContext.Provider
      value={{
        likeStatus,
        setLikeStatus,
        likeCount,
        setLikeCount,
        commentsList,
        setCommentsList,
        profileData,
        setProfileData,
      }}
    >
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
          <Route path="/Home" element={<Home profileData={profileData} />} />
        </Routes>
      </Router>
    </HomeContext.Provider>
  );
}

export default App;
