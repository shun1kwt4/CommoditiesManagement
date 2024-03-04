import React from 'react'
import { SidebarData } from './SidebarData'
// import '/app/src/styles/Sidebar'

const Sidebar = () => {
  return (
    <div className='Sidebarmain'>
      <ul className='SidebarList'>
        {SidebarData.map((value, key) => {
          return(
            <li key={key} 
            id={window.location.pathname == value.link ? "active" : ""}
            className='row' 
            onClick={()=>{
              window.location.pathname= value.link;
            }}>
              <div className='title' id='title'>{value.title}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
