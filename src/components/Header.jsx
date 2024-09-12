import React from 'react'

export default function Header() {
    return (
        <header className="text-gray-400 bg-gray-800 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font items-center text-white mb-4 md:mb-0">
                    <img src="/public/starXCode.png" className='h-[60px] w-[60px]' alt="Star X Code Logo" />
                    <span className="ml-3 text-5xl">StarXCodes</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-white font-semibold text-[16px]">
                    <a className="mr-5 hover:text-white">Home</a>
                    <a className="mr-5 hover:text-white">Services</a>
                    <a className="mr-5 hover:text-white">Portfolio</a>
                    <a className="mr-5 hover:text-white">Team</a>
                    <a className="mr-5 hover:text-white">Roadmap</a>
                    <a className="mr-5 hover:text-white">UI Kits</a>
                </nav>

                <button className="inline-flex items-center justify-center bg-[#6AC6AD] border-0 py-1 px-3 focus:outline-none hover:bg-[#3fa589] transition-all text-white rounded-xl text-base mt-4 md:mt-0 h-[53px] w-[176px] text-center relative overflow-hidden font-semibold">
                    Contact Us
                    <div className='h-[45px] w-[41px] rounded-full bg-[#FFDC60] absolute left-[-20px] z-0'></div>
                </button>
            </div>
        </header>
    )
}
