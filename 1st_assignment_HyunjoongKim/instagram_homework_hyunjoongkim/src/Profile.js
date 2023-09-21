import React from "react";
import styled from "styled-components";

function Profile() {
    return(
        <Row2>
            <Column1>
                <ProfileImage src = {process.env.PUBLIC_URL + '/profile.jpg'} alt = '프로필 이미지' /> 
            </Column1>
            <Column2>
                <InnerRow1>
                    <NickName>
                        bbin_guuuu
                    </NickName>
                    <ButtonProfile>프로필 편집</ButtonProfile>
                    <OptionIcon src = {process.env.PUBLIC_URL + '/option.svg'} alt = '프로필 이미지' />
                </InnerRow1>
                
                <InnerRow2>
                    안녕하세요
                </InnerRow2>
                
                <InnerRow3>
                    안녕하세요
                </InnerRow3>
            </Column2>
        </Row2>
    );
}

const Row2 = styled.div `
    padding-top: 2.5em;           //상 내부 여백 설정
    display: flex;              //display를 flex로 함으로서 내용을 가로정렬
    border-bottom: 1px solid #DBDBDB;
    width: 60%;
    align-items: center;        //포함된 내용을 세로 중앙정렬
    margin: 0 auto;             //프로파일 컴포넌트 중앙정렬
`;
// Column을 두개로 나눠 사진을 왼쪽에 이름, 팔로워 수, 그리고 프로필 메세지를 오른쪽에 배치
const Column1 = styled.div `
    display: absolute;
    width: 10%;
    margin-left: 10%;
    padding-bottom: 2.5em;
`;

const Column2 = styled.div `
    display: absolute;
    margin-left: 20%;
    padding-bottom: 3em;
`;
// 두 번째 column에 3줄의 flex display를 가진 row 생성
const InnerRow1 = styled.div `
    display: flex;
`;

const InnerRow2 = styled.div `
    display: flex;
`;

const InnerRow3 = styled.div `
    display: flex;
`;

const ProfileImage = styled.img `   //메뉴 아이콘 옆에 위치한 동그란 프로필 사진 설정 및 배치
    width: 17vh;
    height: 17vh;
    border-radius: 50%;
`;

const ButtonProfile = styled.button `  //프로필 편집 버튼 생성
    font-size: 14px;   
    padding: 5px 10px;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 4px;
    border: 1px #DBDBDB solid;
    position: relative;
    left: 5%;
`;

const OptionIcon = styled.img `
    bottom: 10%;
    position: relative;
    left: 5%;
    bottom: 6px;
`;

const NickName = styled.div `
    font-size: 25px;
`;

export default Profile;