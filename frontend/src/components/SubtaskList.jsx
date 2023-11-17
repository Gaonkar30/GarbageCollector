import React from 'react'
import "./Subtasks.css"
import Task from './Task'
function SubtaskList(props) {
  return (
    // when admin assigns task to the driver put the pincodes in an array and then send it here through props
    // map all the pincodes to the Task component
    <div className='subtaskdiv'>
      <Task pincode="560043"/>
    </div>
  )
}

export default SubtaskList

