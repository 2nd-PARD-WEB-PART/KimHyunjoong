import React from "react";
import styled from 'styled-components';


function MyPage() {
    return(
        <div>
            <Row1>
                <img src = {process.env.PUBLIC_URL + '/Logo.svg'} alt = '인스타그램 로고' width = '100vh'/>
                <img src = {process.env.PUBLIC_URL + '/Menu-Button.svg'} alt = '메뉴 버튼 이미지' width = '100vh' />
            </Row1>
        </div>
    );
}
const Row1 = styled.div `
    padding: 0.25em 1em;
    display: flex;
    border: 2px solid #0077cc;
    width: 100%;
`;

export default MyPage;