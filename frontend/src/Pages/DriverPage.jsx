import React from 'react'
import "./driverpage.css"
import DriverHeader from '../components/DriverHeader'
import BUody from '../components/bodyuser'
import HelloUser from '../components/HelloUser'
function DriverPage() {
  return (
    <div className='driverPage'>
    <div className='driverHeader'>
    <DriverHeader/>
    </div>
    <div className='bodyDriver'>
    <HelloUser/>
        <BUody/>
    </div>
     
    </div>
  )
}

export default DriverPage
