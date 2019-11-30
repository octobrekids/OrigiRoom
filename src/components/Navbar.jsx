import React from 'react'
import AdminNavbar from './AdminNavbar'
import UserNavbar from './UserNavbar'

export default function Navbar(props) {
const permission = props.permission
  return (
    <div>
      {
        permission === 'admin' ? <AdminNavbar/> : <UserNavbar/>
      }
    </div>
  )
}
