"use client";


import React from 'react'
import { ToastContainer , toast } from "react-toastify";
import Link from "next/link";
import axios from "axios";
import  { AxiosError } from "axios";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import Button from "../components/Button";

// type details = {
//     name: string;
//     email: string;
//     password: string | number;
// }

export default function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });



const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

 
  if (!formData.name || !formData.email || !formData.password) {
    toast.error("Please fill all fields");
  
  }

//   try {
//     const response = await axios.post("/api/auth", formData);
//     toast.success(response.data.message);

  
//     setFormData({
//       name: "",
//       email: "",
//       password: "",
//     });

//   } catch (error: unknown) {
//     toast.error(
//       error?.response?.data?.message || "Failed to register user"
//     );
//   }



try {
  const response = await axios.post("/api/auth", formData);

  toast.success(response.data.message);

  setFormData({
    name: "",
    email: "",
    password: "",
  });

} catch (error: unknown) {
  if (axios.isAxiosError(error)) {
    const message =
      error.response?.data?.message || "Failed to register user";

    toast.error(message);
  } else {
    toast.error("Something went wrong");
  }
}

 };







 return(
  <>
   <ToastContainer theme="dark" />
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">register to Your Account</h2>
            <form className="space-y-6" onSubmit={handlesubmit}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                
                <Button  text="register"  type="submit" />
            </form>
         <Link
  href="/Auth/login"
  className="text-sm text-gray-600 hover:text-gray-900 mt-4 block text-center"
>
  Already have an account?{" "}
  <span className="text-blue-600 hover:text-blue-700 font-medium">
    Login
  </span>
</Link>
        </div>
   </div>
    </>
  );
}