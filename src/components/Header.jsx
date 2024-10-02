import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import Button from '../shared/Button';

export default function Header() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) {
                setIsMobile(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        if (window.innerWidth <= 1024) {
            setIsMobile((prev) => !prev);
        }
    };

    const closeMenu = () => {
        setIsMobile(false);
    };

    const scrollToSection = (id, offset = 40) => {
        const section = document.getElementById(id);
        if (section) {
            const headerHeight = document.querySelector('header').offsetHeight;

            const scrollPosition = section.offsetTop - headerHeight - offset;

            window.scrollTo({
                top: scrollPosition >= 0 ? scrollPosition : 0,
                behavior: 'smooth'
            });
            closeMenu();
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-[#08071a]">
            <div className="bg-main lg:px-3">
                <div className="text-gray-400 body-font flex flex-wrap items-center justify-between p-5">
                    <div className="flex items-center w-full lg:w-auto justify-between">
                        <a className="flex title-font items-center text-white cursor-pointer" onClick={() => scrollToSection('header')}>
                            <img
                                src="starXCode.png"
                                className='h-[32px] w-[32px] lg:h-[45px] lg:w-[45px] xl:h-[60px] xl:w-[60px]'
                                alt="Star X Code Logo"
                            />
                            <span className="ml-3 text-2xl lg:text-3xl xl:text-5xl">StarXCodes</span>
                        </a>

                        <div className="lg:hidden">
                            <RxHamburgerMenu className="text-3xl text-white" onClick={toggleMenu} />
                        </div>
                    </div>

                    <nav className="hidden lg:flex flex-wrap items-center text-base justify-center text-white font-semibold text-[16px] lg:ml-auto">
                        <a onClick={() => scrollToSection('header')} className="cursor-pointer hover:text-[#68C7AD] transition-all mr-5">Home</a>
                        <a onClick={() => scrollToSection('expertize')} className="cursor-pointer hover:text-[#68C7AD] transition-all mr-5">Services</a>
                        <a onClick={() => scrollToSection('projects')} className="cursor-pointer hover:text-[#68C7AD] transition-all mr-5">Portfolio</a>
                        <a onClick={() => scrollToSection('team')} className="cursor-pointer hover:text-[#68C7AD] transition-all mr-5">Team</a>
                        <a onClick={() => scrollToSection('roadmap')} className="cursor-pointer hover:text-[#68C7AD] transition-all mr-5">Roadmap</a>
                        <a onClick={() => scrollToSection('ui-kits')} className="cursor-pointer hover:text-[#68C7AD] transition-all mr-5">UI Kits</a>
                        <Button className="py-2 px-5 sm:py-3 sm:px-10 md:py-4 md:px-12" text="Contact Us" style={{ boxShadow: "0px 0px 50px 0px rgba(255,255,255,0.3)" }} onClick={() => scrollToSection('contact')} />
                    </nav>
                </div>

                {window.innerWidth <= 1024 && (
                    <div
                        className={`navbar-menu fixed inset-0 z-50 border-r overflow-y-auto transform transition-transform duration-300 ease-in-out ${isMobile ? 'translate-x-0' : '-translate-x-full'
                            }`}
                    >
                        <nav className="relative flex flex-col p-6 bg-[#08071a] h-screen">
                            <div className="flex items-center mb-8">
                                <a className="mr-auto cursor-pointer" onClick={() => scrollToSection('header')}>
                                    <span className="flex items-center text-white">
                                        <img
                                            src="starXCode.png"
                                            className='h-[32px] w-[32px]'
                                            alt="Star X Code Logo"
                                        />
                                        <span className="ml-3 text-2xl">StarXCodes</span>
                                    </span>
                                </a>

                                <button className="navbar-close" onClick={closeMenu}>
                                    <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <ul>
                                <li className="mb-1">
                                    <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-[#68C7AD] hover:text-[#FFDC60] rounded cursor-pointer" onClick={() => scrollToSection('header')}>Home</a>
                                </li>
                                <li className="mb-1">
                                    <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-[#68C7AD] hover:text-[#FFDC60] rounded cursor-pointer" onClick={() => scrollToSection('expertize')}>Services</a>
                                </li>
                                <li className="mb-1">
                                    <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-[#68C7AD] hover:text-[#FFDC60] rounded cursor-pointer" onClick={() => scrollToSection('projects')}>Portfolio</a>
                                </li>
                                <li className="mb-1">
                                    <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-[#68C7AD] hover:text-[#FFDC60] rounded cursor-pointer" onClick={() => scrollToSection('team')}>Team</a>
                                </li>
                                <li className="mb-1">
                                    <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-[#68C7AD] hover:text-[#FFDC60] rounded cursor-pointer" onClick={() => scrollToSection('roadmap')}>Roadmap</a>
                                </li>
                                <li className="mb-1">
                                    <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-[#68C7AD] hover:text-[#FFDC60] rounded cursor-pointer" onClick={() => scrollToSection('ui-kits')}>UI Kits</a>
                                </li>
                            </ul>

                            <div className="mt-auto">
                                <div className="pt-6">
                                    <Button className="mb-10 py-2 px-5 sm:py-3 sm:px-10 md:py-4 md:px-12" text="Contact Us" style={{ boxShadow: "0px 0px 50px 0px rgba(255,255,255,0.3)", width: "100%" }} onClick={() => scrollToSection('contact')} />
                                </div>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
