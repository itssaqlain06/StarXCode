import React from 'react';

export default function Button({ text, style }) {
    return (
        <button
            className="inline-flex items-center justify-center bg-[#68C7AD] border-0 py-1 px-3 focus:outline-none hover:bg-[#3fa589] transition-all text-white rounded-xl text-base mt-4 md:mt-0 h-[53px] w-[176px] text-center relative overflow-hidden font-semibold"
            style={style}
        >
            {text}
            <div className='h-[45px] w-[41px] rounded-full bg-[#FFDC60] absolute left-[-20px] z-0'></div>
        </button>
    );
}
