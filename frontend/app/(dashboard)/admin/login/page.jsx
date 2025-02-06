'use client'
import Login from "@/components/Login"
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux"

const page = () => {
  const {isAuthenticated} = useSelector(state => state.user);
  const router = useRouter();
  if(isAuthenticated){
   router.push('/admin'); 
  }
  return <Login />
}


export default page
