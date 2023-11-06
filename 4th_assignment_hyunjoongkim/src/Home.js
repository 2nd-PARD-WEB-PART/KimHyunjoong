import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import HomeContext from "./HomeContext";
import { useMediaQuery } from "react-responsive";

function Home() {
  // Context를 사용하여 App.js에 정의한 provider의 value들을 전역 상태로 관리
  const {
    likeStatus,
    setLikeStatus,
    likeCount,
    setLikeCount,
    commentsList,
    setCommentsList,
    profileData,
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

  //Media Query 사용
  //450이하는 모바일 버전
  //750까지는 태블릿 버전
  //750이상은 데스크탑 버전
  const isMobile = useMediaQuery({ maxWidth: 450 });
  const isTablet = useMediaQuery({ minWidth: 750 });

  return (
    <div>
      {/*3항 연산자를 활용한 MediaQuery 적용하여 반응형 페이지 성공*/}
      {isMobile ? (
        <div>
          <MobileMainRow>
            {/*상단에 위치한 로고와 메뉴 아이콘, 그리고 프로필 아이콘을 배치*/}
            <MobileLogoDiv>
              <img
                src={process.env.PUBLIC_URL + "/MobileLogo.svg"}
                alt="인스타그램 로고"
                width="20vw"
                onClick={home}
              />
            </MobileLogoDiv>
            <MobileSearch>검색</MobileSearch>
            <MobileMenuDiv>
              <MobileActivityButton>
                <img
                  src={process.env.PUBLIC_URL + "/ActivityFeed.svg"}
                  alt="메뉴 버튼 이미지"
                  width="17vh"
                />
              </MobileActivityButton>
            </MobileMenuDiv>
          </MobileMainRow>
          <MobileMain>
            <MobileRow2>
              <MobileInnerRow1>
                <MobilePostMain>
                  <img
                    src={process.env.PUBLIC_URL + "/circle.png"}
                    alt="원형"
                    width="8%"
                  />
                  <MobileShyboy
                    src={process.env.PUBLIC_URL + "/supershy.png"}
                    alt="원형"
                    width="4.7%"
                  />
                  <MobilePostNickName>supershyNewJeans</MobilePostNickName>
                </MobilePostMain>
                <MobileMoreDiv>
                  <img
                    src={process.env.PUBLIC_URL + "/More.png"}
                    alt="More Icon"
                    width="90%"
                  />
                </MobileMoreDiv>
              </MobileInnerRow1>
              <MobileInnerRow2>
                <img
                  src={process.env.PUBLIC_URL + "/Photo.jpeg"}
                  alt="포스트 사진"
                  width="99.5%"
                />
              </MobileInnerRow2>
              <MobileInnerRow3>
                <MobileLeftIcon>
                  <MobileLike
                    src={
                      process.env.PUBLIC_URL +
                      (likeStatus ? "/RedLike.png" : "/Like.png")
                    }
                    alt="좋아요 아이콘"
                    onClick={handleLikeClick}
                  />
                  <MobileComment
                    src={process.env.PUBLIC_URL + "/Comment.png"}
                    alt="댓글 아이콘"
                    width="10%"
                  />
                  <MobileSharePosts
                    src={process.env.PUBLIC_URL + "/SharePosts.png"}
                    alt="공유 아이콘"
                    width="10%"
                  />
                </MobileLeftIcon>
                <MobileRightIcon>
                  <MobileSave
                    src={process.env.PUBLIC_URL + "/Save.png"}
                    alt="저장 아이콘"
                    width="10%"
                  />
                </MobileRightIcon>
              </MobileInnerRow3>
              <MobileInnerRow4>{`좋아요 ${likeCount}개`}</MobileInnerRow4>
              <MobileInnerRow5>
                <MobileCommentTable>
                  <tbody>
                    {/* 사용자가 추가한 댓글 출력 */}
                    {commentsList.map((item, index) => (
                      <tr key={index}>
                        <td>{profileData.nickname}</td>{" "}
                        {/* 프로필 닉네임 출력 */}
                        <td>{item}</td> {/* 해당 댓글 내용 출력 */}
                      </tr>
                    ))}
                  </tbody>
                  <MobileTime>1 HOUR AGO</MobileTime>
                </MobileCommentTable>
              </MobileInnerRow5>
              <MobileInnerRow6>
                <MobileForm onSubmit={handleCommentSubmit}>
                  <MobileCommentDiv>
                    <MobileEmoji
                      src={process.env.PUBLIC_URL + "/Emoji.png"}
                      alt="이모티콘"
                      width="8%"
                    />
                    <MobileCommentInput
                      type="text"
                      value={comment}
                      onChange={handleCommentChange}
                      placeholder="댓글 달기..."
                    />
                  </MobileCommentDiv>
                  <MobilePostButton type="submit">게시</MobilePostButton>
                </MobileForm>
              </MobileInnerRow6>
            </MobileRow2>
          </MobileMain>
          <MobileLowRow>
            {/*하단에 위치한 메뉴 아이콘과 프로필 아이콘을 배치*/}
            <div>
              <MobileHomeButton>
                <img
                  src={process.env.PUBLIC_URL + "/home.svg"}
                  alt="홈 로고"
                  width="17vw"
                  onClick={home}
                />
              </MobileHomeButton>
            </div>
            <MobileLow>
              <img
                src={process.env.PUBLIC_URL + "/NewPosts.svg"}
                alt="메뉴 버튼 이미지"
                width="18vh"
              />
            </MobileLow>
            <MobileMenuDiv>
              <MobileProfileImage
                src={
                  profileData.profileImg ||
                  process.env.PUBLIC_URL + "/profile.jpg"
                }
                alt="프로필 이미지"
                onClick={profile}
              />
            </MobileMenuDiv>
          </MobileLowRow>
        </div>
      ) : isTablet ? (
        <div>
          {" "}
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
                  profileData.profileImg ||
                  process.env.PUBLIC_URL + "/profile.jpg"
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
                  profileData.profileImg ||
                  process.env.PUBLIC_URL + "/profile.jpg"
                }
                alt="프로필 이미지"
              />
              <NickName>{profileData.nickname}</NickName>
            </Row1>
            <Row2>
              <InnerRow1>
                <PostMain>
                  <img
                    src={process.env.PUBLIC_URL + "/circle.png"}
                    alt="원형"
                    width="8%"
                  />
                  <Shyboy
                    src={process.env.PUBLIC_URL + "/supershy.png"}
                    alt="원형"
                    width="2.2%"
                  />
                  <PostNickName>supershyNewJeans</PostNickName>
                </PostMain>
                <MoreDiv>
                  <img
                    src={process.env.PUBLIC_URL + "/More.png"}
                    alt="More Icon"
                    width="90%"
                  />
                </MoreDiv>
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
                        <td>{profileData.nickname}</td>{" "}
                        {/* 프로필 닉네임 출력 */}
                        <td>{item}</td> {/* 해당 댓글 내용 출력 */}
                      </tr>
                    ))}
                  </tbody>
                  <Time>1 HOUR AGO</Time>
                </CommentTable>
              </InnerRow5>
              <InnerRow6>
                <Form onSubmit={handleCommentSubmit}>
                  <Emoji
                    src={process.env.PUBLIC_URL + "/Emoji.png"}
                    alt="이모티콘"
                    width="7%"
                    height="7%"
                  />
                  <CommentInput
                    type="text"
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="댓글 달기..."
                  />
                  <PostButton type="submit">게시</PostButton>
                </Form>
              </InnerRow6>
            </Row2>
          </Main>
        </div>
      ) : (
        <div>
          <TabletMainRow>
            {/*상단에 위치한 로고와 메뉴 아이콘, 그리고 프로필 아이콘을 배치*/}
            <TabletLogoDiv>
              <img
                src={process.env.PUBLIC_URL + "/Logo.svg"}
                alt="인스타그램 로고"
                width="100vw"
                onClick={home}
              />
            </TabletLogoDiv>
            <TabletMenuDiv>
              <TabletHomeButton>
                <img
                  src={process.env.PUBLIC_URL + "/home.svg"}
                  alt="메뉴 버튼 이미지"
                  width="17vh"
                  onClick={home}
                />
              </TabletHomeButton>
              <TabletNewButton>
                <img
                  src={process.env.PUBLIC_URL + "/NewPosts.svg"}
                  alt="메뉴 버튼 이미지"
                  width="17vh"
                />
              </TabletNewButton>
              <TabletActivityButton>
                <img
                  src={process.env.PUBLIC_URL + "/ActivityFeed.svg"}
                  alt="메뉴 버튼 이미지"
                  width="17vh"
                />
              </TabletActivityButton>
              <TabletProfileImage
                src={
                  profileData.profileImg ||
                  process.env.PUBLIC_URL + "/profile.jpg"
                }
                alt="프로필 이미지"
                onClick={profile}
              />
            </TabletMenuDiv>
          </TabletMainRow>
          <TabletMain>
            <TabletRow2>
              <TabletInnerRow1>
                <TabletPostMain>
                  <img
                    src={process.env.PUBLIC_URL + "/circle.png"}
                    alt="원형"
                    width="8%"
                  />
                  <TabletShyboy
                    src={process.env.PUBLIC_URL + "/supershy.png"}
                    alt="원형"
                    width="3.5%"
                  />
                  <TabletPostNickName>supershyNewJeans</TabletPostNickName>
                </TabletPostMain>
                <TabletMoreDiv>
                  <img
                    src={process.env.PUBLIC_URL + "/More.png"}
                    alt="More Icon"
                    width="90%"
                  />
                </TabletMoreDiv>
              </TabletInnerRow1>
              <TabletInnerRow2>
                <img
                  src={process.env.PUBLIC_URL + "/Photo.jpeg"}
                  alt="포스트 사진"
                  width="99.5%"
                />
              </TabletInnerRow2>
              <TabletInnerRow3>
                <TabletLeftIcon>
                  <TabletLike
                    src={
                      process.env.PUBLIC_URL +
                      (likeStatus ? "/RedLike.png" : "/Like.png")
                    }
                    alt="좋아요 아이콘"
                    onClick={handleLikeClick}
                  />
                  <TabletComment
                    src={process.env.PUBLIC_URL + "/Comment.png"}
                    alt="댓글 아이콘"
                    width="10%"
                  />
                  <TabletSharePosts
                    src={process.env.PUBLIC_URL + "/SharePosts.png"}
                    alt="공유 아이콘"
                    width="10%"
                  />
                </TabletLeftIcon>
                <TabletRightIcon>
                  <TabletSave
                    src={process.env.PUBLIC_URL + "/Save.png"}
                    alt="저장 아이콘"
                    width="10%"
                  />
                </TabletRightIcon>
              </TabletInnerRow3>
              <TabletInnerRow4>{`좋아요 ${likeCount}개`}</TabletInnerRow4>
              <TabletInnerRow5>
                <TabletCommentTable>
                  <tbody>
                    {/* 사용자가 추가한 댓글 출력 */}
                    {commentsList.map((item, index) => (
                      <tr key={index}>
                        <td>{profileData.nickname}</td>{" "}
                        {/* 프로필 닉네임 출력 */}
                        <td>{item}</td> {/* 해당 댓글 내용 출력 */}
                      </tr>
                    ))}
                  </tbody>
                  <TabletTime>1 HOUR AGO</TabletTime>
                </TabletCommentTable>
              </TabletInnerRow5>
              <TabletInnerRow6>
                <TabletForm onSubmit={handleCommentSubmit}>
                  <TabletEmoji
                    src={process.env.PUBLIC_URL + "/Emoji.png"}
                    alt="이모티콘"
                    width="7%"
                  />
                  <TabletCommentInput
                    type="text"
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="댓글 달기..."
                  />
                  <TabletPostButton type="submit">게시</TabletPostButton>
                </TabletForm>
              </TabletInnerRow6>
            </TabletRow2>
          </TabletMain>
        </div>
      )}
    </div>
  );
}

