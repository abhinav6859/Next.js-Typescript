"use client";

import { useState } from 'react';
import Counter from './interfaces';
import Link from "next/link";



const Navbar = () => {
 
  return (
    <div className="flex py-3 flex-wrap justify-around bg-white shadow-md dark:bg-gray-800">
      <h1 className="text-xl font-semibold">Keeper</h1>
      <ul className="flex gap-[40px] text-md font-medium">
        <li className="hover:text-blue-500 cursor-pointer">Home</li>
        <li className="hover:text-blue-500 cursor-pointer">product</li>
        <li className="hover:text-blue-500 cursor-pointer">About</li>
        <li className="hover:text-blue-500 cursor-pointer">Contact</li>
      
      </ul>
      <ul>
        <li>
        <Link href="/login" className="hover:text-blue-500 cursor-pointer">Login</Link>
        </li>
      </ul>
     <Counter />
    </div>
  )
}

export default Navbar
