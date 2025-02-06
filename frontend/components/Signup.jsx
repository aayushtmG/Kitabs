'use client'
import { useState,useContext } from "react";
import { useRouter } from "next/navigation";
import Notifier from '../components/ui/Notifier';
import { NotifierContext } from '@/context/NotifierContext';


const Signup = ()=>{

  const {notifierMessage,notifierVisible,notify} = useContext(NotifierContext)
    const router = useRouter();
    const [error, setError] = useState(''); // State for error messages
    const [username,setUsername] = useState('');    
    const [password,setPassword] = useState('');    
    const [confirmPassword,setConfirmPassword] = useState('');
    const [email,setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const handleSubmit= async (e)=>{
        e.preventDefault();
        const response = await fetch(`https://kitabs.onrender.com/api/users/create-user`,{
        method:'POST',
        headers:{
                'Content-Type':'application/json'
            },
        body:JSON.stringify({
        username: username,
        password: password,
        passwordConfirm: confirmPassword,
        email:email,
        fullName:fullName,
        })
        })
        const result = await response.json()
        if(result.success){
            notify('User created')
            router.push('/admin/login')
        }else{

                setError(result.message ||'Something went wrong. Please try again later.' );
        }
    }
return <section className="flex justify-center items-center h-screen">
    {notifierMessage && <Notifier message={notifierMessage} visible={notifierVisible}/>}
        <div
    className="relative mx-auto w-full max-w-md bg-white px-6 py-20  shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
    <div className="w-full">
        <div className="text-center mb-10">
            <h1 className="text-3xl font-semibold text-text-primary">Lets get started</h1>
            <p className="mt-2 text-gray-500">Sign up and begin right away</p>
        </div>
        <div className="mt-5">
                        {error && (
                            <div className="mb-4 text-sm text-red-500 capitalize">
                                {error}
                            </div>
                        )}
            <form method="POST" onSubmit={handleSubmit}>
                <div className="relative mt-6">
                    <input type="text" name="fullName" id="fullName" placeholder="Full Name" value={fullName} onChange={(e)=> setFullName(e.target.value)} className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autoComplete="NA" />
                    <label htmlFor="username" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Full Name</label>
                </div>

                <div className="relative mt-6">
                    <input type="text" name="email" id="email" placeholder="enter your email" value={email} onChange={(e)=> setEmail(e.target.value)} className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autoComplete="NA" />
                    <label htmlFor="username" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email</label>
                </div>
                <div className="relative mt-6">
                    <input type="text" name="username" id="username" placeholder="Username" value={username} onChange={(e)=> setUsername(e.target.value)} className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autoComplete="NA" />
                    <label htmlFor="username" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Username</label>
                </div>
                <div className="relative mt-6">
                    <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                    <label htmlFor="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                </div>

                <div className="relative mt-6">
                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                    <label htmlFor="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Confirm Password</label>
                </div>
                <div className="my-6">
                    <button type="submit" className="w-full rounded-md bg-secondary border-2 border-secondary hover:bg-transparent hover:text-text-primary transition-colors px-3 py-4 text-white focus:outline-none">Sign Up</button>
                </div>
                <p className="text-center text-sm text-gray-500">Already have account?
                    <a href="/admin/login"
                        className="font-semibold hover:underline focus:text-gray-800 focus:outline-none text-secondary ml-2">Sign
                        In
                    </a>.
                </p>
            </form>
        </div>
    </div>
</div></section>
}

export default Signup