'use client';
import Login from '@/components/Auth/Login'
import AdminDashboard from '@/components/Dashboard/AdminDashboard'
import EmployeeDashboard from '@/components/Dashboard/EmployeeDashboard'
import ClearStorage from '@/other/ClearStorage'
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';
import React, { use, useContext, useEffect, useState } from 'react' // FIX: remove 'use' import, keep only useState
import { AuthContext } from '@/context/AuthProvider';
import { get } from 'http';

const page = () => {

  const handleLogin = (email, password) => {
    if(email == 'admin@gm.com' && password == '123') {
      console.log("Login successful as Admin");
      alert("Login successful as Admin");
    }
    else if(email == 'employee@gm.com' && password == '123') {
  console.log("Login successful as Employee");
 alert("Login successful as Employee");
      // Redirect to Employee Dashboard or perform any other action
    }
    else {
      
      alert("Invalid credentials");
    }
  }

  
const [user, setUser] = useState(null)


  return (
    <>
     {!user ? <Login  handleLogin ={handleLogin} /> : ''}
      {/*<EmployeeDashboard />*/}
      {/* <AdminDashboard />     */}
      {/* <ClearStorage /> */}
    </>
  )
}

export default page