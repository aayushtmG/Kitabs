'use client'
import { Router, useRouter } from 'next/navigation';
import {useState,useEffect} from 'react';
import AdminDashboard from '../../../components/AdminDashboard'
export default function page(){ 
    const user = false;
    const router = useRouter();

  useEffect(() => {
        if (!user) {
            router.push('/admin/login'); // Redirect to the login page if not authenticated
        }
    }, [user, router]); // Run this effect whenever `user` or `router` changes

    if(!user){
        return <><h1>...Loading</h1></>
    }
    return <AdminDashboard/>
}

