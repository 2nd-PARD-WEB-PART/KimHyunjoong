import React from "react";
import styled from 'styled-components';
import Profile from "./Profile";


function MyPage() {
    return(
        <div>
            <Row1>          {/*상단에 위치한 로고와 메뉴 아이콘, 그리고 프로필 아이콘을 배치*/}
                <LogoDiv>
                    <img src = {process.env.PUBLIC_URL + '/Logo.svg'} alt = '인스타그램 로고' width = '100vw'/>
                </LogoDiv>
                <MenuDiv>
                <img src = {process.env.PUBLIC_URL + '/Menu-Button.svg'} alt = '메뉴 버튼 이미지' width = '100vw' />
                <ProfileImage src = {process.env.PUBLIC_URL + '/profile.jpg'} alt = '프로필 이미지' />
                </MenuDiv>
            </Row1>
            <Profile />
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

const ProfileImage = styled.img `   //메뉴 아이콘 옆에 위치한 동그란 프로필 사진 설정 및 배치
    width: 2vh;
    height: 2vh;
    bottom: 32%;
    position: absolute;
    border-radius: 22px;
`;
export default MyPage;