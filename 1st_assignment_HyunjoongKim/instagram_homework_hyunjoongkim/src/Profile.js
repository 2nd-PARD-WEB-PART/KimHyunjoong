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
                    안녕하세요
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

const Column1 = styled.div `
    display: absolute;
    width: 10%;
    margin-left: 10%;
    padding-bottom: 2.5em;
`;

const Column2 = styled.div `
    display: absolute;
    margin-left: 70%;
    padding-bottom: 3em;
`;

const InnerRow1 = styled.div `
    position: block;
`;

const InnerRow2 = styled.div `
    position: block;
`;

const InnerRow3 = styled.div `
    position: block;
`;

const ProfileImage = styled.img `   //메뉴 아이콘 옆에 위치한 동그란 프로필 사진 설정 및 배치
    width: 17vh;
    height: 17vh;
    border-radius: 50%;
`;

export default Profile;