const MobileMainRow = styled.div`
  padding-top: 0.5em; //상 내부 여백 설정
  display: flex; //display를 flex로 함으로서 내용을 가로정렬
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
  align-items: center; //포함된 내용을 세로 중앙정렬
`;
const MobileMenuDiv = styled.div`
  //메뉴 아이콘 오른쪽 정렬 및 여백 조절
  padding-top: 0.4em;
  padding-bottom: 0.3em;
  position: absolute; //메뉴 아이콘을 absolute로 변경하여 인스타그램 로고 아이콘과 같은 비율로 오른쪽으로부터 간격 띄움
  right: 27%;
`;
const MobileLogoDiv = styled.div`
  //인스타그램 로고 아이콘 왼쪽정렬 및 여백 조절
  padding-top: 0.4em;
  padding-bottom: 0.3em;
  margin-left: 10%;
  height: auto;
  cursor: pointer;
`;
const MobileHomeButton = styled.button`
  //인스타그램 로고 아이콘 왼쪽정렬 및 여백 조절
  padding-top: 0.4em;
  padding-bottom: 0.3em;
  margin-left: 10%;
  height: auto;
  cursor: pointer;
  background-color: white;
  border: solid white;
`;

const MobileActivityButton = styled.button`
  //액티비티 버튼
  background-color: white;
  border: solid white;
  margin-left: 250%;
`;
const MobileProfileImage = styled.img`
  //메뉴 아이콘 옆에 위치한 동그란 프로필 사진 설정 및 배치
  width: 1.5em;
  height: 1.5em;
  border-radius: 22px;
  cursor: pointer;
  margin-left: 450%;
`;

