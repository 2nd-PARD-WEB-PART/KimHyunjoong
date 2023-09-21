import React from "react";
import styled from "styled-components";

function Post() {
    return(
        <Column>
            <InnerRow1>
                <PostsButton>
                <img src = {process.env.PUBLIC_URL + '/Posts.svg'} alt = '메뉴 버튼 이미지' width="20vh"/> <PostsDiv>게시물</PostsDiv>
                </PostsButton>
                <SavedButton>
                <img src = {process.env.PUBLIC_URL + '/Save.svg'} alt = '메뉴 버튼 이미지' width="20vh"/> <SavedDiv>저장됨</SavedDiv>
                </SavedButton>
                <TaggedButton>
                <img src = {process.env.PUBLIC_URL + '/Tagged.svg'} alt = '메뉴 버튼 이미지' width='20vh'/> <TaggedDiv>태그됨</TaggedDiv>
                </TaggedButton>
            </InnerRow1>
            
            <InnerRow2>      
            
            </InnerRow2>
        </Column>
    );
}

export default Post;

const Column = styled.div `
    padding-top: 2.5em;           //상 내부 여백 설정
    display: block;              //display를 block으로 함으로서 내용을 세로정렬
    width: 60%;
    align-items: center;        //포함된 내용을 세로 중앙정렬
    margin: 0 auto;             //프로파일 컴포넌트 중앙정렬
`;

const InnerRow1 = styled.div `  //게시물, 저장됨, 태그됨 버튼들을 포함한 row
    display: flex;
    position: relative;
    width: 100%;                //꽉 채운 후 중앙 정렬
    justify-content: center;
    bottom: 41px;
`;

const InnerRow2 = styled.div `  //3개의 게시물을 포함한 row

`;

const PostsButton = styled.button `   //게시물 버튼
    position: relative;
    background-color: white;
    border: solid white;
    width: 12vh;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: solid black;
`;
const SavedButton = styled.button `   //저장 버튼
    position: relative;
    background-color: white;
    border: solid white;
    width: 12vh;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: solid #DBDBDB;
`;
const TaggedButton = styled.button `   //태그 버튼
    position: relative;
    background-color: white;
    border: solid white;
    width: 12vh;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: solid #DBDBDB;
`;

const PostsDiv = styled.div `
    margin-left: 10%;
`;
const SavedDiv = styled.div `
    margin-left: 10%;
`;
const TaggedDiv = styled.div `
    margin-left: 10%;
`;