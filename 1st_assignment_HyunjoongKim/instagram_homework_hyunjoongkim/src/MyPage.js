import React from "react";
import styled from 'styled-components';
import Profile from "./Profile";
import Post from "./Post";



function MyPage() {
    return(
        <div>
            <Row1>          {/*상단에 위치한 로고와 메뉴 아이콘, 그리고 프로필 아이콘을 배치*/}
                <LogoDiv>
                    <img src = {process.env.PUBLIC_URL + '/Logo.svg'} alt = '인스타그램 로고' width = '100vw'/>
                </LogoDiv>
                <MenuDiv>
                <HomeButton>
                <img src = {process.env.PUBLIC_URL + '/home.svg'} alt = '메뉴 버튼 이미지' width="17vh"/>
                </HomeButton>
                <NewButton>
                <img src = {process.env.PUBLIC_URL + '/NewPosts.svg'} alt = '메뉴 버튼 이미지' width="17vh"/>
                </NewButton>
                <ActivityButton>
                <img src = {process.env.PUBLIC_URL + '/ActivityFeed.svg'} alt = '메뉴 버튼 이미지' width='17vh'/>
                </ActivityButton>
                <ProfileImage src = {process.env.PUBLIC_URL + '/profile.jpg'} alt = '프로필 이미지' />
                </MenuDiv>
            </Row1>
            <Profile />
            <Post />
        </div>
    );
}
const Row1 = styled.div `
    padding-top: 0.5em;           //상 내부 여백 설정
    display: flex;              //display를 flex로 함으로서 내용을 가로정렬
    border-bottom: 1px solid #DBDBDB;
    width: 100%;
    align-items: center;        //포함된 내용을 세로 중앙정렬
`;
const MenuDiv = styled.div `    //메뉴 아이콘 오른쪽 정렬 및 여백 조절
    padding-top: 0.4em;
    padding-bottom: 0.3em;
    height: auto;
    position: absolute;         //메뉴 아이콘을 absolute로 변경하여 인스타그램 로고 아이콘과 같은 비율로 오른쪽으로부터 간격 띄움
    right: 22%;
    
`;
const LogoDiv = styled.div `    //인스타그램 로고 아이콘 왼쪽정렬 및 여백 조절
    padding-top: 0.4em;
    padding-bottom: 0.3em;
    margin-left: 20%;
    height: auto;
`;

const HomeButton = styled.button `   //홈버튼
    bottom: 37%;
    position: relative;
    background-color: white;
    border: solid white;
`;
const NewButton = styled.button `   //새로운 포스트 버튼
    bottom: 37%;
    position: relative;
    background-color: white;
    border: solid white;
`;
const ActivityButton = styled.button `   //액티비티 버튼
    bottom: 37%;
    position: relative;
    background-color: white;
    border: solid white;
`;
const ProfileImage = styled.img `   //메뉴 아이콘 옆에 위치한 동그란 프로필 사진 설정 및 배치
    width: 1.1em;
    height: 1.1em;
    bottom: 31%;
    margin-left: 7px;
    position: absolute;
    border-radius: 22px;
`;
export default MyPage;