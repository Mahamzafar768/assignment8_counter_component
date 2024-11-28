'use client'
import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1);
  const decrement = () => count > 0 && setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <>
    <div className="h-screen flex flex-col items-center justify-center py-2 bg-gray-400">
      <h1 className="text-3xl font-bold">Counter Using Next Js</h1>
      <h2 className="text-2xl font-bold my-4">{count}</h2>
      <div className="flex items-center my-4 gap-7">
      
        <button className="bg-gray-500 p-2 rounded-md w-36 text-white hover:bg-gray-900 text-2xl " onClick={decrement}>Decrement</button>
        <button className="bg-gray-700 p-2 rounded-md w-36 text-white hover:bg-gray-800 text-2xl " onClick={reset}>Reset</button>
        
        <button className="bg-gray-900 p-2 rounded-md w-36 text-white hover:bg-gray-500 text-2xl " onClick={increment}>Increment</button>
      </div>
    </div>
    </>
  );
}
