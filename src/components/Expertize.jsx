import React from 'react';
import Button from '../shared/Button';

export default function Expertise() {
    const expertiseItems = [
        {
            title: "UI UX Design",
            description: "Experienced designers on our team are dedicated to making sure you succeed. We offer a smart interface and best user experience that best fits your customers by utilizing our expertise and abiding by international standards.",
            src: "figma-logo.png",
            height: "56px", width: "39px"
        },
        {
            title: "Mobile App Development",
            description: "We specialize in crafting high-performance mobile apps with rich features tailored to meet your customers' needs. Our team leverages the latest technologies to deliver innovative and scalable solutions.",
            src: "arrow-code-logo.png",
            height: "55px", width: "55px"
        },
        {
            title: "WordPress Website Development",
            description: "Creating bespoke WordPress websites that not only attract attention but also perform flawlessly. Let us bring your vision to life with our expert development services.",
            src: "wp-logo.png",
            height: "55px", width: "55px"
        },
        {
            title: "Custom Software Development",
            description: "We specialize in custom software development, creating tailored solutions that offer unmatched performance and efficiency. Our team delivers high-quality, scalable solutions designed to meet your unique needs.",
            src: "code-logo.png",
            height: "55px", width: "61px"
        },
        {
            title: "Mern Stack Development",
            description: "We specialize in MERN stack development, crafting scalable, fast, and high-performance web applications using MongoDB, Express.js, React.js, and Node.js. Our team is experienced in delivering exceptional and customized solutions for your digital needs.",
            src: "stack-logo.png",
            height: "55px", width: "55px"
        },
        {
            title: "QA & Testing",
            description: "Ensuring top-notch quality with meticulous testing at every step, including bug fixes and bug-free code delivery. We use technologies like Selenium, Appium, and TestRail to ensure performance, scalability, and reliability in all our software solutions.",
            src: "search-logo.png",
            height: "54px", width: "68px"
        },
        {
            title: "UI UX Design Kits",
            description: "Create stunning user interface designs for your projects with premium UI/UX design kits and solutions. Elevate your applications with custom designs and high-quality templates designed for exceptional user experiences.",
            src: "left-arrow-logo.png",
            height: "55px", width: "55px"
        },
        {
            title: "WordPress Plugins and Themes",
            description: "Explore premium WordPress plugins and themes at Stacklords, designed to enhance your site’s functionality while improving its visual aesthetics. Bring your website’s design effortlessly to life.",
            src: "left-arrow-logo.png",
            height: "55px", width: "55px"
        },
    ];

    return (
        <>
            <section className="container mx-auto flex flex-col justify-center items-center relative mt-10">
                <div className="text-center text-white my-12 font-normal text-[48px] px-60">
                    From Idea to Completion, we bring Full-Stack Expertise
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-white mb-10">
                    {expertiseItems.map((item, index) => (
                        <div key={index} className="border border-[#3f44c8] p-6 rounded-3xl flex flex-col justify-between">

                            <h3 className="text-[24px] text-white mb-4">{item.title}</h3>

                            <p className="text-[16px] font-light text-[#ADA8C3] mb-6">
                                {item.description}
                            </p>
                            <div className={`flex h-[${item.height}] w-[${item.width}]`}>
                                <img src={item.src} alt="" />
                            </div>
                        </div>
                    ))}
                </div>

                <Button text="Explore UI UX Design Kits" style={{ boxShadow: "0px 0px 50px 0px rgba(255,255,255,0.3)", width: "280px" }} />

                <img src="hr-line.png" alt="Rainbow" className='m-auto mt-20' />

            </section>
        </>
    );
}
