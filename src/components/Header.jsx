import React from 'react'
import Button from '../shared/Button'

export default function Header() {
    return (
        <header className="text-gray-400 body-font px-10">
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

                <Button text='Contact Us' />
            </div>
        </header>
    )
}
