import './App.css';
import profileImage from './image/profile.JPG' /*이미지 불러오기 및 이름 선언*/
import instaImage from './image/instagram.png'

function App() {
  return (
    <div className="App">
      <div className='navbar'>    {/*상단에 내비게이션 바를 위치하여 페이지의 제목 입력*/}
        <div>
          현중's 자기소개
        </div>
      </div>
      <div className='container'>
        <img className='imagecenter' src={profileImage} alt='프로필사진'/> {/*이미지 넣기*/}
      </div>
      <div className='leftalign'>       {/*왼쪽에 이름과 이번학기 목표*/}
        안녕하세요 저는 김현중입니다! <br></br><br></br>
        이번학기 저의 목표는 <br></br><br></br>
        미래에 대한 뚜렷한 방향을 얻는 것입니다.
      </div>
      <div className='rightalign'>      {/*오른쪽에 좋아하는 것 3가지*/}
        좋아하는 것 3가지: <br></br><br></br>
        1. 축구 <br></br><br></br>
        2. 여행 <br></br><br></br>
        3. 사랑 <br></br><br></br>
      </div>
      <div>
        <a href="https://www.instagram.com/bbin_guuuu/" target='blank'>    {/*로고 클릭시 새창에서 인스타 페이지 이동*/}
        <img className='logo' src={instaImage} alt='인스타그램 로고'/>    {/*인스타 로고삽입*/}
        </a>
      </div>
      <div className='nameContainer'>
        bbin_guuuu<br></br><br></br>
        ! ! ! 클릭 ! ! !
      </div>
    </div>
  );
}

export default App;
