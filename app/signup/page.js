"use client";

import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false); // New state for success message
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://necessary-card-750e65ba7c.strapiapp.com/api/auth/local/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            if (!response.ok) {
                throw new Error('Signup failed');
            }

            const data = await response.json();

            localStorage.setItem('jwt', data.jwt);
            localStorage.setItem('user', JSON.stringify(data.user));

            setSuccess(true); // Set success to true to show the success message

            setTimeout(() => {
                router.push('/login');
            }, 2000); // Redirect to the dashboard after 2 seconds

        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/signupimg.png)', backgroundRepeat: 'no-repeat' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 m-4 md:m-8 lg:m-20">
          <div className="bg-[#E0E21C] text-black flex flex-col items-center justify-center p-4 md:p-8">
            <Head>
              <title>Signup</title>
              <meta name="description" content="Signup page" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
      
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">Create an Account</h1>
      
            {error && <p className="text-red-600">{error}</p>}
            {success && <p className="text-green-600">You have successfully created an account!</p>} {/* Success message */}
      
            <form className="space-y-4 w-full max-w-sm md:max-w-md" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className="block text-sm">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600"
                />
              </div>
      
              <div>
                <label htmlFor="email" className="block text-sm">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600"
                />
              </div>
      
              <div>
                <label htmlFor="password" className="block text-sm">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600"
                />
              </div>
      
              <button
                type="submit"
                className="w-full py-2 px-4 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-100"
              >
                Sign Up
              </button>
            </form>
          </div>
      
          <div className="bg-black text-[#E0E21C] flex flex-col items-center justify-center p-4 md:p-8">
            <img
              src="/kyrafrica.png"
              alt="KYR AFRICA"
              className="w-2/3 md:w-3/4 h-auto mb-4 md:mb-6"
            />
            <img
              src="/login.png"
              alt="Login"
              className="w-2/3 md:w-3/4 h-auto"
            />
          </div>
        </div>
      </div>
    );
}