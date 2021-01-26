import './App.css';
import Profile from './components/Profile';
import Expectiation from './components/Expectiation';
import Hobbies from './components/Hobbies';
import Interest from './components/Interest';
import Learn from './components/Learn';

function App() {
  return (
    <div className="App">
      <div className="d-flex flex-wrap">
        <Profile/>
        <Expectiation/>
        <Hobbies/>
        <Interest/>
        <Learn/>
      </div>
    </div>
  );
}

export default App;
