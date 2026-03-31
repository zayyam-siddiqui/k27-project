// import React from 'react'
// import Video from './Video'

// const HomeHeroText = () => {
//     return (
//         <div className='text-white font-[font1] text-center pt-2'>
//             <div className='uppercase text-[9.5vw] leading-[8.9vw] flex items-center justify-center '>The spark for</div>
//             <div className='rounded-full overflow-hidden uppercase text-[9.5vw] leading-[8.9vw] flex items-center justify-center '>
//                 all
//                <div className='h-[8vw] w-[17vw] rounded-full overflow-hidden -mt-3 '>
//                     <Video/>
//                 </div>
//                 things
//             </div>
//             <div className='uppercase text-[9.5vw] leading-[8.9vw] flex items-center justify-center '>creative</div>
//         </div>
//     )
// }

// export default HomeHeroText

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Video from "./Video";

const HomeHeroText = () => {
    const heroContainerRef = useRef(null);

    useGSAP(
        () => {
            // Text animation
            gsap.fromTo(
                ".heroLine",
                { y: "-100%", opacity: 0 },
                {
                    y: "0%",
                    opacity: 1,
                    duration: 0.8,
                    delay: 1.5,
                    stagger: 0.15,
                    ease: "power3.out",
                }
            );

            // Oval animation (FIXED)
            gsap.fromTo(
                ".movingOval ellipse",
                { strokeDasharray: 100, strokeDashoffset: 300 },
                {
                    strokeDashoffset: 100,
                    duration: 1,
                    repeat: -3,
                    ease: "power1.inOut",
                }
            );
        },
        { scope: heroContainerRef }
    );

    return (
        <div ref={heroContainerRef} className="font-[font1] text-center pt-5">
            <div className="overflow-hidden">
                <div className="heroLine text-[9.2vw] uppercase leading-[8vw] flex items-center justify-center">
                    The spark for
                </div>
            </div>

            <div className="overflow-hidden">
                <div className="heroLine rounded-full overflow-hidden text-[9.2vw] uppercase leading-[8vw] flex items-start justify-center">
                    all
                    <div className="h-[7vw] w-[16vw] -mt-2.5pt-5 rounded-full overflow-hidden">
                        <Video />
                    </div>
                    things
                </div>
            </div>

            <div className="heroLine text-[9.2vw] uppercase leading-[8vw] flex items-center justify-center">
                <span className="circleWrap relative inline-block px-4">
                    créativité{" "}
                    <svg
                        className="movingOval absolute inset-0 w-full h-full"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        <ellipse
                            cx="50"
                            cy="50"
                            rx="48"
                            ry="46"
                            fill="none"            // ❗ remove black fill
                            stroke="#D3FD50"         // or any color
                            strokeWidth="1.5"
                        />
                    </svg>
                </span>
            </div>
        </div>
    );
};

export default HomeHeroText;