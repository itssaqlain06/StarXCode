import React, { useState, useEffect } from 'react';
import Border from '../shared/Border';

export default function RoadMap() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 640);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <section className="mt-10">
                <h2 className="text-center text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-normal mb-12 text-white">Our Road Map</h2>
            </section>

            {isSmallScreen ? (
                <img src="roadMap-l.png" alt="Small Roadmap" className="w-full object-center" />
            ) : (
                <img src="Roadmap.png" alt="Large Roadmap" className="w-full object-center" />
            )}

            <Border />
        </>
    );
}
