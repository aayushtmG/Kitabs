'use client'
import { useState,useContext, useEffect } from 'react';
import  Input  from '@/components/ui/Input';
import  Button  from '@/components/ui/Button';
import Avatar from '@/components/ui/Avatar' 
import { useDispatch, useSelector } from 'react-redux';
import { clearUser, setUser } from 'store/slices/userSlice';
import { useRouter } from 'next/navigation';
import Notifier from '@/components/ui/Notifier';
import { NotifierContext } from '@/context/NotifierContext';


export default function ProfileForm() {
  const {notifierMessage,notifierVisible,notify} = useContext(NotifierContext)
  const {user} = useSelector(state => state.user);
  const [formData, setFormData] = useState({
            fullName: '',
            email: '',
            username: '',
            phone:'',
            title: ''
    });
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(clearUser()); // Reset user state
    router.push('/login'); // Redirect to the login page
  };

  const handleSubmit = async (e) =>  {
    e.preventDefault();
    // Handle form submission
    const response = await fetch(`https://kitabs.onrender.com/api/users/${user._id}`,{
      method:'post',  
      headers: {
      'Content-Type': 'application/json',
    },
      body:JSON.stringify({
       fullName:formData.fullName,
       email: formData.email,
       username: formData.username 
      }) 
    })
    const result = await response.json()
    if(result.status == 'success'){
      const updatedUser = result.updatedUser      
    // Update Redux store with the new user data
    dispatch(setUser(updatedUser));
    notify('Updated Changes');
    }else{
      notify(result.message)
    }
  };


  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
    useEffect(()=>{
        setFormData({
            fullName: user.fullName || '',
            email: user.email || '',
            username: user.username || '',
            phone: user.phone  || '',
            title: 'Administrator'
          });
    },[user])
    if(!user){
return <>Not Authenticated</>
    }
  return (
 <div className="space-y-4 mx-auto w-4/5 my-8">
    {notifierMessage && <Notifier message={notifierMessage} visible={notifierVisible}/>}
      <div className="flex flex-col items-center gap-4">
      <Avatar 
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="John Doe"
      />
      <div className='text-center'>
        <h2 className="text-2xl font-bold text-gray-900">{user.fullName}</h2>
      </div>
      </div>
    <form onSubmit={handleSubmit} className="space-y-6 ">
      <Input
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
      />
      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        label="Username"
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <Input
        label="Phone"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <Input
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <div className="pt-4">
        <Button type="submit" fullWidth>
          Save Changes
        </Button>
      </div>
    </form>
      <Button onClick={handleLogout}>Logout</Button> 
    </div>
  );
}
