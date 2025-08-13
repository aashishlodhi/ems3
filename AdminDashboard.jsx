import AllTask from '@/other/AllTask'
import CreateTask from '@/other/CreateTask'
import Header from '@/other/Header'
import React from 'react'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
        <Header/>

        <CreateTask/>
        <AllTask/>
    </div>
  ) 
}

export default AdminDashboard