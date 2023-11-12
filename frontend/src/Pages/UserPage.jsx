import React from 'react'
import HeaderUser from "../components/HeaderUser"
import HelloUser from '../components/HelloUser'
import BUody from '../components/bodyuser'

function UserPage() {
  return (
    <div className='UserPage'>
    <div className="header">
    <HeaderUser/>
    </div>
    <div className='body'>
    <HelloUser/>
      <BUody/>
    </div>
    
   
    
    </div>
  )
}

export default UserPage
