import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import "./Addtotrash.css";
var garbagebags=0;
function Addtotrash() {
  let navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const AddGarbage = () => {
    if (cartCount < 4) {
      setCartCount((prevCount) => prevCount + 1);
    } else {
      alert("You can add only four bags at max");
    }
  };

  const Decrement = () => {
    if (cartCount > 0) {
      setCartCount((prevCount) => prevCount - 1);
    } else {
      alert("No more items to remove");
    }
  };
 
  const show = function(id) {
    document.getElementById(id).style.display = 'block';
}
const hide = function(id){
  document.getElementById(id).style.display='none';
}
 

  const sendData = () => {
    garbagebags += cartCount;
    let path="/ReqStatus"
    // abhinav send this data to the database and store it along with the user data whichever the fkin way you want
    alert("Thank you Your Req is being Processed");
    navigate(path);
  };

  return (
    <div className="addtotrash">
      <h2 className="heady">Click the button to add garbage bags</h2>
      <div className="Increment">
        <AddBoxIcon id="increasey" onClick={AddGarbage} />
      </div>
      <div className="cartfunctionality">
        <div class="red-circle">{cartCount}</div>
        <DeleteIcon id="trash" onClick={() => show("adding")} />
        <div className="adding" id="adding">
          <div className="heading">
            <h3>Request Summary</h3>
            <CloseIcon id="closse" onClick={()=> hide("adding")} />
          </div>
          <div className="orderdetails">
            <p>Number of Bags: {cartCount}</p>
            <RemoveCircleIcon id="sub" onClick={Decrement} />
          </div>

          <button id="button" type="submit" onClick={sendData}>
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}
export { garbagebags };
export default Addtotrash ;
