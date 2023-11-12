import './App.css';
import HowtoUsepg from './Pages/HowtoUsepg';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/loginpg'
import TheTeampg from './Pages/TheTeampg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UserPage from './Pages/UserPage';
import AddGarbage from './Pages/AddGarbage';
import UserMainPg from './Pages/UserMainPg';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/signin' element={<LoginPage/>}/>
          <Route path='/howtouse' element={<HowtoUsepg/>}/>
          <Route path='/team' element={<TheTeampg/>}/>
        </Routes>
        {/* <UserPage/> */}
        {/* <UserMainPg/> */}
    </div>
  );
}

export default App;