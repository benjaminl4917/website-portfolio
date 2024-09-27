import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <WorkExperience/>
      <Portfolio/>
      <SocialLinks/>
    </div>
  );
}

export default App;
