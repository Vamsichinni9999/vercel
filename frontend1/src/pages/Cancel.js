import React from "react";
import { Link } from "react-router-dom";
import 'tailwindcss/tailwind.css';

const Cancel = () => {
    return (
        <div className="bg-red-500 flex items-center justify-center h-screen">
            <div className="text-center">
                <svg className="w-20 h-20 mx-auto mb-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" className="text-red-900" />
                    <path d="M15 9l-6 6M9 9l6 6" className="cancel-mark text-white" />
                </svg>
                <h1 className="text-white text-2xl font-semibold">Payment Cancelled</h1>
                <Link to={"/cart"} className=" px-2 mt-7 border-2 border-red-600 rounded font-semibold text-white hover:to-red-700">go to cart</Link>
            </div>
            <style>{`
                @keyframes cancelmark {
                    0% {
                        stroke-dashoffset: 60;
                    }
                    100% {
                        stroke-dashoffset: 0;
                    }
                }
                .cancel-mark {
                    stroke-dasharray: 60;
                    stroke-dashoffset: 60;
                    animation: cancelmark 0.5s ease-in-out forwards;
                }
            `}</style>
        </div>
    );
}

export default Cancel;
