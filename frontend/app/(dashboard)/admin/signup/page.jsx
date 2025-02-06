'use client'
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux"
import Signup from '@/components/Signup'

const page = () => {
  const {isAuthenticated} = useSelector(state => state.user);
  const router = useRouter();
  if(isAuthenticated){
   router.push('/admin'); 
  }
  return <Signup></Signup>
}
export default page