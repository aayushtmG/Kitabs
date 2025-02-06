'use client'
import React from 'react'
import SideBar from '@/components/(dashboard)/Sidebar'
import ReduxProvider from './ReduxProvider'
import NotifierProvider from '@/context/NotifierContext';
import { useSelector } from 'react-redux';

function AdminDashboard({children}) {
  const {isAuthenticated } = useSelector(state=> state.user);
  return <NotifierProvider>
    <div className="flex min-h-screen">
     {isAuthenticated &&  <SideBar></SideBar>}
          <div className='w-full '>
          {children}
          </div>
      </div>
    </NotifierProvider>
}

export default AdminDashboard
