import General_Button from '../components/Buttons/GeneralButtons/Buttons';
import './page.css';  

export default function Home() {

  return (
    <div className="page-container">
      <h1 className="page-title">Anas</h1>
        <General_Button backgroundColor="#4F5DE4" color="#fff" padding="10px 20px" border="1px solid #fff">
        إبحث عن دروسك !
      </General_Button>
    </div>
  );
}