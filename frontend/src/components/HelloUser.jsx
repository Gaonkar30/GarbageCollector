import React from 'react'
import "./HelloUser.css"
function HelloUser(props) {
  return (
    <div className='greeting'>
      <h3 className='namey'>Hello {props.Username}</h3>
    </div>
  )
}

export default HelloUser
