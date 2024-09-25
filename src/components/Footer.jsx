import React from 'react'
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export default function Footer() {
    return (
        <>
            <footer className="bg-main mt-20">
                <div className="container py-12 mx-auto">
                    <div className="flex flex-wrap md:justify-between justify-center">
                        <div className="w-full md:w-60 text-left text-white mb-10 md:mb-0">
                            <a className="flex font-medium items-center">
                                <img src="starXCode.png" alt="StarXCodes Logo" className='h-[60px] w-[60px]' />
                                <span className="ml-3 text-3xl">StarXCodes</span>
                            </a>
                            <p className="my-4 text-sm font-extralight leading-[150%]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <div className="mt-2">
                                <span className="flex gap-4">
                                    <a className="cursor-pointer">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="cursor-pointer">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </a>
                                    <a className="cursor-pointer">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="cursor-pointer">
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                        </div>

                        <div className="w-full md:w-60 text-white mb-10 md:mb-0 md:pl-10">
                            <h2 className="font-normal text-white tracking-widest text-2xl mb-4 leading-[150%]">Useful Links</h2>
                            <nav className="list-none space-y-2">
                                <li>
                                    <a className="text-[#BFBFBF] cursor-pointer font-light text-sm">Home</a>
                                </li>
                                <li>
                                    <a className="text-[#BFBFBF] cursor-pointer font-light text-sm">Services</a>
                                </li>
                                <li>
                                    <a className="text-[#BFBFBF] cursor-pointer font-light text-sm">Portfolio</a>
                                </li>
                                <li>
                                    <a className="text-[#BFBFBF] cursor-pointer font-light text-sm">Team</a>
                                </li>
                                <li>
                                    <a className="text-[#BFBFBF] cursor-pointer font-light text-sm">Roadmap</a>
                                </li>
                                <li>
                                    <a className="text-[#BFBFBF] cursor-pointer font-light text-sm">UI Kits</a>
                                </li>
                                <li>
                                    <a className="text-[#BFBFBF] cursor-pointer font-light text-sm">Contact Us</a>
                                </li>
                            </nav>
                        </div>

                        <div className="w-full md:w-60 text-white mb-10 md:mb-0">
                            <h2 className="font-normal text-white tracking-widest text-2xl mb-4 leading-[150%]">Feature Services</h2>
                            <nav className="list-none space-y-2">
                                <li>
                                    <a className="text-[#BFBFBF] cursor-pointer font-light text-sm">UI UX Design</a>
                                </li>
                                <li>
                                    <a className="text-[#BFBFBF] cursor-pointer font-light text-sm">Web Development</a>
                                </li>
                                <li>
                                    <a className="text-[#BFBFBF] cursor-pointer font-light text-sm">Mobile Development</a>
                                </li>
                                <li>
                                    <a className="text-[#BFBFBF] cursor-pointer font-light text-sm">MVP Builder</a>
                                </li>
                            </nav>
                        </div>

                        <div className="w-full md:w-60 text-white">
                            <h2 className="font-normal text-white tracking-widest text-2xl mb-4 leading-[150%]">Contact Us</h2>
                            <nav className="list-none space-y-4">
                                <li className="flex items-center gap-2">
                                    <FiPhone />
                                    <a className="cursor-pointer text-[#BFBFBF] font-light text-sm">+923040181228</a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <MdOutlineEmail />
                                    <a className="cursor-pointer text-[#BFBFBF] font-light text-sm">itssaqlain06@gmail.com</a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <IoLocationOutline />
                                    <a className="cursor-pointer text-[#BFBFBF] font-light text-sm">Okara, Punjab, Pakistan</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <img src="hr-line.png" alt="Rainbow" className='m-auto' />
                <div className="text-center text-[#BFBFBF] text-sm font-semibold leading-[150%] py-10">
                    Copyright © {new Date().getFullYear()} All Rights Reserved. Starxcodes
                </div>
            </footer>
        </>
    )
}
