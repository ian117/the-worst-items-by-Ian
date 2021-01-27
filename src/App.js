import './App.css';
import Profile from './components/Profile';
import Expectiation from './components/Expectiation';
import Hobbies from './components/Hobbies';
import Interest from './components/Interest';
import Learn from './components/Learn';
import { propTypes } from 'react-bootstrap/esm/Image';

function App() {
{/* Profile */}
const name = "Ian Vass"
const country = "México"
const age = 20;
{/* Learn */}
const learn1P = "Backend Haha"
const learn2P = "A lot of Math"
const learn3P = "The basic´s of cybersecurity (KhaliLinux? xD)"
{/* Interest */}
const interest1p = "VideoGames"
const interest2p = "Excercise"
const interest3p = "Anime and Manga (Kinda surprise right?)"
const interest4p = "Rap, Metal, Symphony, Sometimes Pop and NarcoCorridos (Mexican Joke)"
const interest5p = "A lot of Things"
{/* Hobbies */}
const hobbies1P = "I think i put my hobbies in Interest HAHAHA, In this moment learn things, but i do a lot of stuff"
{/* Expectation */}
const expectation1p = "In this moment, i just want to learn the basics, i know is my job to focus in one thing (in my case Backend hehe)"

  return (
    <div className="App">
      <div className="d-flex flex-wrap">
        <Profile name={name} country={country} age={age}/>
        <Learn firstP={learn1P} secondP={learn2P} thirdP={learn3P}/>
        <Expectiation firstP={expectation1p}/>
        <Hobbies firstP={hobbies1P}/>
        <Interest firstP={interest1p} secondP={interest2p} thirdP={interest3p} fourP={interest4p} fifthP={interest5p}/>
      </div>
    </div>
  );
}

export default App;
