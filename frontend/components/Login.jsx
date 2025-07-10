'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from 'store/slices/userSlice';
import { useRouter } from 'next/navigation';

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State for error messages
    const [loading, setLoading] = useState(false); // State for button loading
    const dispatch = useDispatch();
    const { user,isAuthenticated } = useSelector((state) => state.user);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`https://kitabs.onrender.com/api/auth/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const result = await response.json();
            console.log('result',result) 
            if (result.success) {
                dispatch(setUser(result.user)); 
                console.log('Login successful!');
                router.push('/admin');
            } else {
                setError(result.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            console.error('An error occurred:', error.message);
            setError('Something went wrong. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="flex justify-center items-center h-screen">
            <div
                className="relative mx-auto w-full max-w-md bg-white px-6 py-20 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10"
            >
                <div className="w-full">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-semibold text-text-primary">Welcome</h1>
                        <p className="mt-2 text-gray-500">Sign in below to access your account</p>
                    </div>
                    <div className="mt-5">
                        {error && (
                            <div className="mb-4 text-sm text-red-500 capitalize">
                                {error}
                            </div>
                        )}
                        <form method="POST" onSubmit={handleSubmit}>
                            <div className="relative mt-6">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                    autoComplete="NA"
                                />
                                <label
                                    htmlFor="email"
                                    className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                                >
                                    Email
                                </label>
                            </div>
                            <div className="relative mt-6">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                />
                                <label
                                    htmlFor="password"
                                    className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                                >
                                    Password
                                </label>
                            </div>
                            <div className="my-6">
                                <button
                                    type="submit"
                                    className="w-full rounded-md bg-secondary border-2 border-secondary hover:bg-transparent hover:text-text-primary transition-colors px-3 py-4 text-white focus:outline-none"
                                    disabled={loading}
                                >
                                    {loading ? 'Signing in...' : 'Sign in'}
                                </button>
                            </div>
                            <p className="text-center text-sm text-gray-500">
                                Don&#x27;t have an account yet?
                                <a
                                    href="/admin/signup"
                                    className="font-semibold hover:underline focus:text-gray-800 focus:outline-none text-secondary"
                                >
                                    Sign up
                                </a>
                                .
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
