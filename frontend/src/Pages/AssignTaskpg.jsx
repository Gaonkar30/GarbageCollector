import React from "react";
import "./assigntask.css";
import AdminHeader from "../components/AdminHeader";
import Req from "../components/req";
function AssignTaskpg(props) {
  return (
    <div className="AssignTask">
      <div className="adminheader">
        <AdminHeader />
      </div>
      <div className="reqcollection">
      <div className="textcontent">
      <h1>Total No of Requests : {props.total}</h1>
        
      </div> 
        <div className="subreq">
        <h2><u>Current Reqests</u></h2>
          <Req pincode="560043" bagcount="55"/>
          <Req pincode="560022" bagcount="23"/>
          <Req pincode="560022" bagcount="23"/>
          <Req pincode="560022" bagcount="23"/>
          <Req pincode="560022" bagcount="23"/>
        </div>
        <button id="assign">AssignTasks</button>
      </div>
    </div>
  );
}

export default AssignTaskpg;
