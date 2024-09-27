import React from 'react';

export default function Button({ className, text, style }) {
    return (
        <button
            className={`inline-flex items-center justify-center bg-[#68C7AD] border-0 focus:outline-none hover:bg-[#3fa589] transition-all text-white rounded-lg text-sm sm:text-sm md:text-base 2xl:text-lg text-center relative overflow-hidden font-bold ${className}`}
            style={style}
        >
            {text}
            <div className="w-[33px] h-[33px] sm:w-[38px] sm:h-[38px] md:w-[40px] md:h-[45px] lg:w-[40px] lg:h-[48px] xl:w-[40px] xl:h-[48px] 2xl:w-[45px] 2xl:h-[50px] rounded-full bg-[#FFDC60] absolute left-[-20px] z-0"></div>

        </button>
    );
}