const MobileSearch = styled.div`
  display: flex;
  width: 10%;
  padding: 4px 72px 4px 71px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: 1px solid var(--Border-Color, #dbdbdb);
  background: #efefef;
  margin-left: 15%;
  color: #8e8e8e;
`;

const MobileLow = styled.div`
  padding: 4px 72px 4px 71px;
  margin-left: 20%;
  align-items: center;
  border-radius: 3px;
  color: #8e8e8e;
`;

const MobileMain = styled.div`
  display: block;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10%;
  margin-bottom: 9%;
  height: 700px;
`;

const MobileRow2 = styled.div`
  display: block;
  width: 100%;
  padding-bottom: 10px;
  border: 1px #dbdbdb solid;
`;
const MobileInnerRow1 = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  border-bottom: 1px #dbdbdb solid;
`;

const MobilePostMain = styled.div`
  display: flex;
  padding-left: 3%;
  font-weight: 500;
  font-size: 14px;
  width: 90%;
`;

const MobileMoreDiv = styled.div`
  padding-top: 1%;
  justify-content: right;
`;

const MobileInnerRow2 = styled.div`
  display: flex;
  overflow: hidden;
  margin-top: 0.3%;
  justify-content: center;
`;
const MobileInnerRow3 = styled.div`
  display: flex;
  margin-top: 3%;
  margin-left: 3%;
  margin-right: 3%;
