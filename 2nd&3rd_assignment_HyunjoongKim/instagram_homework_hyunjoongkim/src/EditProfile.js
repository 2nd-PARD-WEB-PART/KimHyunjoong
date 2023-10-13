import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  const gotoEditProfile = () => {
    navigate("/EditProfile");
  };
  return (
    <div>
      <Row1>
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
            src={process.env.PUBLIC_URL + "/profile.jpg"}
            alt="프로필 이미지"
            onClick={gotoEditProfile}
          />
        </MenuDiv>
      </Row1>
      <Main>
        <Column1>
          <InnerRow1>
            <EditButton>프로필 편집</EditButton>
            <PasswordButton>비밀번호 변경</PasswordButton>
          </InnerRow1>
          <InnerRow2>asdfjksadlfj</InnerRow2>
        </Column1>
        <Column2>ㅁㄴㅇ러ㅓㅁㄴ아ㅣ;러ㅏㅣ;ㅁㄴ어</Column2>
      </Main>
    </div>
  );
}
const Row1 = styled.div`
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

const Main = styled.div`
  display: flex;
  background-color: black;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 5%;
  height: 200px;
`;

const Column1 = styled.div`
  //1열
  display: block;
  background-color: red;
  width: 20%;
`;

const Column2 = styled.div`
  //2열
  background-color: blue;
  width: 80%;
`;

const InnerRow1 = styled.div`
  //프로필 편집 비밀번호 변경 버튼
  background-color: skyblue;
`;

const InnerRow2 = styled.div`
  //Meta 설명
  background-color: purple;
`;

const EditButton = styled.button`
  display: block;
  cursor: pointer;
`;

const PasswordButton = styled.button`
  display: block;
  cursor: pointer;
`;

export default EditProfile;
