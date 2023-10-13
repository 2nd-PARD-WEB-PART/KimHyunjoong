import React from "react";
import styled from "styled-components";

function Post() {
    return(
        <Column>
            <InnerRow1>
                <PostsButton>
                <img src = {process.env.PUBLIC_URL + '/Posts.svg'} alt = '게시물 버튼 이미지' width="20vh"/> <PostsDiv>게시물</PostsDiv>
                </PostsButton>
                <SavedButton>
                <img src = {process.env.PUBLIC_URL + '/Save.svg'} alt = '저장 버튼 이미지' width="20vh"/> <SavedDiv>저장됨</SavedDiv>
                </SavedButton>
                <TaggedButton>
                <img src = {process.env.PUBLIC_URL + '/Tagged.svg'} alt = '태그 버튼 이미지' width='20vh'/> <TaggedDiv>태그됨</TaggedDiv>
                </TaggedButton>
            </InnerRow1>
            
            <InnerRow2>      
                <Image1 src = {process.env.PUBLIC_URL + '/1.jpeg'} alt = '야경 이미지'/>
                <Image2 src = {process.env.PUBLIC_URL + '/2.jpeg'} alt = '경치 이미지'/>
                <Image3 src = {process.env.PUBLIC_URL + '/3.jpeg'} alt = '장관 이미지'/>
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
    height: 15px;
`;

const InnerRow2 = styled.div `  //3개의 게시물을 포함한 row
    display: flex;
    justify-content: space-between; //사진들 사이에 간격 넣기
`;

const PostsButton = styled.button `   //게시물 버튼
    position: relative;
    background-color: white;
    border: solid white;
    width: 12vh;
    padding-top: 25px;
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
    padding-top: 25px;
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
    padding-top: 25px;
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

const Image1 = styled.img `         //첫 번째 사진 설정
    width: 32%;
    height: auto;
    object-fit: cover;              //이미지가 부분적으로 잘려도 부모요소에 맞게 크롭되도록 설정
`;

const Image2 = styled.img `         //두 번째 사진 설정
    width: 32%;
    height: auto;
    object-fit: cover;
`;

const Image3 = styled.img `         //세 번째 사진 설정
    width: 32%;
    height: auto;
    object-fit: cover;
`;