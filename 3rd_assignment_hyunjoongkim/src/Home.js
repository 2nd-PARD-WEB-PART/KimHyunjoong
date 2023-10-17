import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Home({ profileData }) {
  const navigate = useNavigate();
  const gotoEditProfile = () => {
    navigate("/EditProfile");
  };
  const home = () => {
    navigate("/Home");
  };
  return (
    <div>
      <MainRow>
        {" "}
        {/*상단에 위치한 로고와 메뉴 아이콘, 그리고 프로필 아이콘을 배치*/}
        <LogoDiv>
          <img
            src={process.env.PUBLIC_URL + "/Logo.svg"}
            alt="인스타그램 로고"
            width="100vw"
            onClick={home}
          />
        </LogoDiv>
        <Search>검색</Search>
        <MenuDiv>
          <HomeButton>
            <img
              src={process.env.PUBLIC_URL + "/home.svg"}
              alt="메뉴 버튼 이미지"
              width="17vh"
              onClick={home}
            />
          </HomeButton>
          <NewButton>
            <img
              src={process.env.PUBLIC_URL + "/NewPosts.svg"}
              alt="메뉴 버튼 이미지"
              width="17vh"
            />
          </NewButton>
          <ActivityButton>
            <img
              src={process.env.PUBLIC_URL + "/ActivityFeed.svg"}
              alt="메뉴 버튼 이미지"
              width="17vh"
            />
          </ActivityButton>
          <ProfileImage
            src={
              profileData.profileImg || process.env.PUBLIC_URL + "/profile.jpg"
            }
            alt="프로필 이미지"
            onClick={gotoEditProfile}
          />
        </MenuDiv>
      </MainRow>
      <Main>
        <Row1>
          <ProfileImageExtra
            src={
              profileData.profileImg || process.env.PUBLIC_URL + "/profile.jpg"
            }
            alt="프로필 이미지"
          />
          <NickName>{profileData.nickname}</NickName>
        </Row1>
        <Row2>
          <InnerRow1>
            <img
              src={process.env.PUBLIC_URL + "/circle.png"}
              alt="원형"
              width="8%"
            />
            <Shyboy
              src={process.env.PUBLIC_URL + "/supershy.png"}
              alt="원형"
              width="2.4%"
            />
          </InnerRow1>
        </Row2>
      </Main>
    </div>
  );
}
const MainRow = styled.div`
  padding-top: 0.5em; //상 내부 여백 설정
  display: flex; //display를 flex로 함으로서 내용을 가로정렬
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
  align-items: center; //포함된 내용을 세로 중앙정렬
`;
const MenuDiv = styled.div`
  //메뉴 아이콘 오른쪽 정렬 및 여백 조절
  padding-top: 0.4em;
  padding-bottom: 0.3em;
  height: auto;
  position: absolute; //메뉴 아이콘을 absolute로 변경하여 인스타그램 로고 아이콘과 같은 비율로 오른쪽으로부터 간격 띄움
  right: 22%;
`;
const LogoDiv = styled.div`
  //인스타그램 로고 아이콘 왼쪽정렬 및 여백 조절
  padding-top: 0.4em;
  padding-bottom: 0.3em;
  margin-left: 20%;
  height: auto;
  cursor: pointer;
`;

const HomeButton = styled.button`
  //홈버튼
  bottom: 37%;
  position: relative;
  background-color: white;
  border: solid white;
  cursor: pointer;
`;
const NewButton = styled.button`
  //새로운 포스트 버튼
  bottom: 37%;
  position: relative;
  background-color: white;
  border: solid white;
`;
const ActivityButton = styled.button`
  //액티비티 버튼
  bottom: 37%;
  position: relative;
  background-color: white;
  border: solid white;
`;
const ProfileImage = styled.img`
  //메뉴 아이콘 옆에 위치한 동그란 프로필 사진 설정 및 배치
  width: 1.1em;
  height: 1.1em;
  bottom: 31%;
  margin-left: 7px;
  position: absolute;
  border-radius: 22px;
  cursor: pointer;
`;

const ProfileImageExtra = styled.img`
  //메뉴 아이콘 옆에 위치한 동그란 프로필 사진 설정 및 배치
  width: 3em;
  height: 3em;
  margin-left: 7px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
`;
const Search = styled.div`
  display: flex;
  width: 5%;
  padding: 4px 72px 4px 71px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: 1px solid var(--Border-Color, #dbdbdb);
  background: #efefef;
  margin-left: 13%;
  color: #8e8e8e;
`;

const NickName = styled.div`
  margin-left: 4%;
  font-size: 15px;
`;

const Main = styled.div`
  display: block;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 5%;
  height: 700px;
`;
const Row1 = styled.div`
  justify-content: right;
  display: flex;
  width: 85%;
  height: 80px;
`;
const Row2 = styled.div`
  display: block;
  width: 63%;
  height: 700px;
  border: 1px #dbdbdb solid;
`;
const InnerRow1 = styled.div`
  background-color: blue;
  display: flex;
  height: 8%;
  padding-left: 3%;
  align-items: center;
`;
const InnerRow2 = styled.div``;
const InnerRow3 = styled.div``;
const InnerRow4 = styled.div``;
const InnerRow5 = styled.div``;
const InnerRow6 = styled.div``;

const Shyboy = styled.img`
  position: absolute;
  margin-left: 0.3%;
`;

export default Home;
