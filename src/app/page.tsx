import General_Button from '../components/Buttons/GeneralButtons/Buttons';
import SocialButtons from '../components/Buttons/Solcial Buttons/SocialButtons';
import BackBoxCard from '../components/Cards/BackBoxCard/BackBoxCard';
import PaperCard from '../components/Cards/PaperCard/PaperCard';
import IconButtons from '../components/Buttons/IconButtons/IconButtons';
import './page.css';  

export default function Home() {

  return (
    <div className="page-container">
      <h1 className="page-title">Anas</h1>
        <General_Button backgroundColor="#4F5DE4" color="#fff" padding="10px 20px" border="1px solid #fff" href="https://www.google.com">
        إبحث عن دروسك !
      </General_Button>
      <SocialButtons backgroundColor="transparent" borderColor="#fff" />
      <BackBoxCard content={
        <div>
          <h1>Back Box Card</h1>
          <p>Back Box Card</p>
          <p>Back Box Card</p>
        </div>  
      } image="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" backgroundColor="#4F5DE4" />
      <PaperCard />
      <IconButtons backgroundColor="#4F5DE4" borderRadius="10px" width="fit-content" height="fit-content" padding="20px" icon={
        <img src="./Group.svg" alt="Icon" />
      } />
    </div>
  );
}