 
 
 "use client";
 
 import { useState } from 'react';

 import Button from './Button';
 
 const Counter = () => {

   const [count , setcount] = useState(0);
  return(  <div>Counter</div>
//  <div className="flex py-3 flex-wrap justify-around bg-white shadow-md dark:bg-gray-800">

//  <Button text={`increase ${count}`} onClick={() => setcount(count + 1)} />
//       <p className="text-lg font-medium">Count: {count}</p>
//       <Button text={`decrease ${count}`} onClick={() => setcount(count - 1)} />
// <Button text={`reset 0`} onClick={() => setcount(0)} />
//     </div>
   )
 }

 export default Counter;