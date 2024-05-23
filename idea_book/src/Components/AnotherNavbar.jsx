import React from 'react'
import { Link } from 'react-router-dom'
function AnotherNavbar() {
  return (
    <nav>
        <ul>
            <li><Link to={"/Homepage"}>Home</Link></li>
            <li><Link to={"/Friendpage"}>Find Friend</Link></li>
            <li><Link to={"/Notificationpage"}>Notification</Link></li>
            <li><Link to={"/Profilepage"}>Profile</Link></li>
            <li><Link to={"/Settingpage"}>Setting</Link></li>
        </ul>
    </nav>
  )
}

export default AnotherNavbar