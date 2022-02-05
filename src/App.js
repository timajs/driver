import Main from './container/Home/Main-page/main';
import Footer from './container/Home/footer-page/footer';
import NavBar from './container/Home/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Outlet />
    </div>
    // <>
    // <NavBar></NavBar>
    // <Outlet />
    // <div className="main-img">
    // <Main></Main>
    // </div>
    // <Footer></Footer>
    // </>
  );
}

export default App;
