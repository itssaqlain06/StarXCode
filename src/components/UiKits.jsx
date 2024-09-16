import React from 'react'
import Button from '../shared/Button'

export default function UiKits() {
    return (
        <>
            <section className="my-20">
                <h2 className="text-center text-[48px] leading-[60px] font-normal mb-12 text-white">
                    UI Kits
                </h2>
                <div className="relative overflow-hidden mb-10">
                    <div className="flex space-x-8 animate-moveRight">
                        <img src="../../public/mockup-1.png" alt="Project 1" />
                        <img src="../../public/mockup-2.png" alt="Project 2" />
                        <img src="../../public/mockup-3.png" alt="Project 3" />
                        <img src="../../public/mockup-4.png" alt="Project 4" />
                    </div>
                </div>
                <div className="relative overflow-hidden mb-10">
                    <div className="flex space-x-8 animate-moveLeft">
                        <img src="../../public/mockup-5.png" alt="Project 5" />
                        <img src="../../public/mockup-6.png" alt="Project 6" />
                        <img src="../../public/mockup-7.png" alt="Project 7" />
                    </div>
                </div>
                <div className="relative overflow-hidden">
                    <div className="flex space-x-8 animate-moveRight">
                        <img src="../../public/mockup-8.png" alt="Project 8" />
                        <img src="../../public/mockup-9.png" alt="Project 9" />
                        <img src="../../public/mockup-10.png" alt="Project 10" />
                        <img src="../../public/mockup-11.png" alt="Project 11" />
                    </div>
                </div>
            </section>
            <div className="text-center mb-10">
                <Button text="View More" style={{ boxShadow: "0px 0px 50px 0px rgba(255,255,255,0.3)", width: "176px" }} />
            </div>

            <img src="../../public/hr-line.png" alt="Rainbow" className='m-auto' />
        </>
    )
}
