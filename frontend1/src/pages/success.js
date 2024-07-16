import React from "react";
import SUCCESSIMAGE from '../assest/success.gif'
import 'tailwindcss/tailwind.css';
import { Link } from "react-router-dom";

const success = () => {
    return (
        <div className="bg-green-500 flex items-center justify-center h-screen">
      <div className="text-center">
        <svg className="w-20 h-20 mx-auto mb-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" className="text-green-900"/>
          <path d="M9 12l2 2 4-4" className="checkmark text-white"/>
        </svg>
        <h1 className="text-white text-2xl font-semibold">Payment Successful</h1>
                <Link to={"/order"} className=" px-2 mt-7 border-2 border-green-600 rounded font-semibold text-white hover:to-blue-700">see order</Link>
      </div>
      <style>{`
        @keyframes checkmark {
          0% {
            stroke-dashoffset: 60;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        .checkmark {
          stroke-dasharray: 60;
          stroke-dashoffset: 60;
          animation: checkmark 0.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};


export default success;


