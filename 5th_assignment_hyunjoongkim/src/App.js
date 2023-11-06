import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyPage from "./MyPage";
import EditProfile from "./EditProfile";
import Home from "./Home";
import HomeContext from "./HomeContext"; //생성한 Context 불러오기
import axios from "axios"; //axios를 프로젝트에 사용하기 위해 import

function App() {
  const [data, setData] = useState({});

  //useEffect를 사용하여 데이터를 가져오는 비동기 함수를 정의
  useEffect(() => {
    async function fetchData() {
      try {
        //axios를 사용하여 서버에 POST 요청 전송
        const response = await axios.get(
          "http://3.35.236.83/pard/search/김현중"
        );
        //성공일 때 서버에서 받은 데이터를 로깅
        console.log("API Response: ", response.data);
        setData(response.data.data); //상태 설정
      } catch (error) {
        //오류가 발생하면 오류 내용을 로깅
        console.log("Error fetching data: ", error);
      }
    }
    //fetchData 함수를 호출하여 데이터 가져옴
    fetchData();
  }, []); //useEffect의 의존성 배열에 'data' 추가하여 변수 변경에 반응

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
        data,
        setData,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<MyPage />} />
          <Route path="/EditProfile" element={<EditProfile />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </HomeContext.Provider>
  );
}

export default App;
