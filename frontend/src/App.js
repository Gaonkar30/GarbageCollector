import './App.css';
import HowtoUsepg from './Pages/HowtoUsepg';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/loginpg'
import TheTeampg from './Pages/TheTeampg'
import { Route, Routes } from 'react-router-dom';
import UserTeam from './Pages/UserTeam'
import UserHowtoUsepg from './Pages/UserHowToUse'

import UserPage from './Pages/UserPage';
import AddGarbage from './Pages/AddGarbage';
import UserMainPg from './Pages/UserMainPg';
import OrderStatuspg from './Pages/OrderStatuspg'
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/signin' element={<LoginPage/>}/>
          <Route path='/howtouse' element={<HowtoUsepg/>}/>
          <Route path='/team' element={<TheTeampg/>}/>
          <Route path='/user' element={<UserPage/>}/>
          <Route path='/Userteam' element={<UserTeam/>}/>
          <Route path='/UserHowtoUse' element={<UserHowtoUsepg/>}/>
          <Route path='/AddGarbage' element={<AddGarbage/>}/>
          <Route path='/ReqStatus' element={<OrderStatuspg/>}/>
        </Routes>
        {/* <UserPage/> */}
        {/* <UserMainPg/> */}
    </div>
  );
}

export default App;