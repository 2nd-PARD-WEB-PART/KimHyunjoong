import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import HomeContext from "./HomeContext";
import axios from "axios";

function EditProfile() {
  // Context를 사용하여 App.js에 정의한 provider의 value들을 전역 상태로 관리
  const { data, setData } = useContext(HomeContext);
  const navigate = useNavigate();
  const home = () => {
    navigate("/Home");
  };

  const profile = () => {
    navigate("/");
  };

  const [isFormChanged, setIsFormChanged] = useState(false);
  const [initImgURL] = useState(data.imgURL); //초기 프로필 사진 상태 저장
  const [initName] = useState(data.name);
  const [initAge] = useState(data.age);
  const [initPart] = useState(data.part);
  const [uploadedImgURL, setUploadedImgURL] = useState(null);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    const newData = { ...data, [id]: id === "age" ? Number(value) : value };

    setIsFormChanged(
      newData.name !== initName ||
        newData.age !== initAge ||
        newData.part !== initPart ||
        newData.imgURL !== data.imgURL ||
        newData.imgURL !== initImgURL
    );
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const response = await axios.post("http://3.35.236.83/image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setUploadedImgURL(response.data);
  };

  const handleImageSelect = async (event) => {
    const file = event.target.files[0]; //선택한 파일 가져오기

    if (file) {
      const newImgURL = await uploadImage(file);

      // 새로운 imgURL로 상태를 업데이트
      setData((prevState) => ({ ...prevState, imgURL: newImgURL }));

      // imgURL이 변경되면 isFormChanged를 true로
      setIsFormChanged(newImgURL !== initImgURL);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //상태 업데이트
    const newName = event.target.elements.name.value;
    const newAge = event.target.elements.age.value;
    const newPart = event.target.elements.part.value;
    const newImg = uploadedImgURL ? uploadedImgURL : data.imgURL;

    setData((prevState) => ({
      ...prevState,
      name: newName,
      age: newAge,
      part: newPart,
      imgURL: newImg,
    }));

    const updatedData = {
      ...data,
      name: newName,
      age: newAge,
      part: newPart,
      imgURL: newImg,
    };

    const url = "http://3.35.236.83/pard/update/김현중"; //파도타는사람들 중 한 명인 김현중 사용자의 수정된 data 값 업데이트

    axios
      .patch(url, updatedData)
      .then((response) => {
        //성공하면 콘솔에 출력
        console.log("PATCH response:", response.data);
        navigate("/");
        setIsFormChanged(false);
      })
      .catch((error) => {
        // 실패하면 오류를 출력
        console.log(error);
      });
  };

  return (
    <div>
      <Row1>
        {/*상단에 위치한 로고와 메뉴 아이콘, 그리고 프로필 아이콘을 배치*/}
        <LogoDiv>
          <img
            src={process.env.PUBLIC_URL + "/Logo.svg"}
            alt="인스타그램 로고"
            width="100vw"
            onClick={home}
          />
        </LogoDiv>
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
            src={data.imgURL}
            alt="프로필 이미지"
            onClick={profile}
          />
        </MenuDiv>
      </Row1>
      <Main>
        <Column1>
          <InnerRow1>
            <EditButton>프로필 편집</EditButton>
            <PasswordButton>비밀번호 변경</PasswordButton>
          </InnerRow1>
          <InnerRow2>
            <img
              src={process.env.PUBLIC_URL + "/metaLogo.svg"}
              alt="메뉴 버튼 이미지"
              width="60px"
              height="12px"
            />
            <br></br>
            <img
              src={process.env.PUBLIC_URL + "/AccountsCenter.svg"}
              alt="메뉴 버튼 이미지"
              width="118px"
              height="16px"
            />
            <br></br>
            <img
              src={process.env.PUBLIC_URL + "/Paragraph.svg"}
              alt="메뉴 버튼 이미지"
              width="165px"
              height="80px"
            />
          </InnerRow2>
        </Column1>
        <Column2>
          <FormRow1>
            <FormImage>
              <FormProfileImage src={data.imgURL} alt="프로필 이미지" />
            </FormImage>
            <FormProfileDiv>
              <div>
                <h3>{data.name}</h3>
              </div>
              <File>
                <FileButton
                  type="file"
                  accept="image/*"
                  onChange={handleImageSelect}
                  id="fileID"
                />
                <FileButtonLabel for="fileID">
                  프로필 사진 바꾸기
                </FileButtonLabel>
              </File>
            </FormProfileDiv>
          </FormRow1>
          <FormRow2>
            <FormInnerColumn1>
              <form>
                <StyledLabel htmlFor="name">사용자 이름</StyledLabel>
                <br></br>
                <StyledLabel htmlFor="age">나이</StyledLabel>
                <br></br>
                <StyledLabel htmlFor="part">파트</StyledLabel>
              </form>
            </FormInnerColumn1>
            <FormInnerColumn2>
              <form onSubmit={handleSubmit}>
                <StyledInput
                  type="text"
                  id="name"
                  defaultValue={data.name}
                  onChange={handleInputChange}
                />
                <br></br>
                <StyledInput
                  id="age"
                  defaultValue={data.age}
                  onChange={handleInputChange}
                />
                <br></br>
                <StyledInput
                  type="text"
                  id="part"
                  defaultValue={data.part}
                  onChange={handleInputChange}
                />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <FormButton
                  type="submit"
                  isFormChanged={isFormChanged}
                  disabled={!isFormChanged}
                >
                  제출
                </FormButton>
              </form>
            </FormInnerColumn2>
          </FormRow2>
        </Column2>
      </Main>
    </div>
  );
}
const Row1 = styled.div`
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
  border-radius: 22px;
  position: absolute;
  cursor: pointer;
`;

const FormProfileImage = styled.img`
  //메뉴 아이콘 옆에 위치한 동그란 프로필 사진 설정 및 배치
  width: 3em;
  height: 3em;
  border-radius: 50%;
`;

const Main = styled.div`
  display: flex;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 5%;
  height: 700px;
`;

const Column1 = styled.div`
  //1열
  display: block;
  width: 30%;
  border-left: #efefef solid;
  height: 570px;
  border-bottom: #efefef solid;
  border-right: #efefef solid;
`;

const Column2 = styled.div`
  //2열
  width: 70%;
  height: 568.4px;
  border-top: #efefef solid;
  border-right: #efefef solid;
  border-bottom: #efefef solid;
  display: block;
`;

const InnerRow1 = styled.div`
  //프로필 편집 비밀번호 변경 버튼
  border-top: 1px #efefef solid;
  border-bottom: 1px #efefef solid;
  height: 350px;
`;

const InnerRow2 = styled.div`
  //Meta 설명
  padding-left: 15%;
  height: 150px;
  padding-top: 15%;
  display: inline-block;
`;

const EditButton = styled.button`
  display: block;
  cursor: pointer;
  width: 200px;
  height: 50px;
  border-radius: 0;
  padding-right: 35%;
  border-left: 3px black solid;
  border-top: 1px;
  border-bottom: white;
  border-right: white;
  background-color: white;
`;

const PasswordButton = styled.button`
  display: block;
  cursor: pointer;
  width: 200px;
  height: 50px;
  border-radius: 0;
  padding-right: 30%;
  border-left: white;
  border-top: white;
  border-bottom: white;
  border-right: white;
  background-color: white;
`;

const FormRow1 = styled.div`
  position: relative;
  height: 100px;
  display: flex;
`;

const FormRow2 = styled.div`
  height: 600px;
  display: flex;
`;

const FormInnerColumn1 = styled.div`
  width: 25%;
  text-align: right;
`;
const FormInnerColumn2 = styled.div`
  width: 75%;
  text-align: left;
  margin-left: 20px;
`;

const FormImage = styled.div`
  width: 25%;
  height: 100%;
  justify-content: right;
  display: flex;
  align-items: center;
  border-left: 1px #efefef solid;
`;

const FormProfileDiv = styled.div`
  width: 75%;
  height: 100%;
  display: block;
  padding-top: 25px;
  box-sizing: border-box;
  h3 {
    margin: 1px 0px;
    margin-left: 20px;
  }
`;

const File = styled.div`
  margin-left: 20px;
`;

const FileButton = styled.input`
  display: none;
`;

const FileButtonLabel = styled.label`
  cursor: pointer;
  color: #0095f6;
  font-weight: 500;
  font-size: 14px;
`;

const FormButton = styled.button`
  background-color: ${(props) =>
    props.isFormChanged ? "#0095F6" : "rgba(0, 149, 246, 0.25)"};
  color: white;
  border-radius: 4px;
  border: white;
  margin-top: 20px;
  width: 15%;
  height: 30px;
  cursor: pointer;
`;

// Label styled components
const StyledLabel = styled.label`
  display: block;
  margin-bottom: 29px;
`;

// Input styled components
const StyledInput = styled.input`
  display: block;
  border-radius: 2px;
  border: 1px #efefef solid;
  width: 70%;
  margin-bottom: 30px;
`;

export default EditProfile;
