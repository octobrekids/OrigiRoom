import React from "react";
import AdminNavbar from "./AdminNavbar";
import UserNavbar from "./UserNavbar";
import User from "./data/User";

export default function Navbar() {
  const alreadyLogin = User.getAuth();
  return <div>{alreadyLogin ? <AdminNavbar /> : <UserNavbar />}</div>;
}