`;
const MobileInnerRow4 = styled.div`
  margin-left: 3%;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  margin-top: 3%;
  font-weight: 500;
  font-size: 14px;
`;
const MobileInnerRow5 = styled.div`
  display: flex;
  padding-left: 2.5%;
  font-weight: 500;
  font-size: 14px;
  margin-top: 4%;
  border-bottom: 1px #dbdbdb solid;
`;
const MobileInnerRow6 = styled.div`
  padding-left: 2.5%;
  font-weight: 500;
  font-size: 14px;
  padding-top: 3%;
  display: flex;
  align-items: center;
`;

const MobileShyboy = styled.img`
  position: absolute;
  margin-left: 0.5%;
  margin-top: 0.5%;
`;

const MobilePostNickName = styled.div`
  margin-left: 5%;
  margin-top: 2%;
`;

const MobileLike = styled.img`
  margin-right: 5%;
  cursor: pointer;
`;
const MobileComment = styled.img`
  margin-right: 5%;
`;
const MobileSharePosts = styled.img``;
const MobileSave = styled.img`
  margin-right: 3%;
`;

const MobileLeftIcon = styled.div`
  width: 50%;
  display: flex;
`;
const MobileRightIcon = styled.div`
  width: 50%;
  display: flex;
  justify-content: right;
`;
const MobileCommentTable = styled.table`
  td {
    padding-right: 25px; // 셀 안쪽 여백 설정
  }
`;
const MobileTime = styled.div`
  color: var(--Gray, #8e8e8e);
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  margin-top: 5%;
`;

const MobileEmoji = styled.img`
  margin-right: 5%;
`;

const MobileCommentInput = styled.input`
  height: 30px;
  width: 80%;
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
  }
`;

const MobilePostButton = styled.button`
  color: #0095f6;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  height: 30px;
  width: 20%;
  cursor: pointer;
  background-color: white;
  border: none;
`;

//화면 밑의 navbar
const MobileLowRow = styled.button`
  padding-top: 0.5em; //상 내부 여백 설정
  display: flex; //display를 flex로 함으로서 내용을 가로정렬
  background-color: white;
  border-top: 1px solid #dbdbdb;
  border-left: 1px solid white;
  border-right: 1px solid white;
  border-bottom: 1px solid white;
  width: 100%;
  align-items: center; //포함된 내용을 세로 중앙정렬
  bottom: 0;
  position: sticky;
`;

const MobileCommentDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const MobileForm = styled.form`
  display: flex;
  align-items: end;
  width: 100%;
`;

const TabletMainRow = styled.div`
  padding-top: 0.5em; //상 내부 여백 설정
  display: flex; //display를 flex로 함으로서 내용을 가로정렬
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
  align-items: center; //포함된 내용을 세로 중앙정렬
`;
const TabletMenuDiv = styled.div`
  //메뉴 아이콘 오른쪽 정렬 및 여백 조절
  padding-top: 0.4em;
  padding-bottom: 0.3em;
  height: auto;
  position: absolute; //메뉴 아이콘을 absolute로 변경하여 인스타그램 로고 아이콘과 같은 비율로 오른쪽으로부터 간격 띄움
  right: 5%;
