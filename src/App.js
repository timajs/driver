import MainNavBar from './container/Home/MainNavBar/MainNavBar';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainNavBar/>
      <Outlet />
    </div>
  );
}

export default App;
