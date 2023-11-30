import React from 'react'
import "./req.css"
function Req(props) {
  return (
    <div>
      <div className="req">
      <div>
      <h3>Pincode : {props.pincode}</h3>
      <h5>Total no of bags : {props.bagcount}</h5>
      </div>
            
            <select id="workers"><option value="unassigned">Unassigned</option>
              <option value="worker1">Worker 1</option>
              <option value="worker2">Worker 2</option>
              <option value="worker3">Worker 3</option>
            </select>
          </div>
    </div>
  )
}

export default Req
