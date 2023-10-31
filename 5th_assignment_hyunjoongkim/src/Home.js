import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import HomeContext from "./HomeContext";

function Home({ profileData }) {
  // Context를 사용하여 App.js에 정의한 provider의 value들을 전역 상태로 관리
  const {
    likeStatus,
    setLikeStatus,
    likeCount,
    setLikeCount,
    commentsList,
    setCommentsList,
  } = useContext(HomeContext);

  const navigate = useNavigate();

  const profile = () => {
    navigate("/");
  };
  const home = () => {
    navigate("/Home");
  };
  // Like 아이콘 클릭 이벤트 핸들러
  const handleLikeClick = () => {
    if (likeStatus) {
      // 이미 좋아요 상태라면,
      setLikeStatus(false);
      setLikeCount(likeCount - 1);
    } else {
      // 아직 좋아요 상태가 아니라면,
      setLikeStatus(true);
      setLikeCount(likeCount + 1);
    }
  };
  const [comment, setComment] = useState(""); // 현재 입력 중인 댓글
  //const [commentsList, setCommentsList] = useState([]); // 댓글 목록

  // 댓글 입력 이벤트 핸들러
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  // 댓글 등록 이벤트 핸들러
  const handleCommentSubmit = (event) => {
    event.preventDefault(); // form submit의 기본 동작(페이지 리로드) 방지

    if (comment !== "") {
      setCommentsList([...commentsList, comment]);
      setComment("");
    }
  };

  return (
    <div>
      <MainRow>
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
            onClick={profile}
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
            <PostNickName>supershyNewJeans</PostNickName>
          </InnerRow1>
          <InnerRow2>
            <img
              src={process.env.PUBLIC_URL + "/Photo.jpeg"}
              alt="포스트 사진"
              width="99.5%"
            />
          </InnerRow2>
          <InnerRow3>
            <LeftIcon>
              <Like
                src={
                  process.env.PUBLIC_URL +
                  (likeStatus ? "/RedLike.png" : "/Like.png")
                }
                alt="좋아요 아이콘"
                onClick={handleLikeClick}
              />
              <Comment
                src={process.env.PUBLIC_URL + "/Comment.png"}
                alt="댓글 아이콘"
                width="10%"
              />
              <SharePosts
                src={process.env.PUBLIC_URL + "/SharePosts.png"}
                alt="공유 아이콘"
                width="10%"
              />
            </LeftIcon>
            <RightIcon>
              <Save
                src={process.env.PUBLIC_URL + "/Save.png"}
                alt="저장 아이콘"
                width="10%"
              />
            </RightIcon>
          </InnerRow3>
          <InnerRow4>{`좋아요 ${likeCount}개`}</InnerRow4>
          <InnerRow5>
            <CommentTable>
              <tbody>
                {/* 사용자가 추가한 댓글 출력 */}
                {commentsList.map((item, index) => (
                  <tr key={index}>
                    <td>{profileData.nickname}</td> {/* 프로필 닉네임 출력 */}
                    <td>{item}</td> {/* 해당 댓글 내용 출력 */}
                  </tr>
                ))}
              </tbody>
              <Time>1 HOUR AGO</Time>
            </CommentTable>
          </InnerRow5>

          <InnerRow6>
            <Emoji
              src={process.env.PUBLIC_URL + "/Emoji.png"}
              alt="이모티콘"
              width="5%"
            />
            <form onSubmit={handleCommentSubmit}>
              <CommentInput
                type="text"
                value={comment}
                onChange={handleCommentChange}
                placeholder="댓글 달기..."
              />
              <PostButton type="submit">게시</PostButton>
            </form>
          </InnerRow6>
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
  font-weight: 500;
`;
const Row2 = styled.div`
  display: block;
  width: 63%;
  padding-bottom: 10px;
  border: 1px #dbdbdb solid;
`;
const InnerRow1 = styled.div`
  display: flex;
  height: 50px;
  padding-left: 3%;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  border-bottom: 1px #dbdbdb solid;
`;

const InnerRow2 = styled.div`
  display: flex;
  overflow: hidden;
  margin-top: 0.3%;
  justify-content: center;
`;
const InnerRow3 = styled.div`
  display: flex;
  margin-top: 3%;
  margin-left: 3%;
  margin-right: 3%;
`;
const InnerRow4 = styled.div`
  margin-left: 3%;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  margin-top: 3%;
  font-weight: 500;
  font-size: 14px;
`;
const InnerRow5 = styled.div`
  display: flex;
  padding-left: 2.5%;
  font-weight: 500;
  font-size: 14px;
  margin-top: 4%;
  border-bottom: 1px #dbdbdb solid;
`;
const InnerRow6 = styled.div`
  padding-left: 2.5%;
  font-weight: 500;
  font-size: 14px;
  padding-top: 3%;
  display: flex;
  align-items: center;
`;

const Shyboy = styled.img`
  position: absolute;
  margin-left: 0.3%;
`;

const PostNickName = styled.div`
  margin-left: 5%;
`;

const Like = styled.img`
  margin-right: 5%;
  cursor: pointer;
`;
const Comment = styled.img`
  margin-right: 5%;
`;
const SharePosts = styled.img``;
const Save = styled.img`
  margin-right: 3%;
`;

const LeftIcon = styled.div`
  width: 50%;
  display: flex;
`;
const RightIcon = styled.div`
  width: 50%;
  display: flex;
  justify-content: right;
`;
const CommentTable = styled.table`
  td {
    padding-right: 25px; // 셀 안쪽 여백 설정
  }
`;
const Time = styled.div`
  color: var(--Gray, #8e8e8e);
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  margin-top: 5%;
`;

const Emoji = styled.img`
  margin-right: 5%;
`;

const CommentInput = styled.input`
  width: 320px;
  height: 30px;
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
  }
`;

const PostButton = styled.button`
  color: #0095f6;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  height: 30px;
  width: 50px;
  cursor: pointer;
  background-color: white;
  border: none;
`;

export default Home;
