
import "./Header.css";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Head,
} from "./NavbarElements";

function Header() {
  return (
    <div className="fa">
      <>
        <Nav className="bar">
          <Bars />
          
          <NavLink to='/' ><DeleteSweepIcon className="icon"/><Head className="title">GarbageManager</Head></NavLink>
          <NavMenu className="links">
            <NavLink to="/howtouse">HowtoUse</NavLink>
            <NavLink to="/team" activeStyle>
              The Team
            </NavLink>

            

          </NavMenu>
          <div className="buttons"><NavBtn>
            <NavBtnLink to="/signup">Sign Up</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn></div>
          
        </Nav>
      </>
    </div>
  );
}

export default Header;
