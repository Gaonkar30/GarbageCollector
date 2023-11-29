import React from 'react'
import HeaderUser from "../components/HeaderUser"
import HelloUser from '../components/HelloUser'
import BUody from '../components/bodyuser'
import './userland.css'
function UserPage() {
  return (
    <div className='UserPage'>
    <div className="header">
    <HeaderUser/>
    </div>
    <div className='body'>
    <div className='greetings'> <HelloUser/></div>
   
      <BUody/>
    </div>
    
   
    
    </div>
  )
}

export default UserPage
