"use client";

import Image from "next/image";
import React from 'react'
import { ToastContainer , toast } from "react-toastify";

import axios from "axios";
import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import Button from "../Components/Button";

type details = {
    email: string;
    password: string | number;
}

export default function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });



  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     
              
    if (!formData.email || !formData.password) {
      toast.error("Please fill all fields");
      return;
    }

    toast.success("Login Successful!");
  }

 return(
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
            <form className="space-y-6" onSubmit={handlesubmit}>
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
                <Button  text="Login" type="submit" />
            </form>
        </div>
    </div>
  );
}