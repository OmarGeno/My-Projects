import logo from './logo.svg';
import './App.css';
import { NavBar } from './NavBar';
import GameContainer from './GameContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GameContainer />  
      </header>
    </div>
  );
}

export default App;
