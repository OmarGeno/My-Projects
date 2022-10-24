import './App.css';
import { FetchData } from './FetchData';
import { NavBar } from './NavBar';

function App() {
  return (
    <>
      <NavBar />
      <div className='main-body'>
          <FetchData />
      </div>
    </>
  );
}

export default App;
