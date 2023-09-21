import React from "react";
import styled from "styled-components";

function Profile() {
    return(
        <Row2>
            안녕하세요
        </Row2>
    );
}

const Row2 = styled.div `
    padding-top: 2.5em;           //상 내부 여백 설정
    display: flex;              //display를 flex로 함으로서 내용을 가로정렬
    border-bottom: 1px solid #DBDBDB;
    width: 100%;
    align-items: center;        //포함된 내용을 세로 중앙정렬
`;

const InnerRow1 = styled.div `

`;

const InnerRow2 = styled.div `

`;

const InnerRow3 = styled.div `

`;

export default Profile;