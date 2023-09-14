import './App.css';
import profileImage from './image/profile.png' /*이미지 불러오기 및 이름 선언*/

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
    </div>
  );
}

export default App;
