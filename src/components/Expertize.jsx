import React from 'react';

export default function Expertise() {
    const expertiseItems = [
        {
            title: "UI UX Design",
            description: "Experienced designers on our team are dedicated to making sure you succeed. We offer a smart interface and best user experience that best fits your customers by utilizing our expertise and abiding by international standards.",
        },
        {
            title: "Mobile App Development",
            description: "We specialize in crafting high-performance mobile apps with rich features tailored to meet your customers' needs. Our team leverages the latest technologies to deliver innovative and scalable solutions.",
        },
        {
            title: "WordPress Website Development",
            description: "Creating bespoke WordPress websites that not only attract attention but also perform flawlessly. Let us bring your vision to life with our expert development services.",
        },
        {
            title: "Custom Software Development",
            description: "We specialize in custom software development, creating tailored solutions that offer unmatched performance and efficiency. Our team delivers high-quality, scalable solutions designed to meet your unique needs.",
        },
        {
            title: "Mern Stack Development",
            description: "We specialize in MERN stack development, crafting scalable, fast, and high-performance web applications using MongoDB, Express.js, React.js, and Node.js. Our team is experienced in delivering exceptional and customized solutions for your digital needs.",
        },
        {
            title: "QA & Testing",
            description: "Ensuring top-notch quality with meticulous testing at every step, including bug fixes and bug-free code delivery. We use technologies like Selenium, Appium, and TestRail to ensure performance, scalability, and reliability in all our software solutions.",
        },
        {
            title: "UI UX Design Kits",
            description: "Create stunning user interface designs for your projects with premium UI/UX design kits and solutions. Elevate your applications with custom designs and high-quality templates designed for exceptional user experiences.",
        },
        {
            title: "WordPress Plugins and Themes",
            description: "Explore premium WordPress plugins and themes at Stacklords, designed to enhance your site’s functionality while improving its visual aesthetics. Bring your website’s design effortlessly to life.",
        },
    ];

    return (
        <>
            <section className="container mx-auto px-4 lg:px-20 flex flex-col justify-center items-center relative mt-8">
                {/* Section Heading */}
                <div className="text-center text-white my-12 font-light text-4xl lg:text-[48px] px-4 lg:px-60">
                    From Idea to Completion, we bring Full-Stack Expertise
                </div>

                {/* Expertise Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
                    {expertiseItems.map((item, index) => (
                        <div key={index} className="bg-[#1e1e2d] p-6 rounded-lg shadow-lg flex flex-col justify-between">
                            
                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-4 text-center">{item.title}</h3>
                            
                            {/* Description */}
                            <p className="text-sm font-light mb-6 text-center">
                                {item.description}
                            </p>
                            
                            {/* Box-like icon */}
                            <div className="flex justify-center items-center bg-[#2f2f42] text-2xl text-white h-16 w-16 rounded-lg mx-auto">
                                {index + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