`;
const TabletLogoDiv = styled.div`
  //인스타그램 로고 아이콘 왼쪽정렬 및 여백 조절
  padding-top: 0.4em;
  padding-bottom: 0.3em;
  margin-left: 20%;
  height: auto;
  cursor: pointer;
`;

const TabletHomeButton = styled.button`
  //홈버튼
  bottom: 37%;
  position: relative;
  background-color: white;
  border: solid white;
  cursor: pointer;
`;
const TabletNewButton = styled.button`
  //새로운 포스트 버튼
  bottom: 37%;
  position: relative;
  background-color: white;
  border: solid white;
`;
const TabletActivityButton = styled.button`
  //액티비티 버튼
  bottom: 37%;
  position: relative;
  background-color: white;
  border: solid white;
`;
const TabletProfileImage = styled.img`
  //메뉴 아이콘 옆에 위치한 동그란 프로필 사진 설정 및 배치
  width: 1.1em;
  height: 1.1em;
  bottom: 31%;
  margin-left: 7px;
  margin-right: 120px;
  border-radius: 22px;
  cursor: pointer;
`;

const TabletMain = styled.div`
  display: block;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 10%;
  height: 700px;
`;

const TabletRow2 = styled.div`
  display: block;
  width: 100%;
  padding-bottom: 10px;
  border: 1px #dbdbdb solid;
  margin: 0 auto;
`;
const TabletInnerRow1 = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  border-bottom: 1px #dbdbdb solid;
`;

const TabletPostMain = styled.div`
  display: flex;
  padding-left: 3%;
  font-weight: 500;
  font-size: 14px;
  width: 90%;
`;

const TabletMoreDiv = styled.div`
  padding-top: 1%;
  justify-content: right;
`;

const TabletInnerRow2 = styled.div`
  display: flex;
  overflow: hidden;
  margin-top: 0.3%;
  justify-content: center;
`;
const TabletInnerRow3 = styled.div`
  display: flex;
  margin-top: 3%;
  margin-left: 3%;
  margin-right: 3%;
`;
const TabletInnerRow4 = styled.div`
  margin-left: 3%;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  margin-top: 3%;
  font-weight: 500;
  font-size: 14px;
`;
const TabletInnerRow5 = styled.div`
  display: flex;
  padding-left: 2.5%;
  font-weight: 500;
  font-size: 14px;
  margin-top: 4%;
  border-bottom: 1px #dbdbdb solid;
`;
const TabletInnerRow6 = styled.div`
  padding-left: 2.5%;
  font-weight: 500;
  font-size: 14px;
  padding-top: 3%;
  display: flex;
  align-items: center;
`;

const TabletShyboy = styled.img`
  position: absolute;
  margin-left: 0.4%;
  margin-top: 0.35%;
`;

const TabletPostNickName = styled.div`
  margin-left: 5%;
  margin-top: 2%;
`;

const TabletLike = styled.img`
  margin-right: 5%;
  cursor: pointer;
`;
const TabletComment = styled.img`
  margin-right: 5%;
`;
const TabletSharePosts = styled.img``;
const TabletSave = styled.img`
  margin-right: 3%;
`;

const TabletLeftIcon = styled.div`
  width: 50%;
  display: flex;
`;
const TabletRightIcon = styled.div`
  width: 50%;
  display: flex;
  justify-content: right;
`;
const TabletCommentTable = styled.table`
  td {
    padding-right: 25px; // 셀 안쪽 여백 설정
  }
`;
const TabletTime = styled.div`
  color: var(--Gray, #8e8e8e);
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  margin-top: 5%;
`;

const TabletEmoji = styled.img`
  margin-right: 5%;
`;

const TabletCommentInput = styled.input`
  width: 80%;
  height: 30px;
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
  }
`;

const TabletPostButton = styled.button`
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

const TabletForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
`;

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
  margin-left: 7%;
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
  align-items: center;
  border-bottom: 1px #dbdbdb solid;
`;

const PostMain = styled.div`
  display: flex;
  padding-left: 3%;
  font-weight: 500;
  font-size: 14px;
  width: 90%;
`;

const MoreDiv = styled.div`
  padding-top: 1%;
  justify-content: right;
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
  margin-left: 0.28%;
  margin-top: 0.24%;
`;

const PostNickName = styled.div`
  margin-left: 5%;
  margin-top: 2%;
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
  width: 80%;
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

const Form = styled.form`
  display: flex;
  width: 100%;
  align-items: center;
`;

export default Home;
