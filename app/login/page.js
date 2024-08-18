"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Hero from '../components/common/Hero';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://necessary-card-750e65ba7c.strapiapp.com/api/auth/local/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier: email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();

      localStorage.setItem('jwt', data.jwt);
      localStorage.setItem('user', JSON.stringify(data.user));

      setSuccess(true);

      setTimeout(() => {
        router.push('/talk-to-my-government'); // Redirect to the timeline page after login
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
    <Hero />
    <div className="flex flex-col md:flex-row m-4 md:m-8 lg:m-20">
      <div className="w-full md:w-1/2 bg-[#E0E21C] text-black flex flex-col items-center justify-center p-4 md:p-8">
        <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Welcome Back</h1>
  
        {error && <p className="text-red-600">{error}</p>}
        {success && <p className="text-green-600">Login successful!</p>}
  
        <form className="space-y-4 w-full max-w-md" onSubmit={handleSubmit}>
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
  
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-2 md:mb-0">
              <input
                type="checkbox"
                id="keep-logged-in"
                checked={keepLoggedIn}
                onChange={(e) => setKeepLoggedIn(e.target.checked)}
                className="h-4 w-4 text-yellow-600 focus:ring-yellow-500"
              />
              <label htmlFor="keep-logged-in" className="ml-2 text-sm">Keep me logged in</label>
            </div>
            <a href="#" className="text-red-600 hover:underline text-sm">Forgot password?</a>
          </div>
  
          <button
            type="submit"
            className="w-full py-2 px-4 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-100"
          >
            Log In
          </button>
        </form>
      </div>
  
      <div className="w-full md:w-1/2 bg-black text-[#E0E21C] flex flex-col items-center justify-center p-6 md:p-8">
        <img
          src="/kyrafrica.png"
          alt="KYR AFRICA"
          className="w-full md:w-3/4 h-auto mb-4 md:mb-6"
        />
        <img
          src="/login.png"
          alt="Login"
          className="w-full md:w-3/4 h-auto"
        />
      </div>
    </div>
  </>
  );
}