'use client'
import {  useRouter } from 'next/navigation';
import {useEffect} from 'react';
import { useSelector } from 'react-redux';
import ProfileForm from '../admin/profile/page'

export default function page(){ 
    const { user, isAuthenticated } = useSelector((state) => state.user);
    const router = useRouter();
    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/admin/login');
        }
    }, [user, router]);

    if(!user){
        return <><h1>...Loading</h1></>
    }
    return <ProfileForm></ProfileForm> 
       
}

