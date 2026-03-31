import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

const Agence = () => {
    gsap.registerPlugin(ScrollTrigger);

    const imageDivRef = useRef(null);
    const imageRef = useRef(null);

    const imageArray = [
        'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
    ]

    useGSAP(function () {
        gsap.to(imageDivRef.current, {
            scrollTrigger: {
                trigger: imageDivRef.current,
                markers: true,
                start: 'top 24.6%',
                end: 'top -140%',
                scrub: 1,
                markers: true,
                pin: true,
                pinSpacing: true,
                pinReparent: true,
                pinType: 'transform',
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onUpdate: (elem) => {
                    let imageIndex;

                    if (elem.progress < 1) {
                        imageIndex = Math.floor(elem.progress * imageArray.length)
                    } else {
                        imageIndex = imageArray.length - 1
                    }

                    imageRef.current.src = imageArray[imageIndex]
                }
            }
        })
    })

    return (
        <div>
            <section className='Section 1 relative py-1'>
                <div
                    ref={imageDivRef}
                    className='absolute top-[45vh] inset-shadow-violet-100 left-[29.8vw] h-[19.7vw] w-[15vw] overflow-hidden rounded-2xl'
                >
                    <img
                        ref={imageRef}
                        className='h-full w-full object-cover'
                        src='https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7'
                        alt='Team member'
                    />
                </div>

                <div className='relative font-[font2]'>
                    <div className='mt-[57vh]'>
                        <h1 className='text-center text-[20vw] leading-[17.1vw]'>
                            SEVEN7Y
                            <br />
                            TWO
                        </h1>
                    </div>

                    <div className='pl-[42%] pr-20'>
                        <p className='w-full indent-72 text-6xl'>
                            We&apos;re inquisitive and open-minded, and we make sure creativity
                            crowds out ego from every corner. A brand is a living thing, with
                            values, a personality and a story. If we ignore that, we can
                            achieve short-term success, but not influence that goes the
                            distance. We bring that perspective to every brand story we help
                            tell.
                        </p>
                    </div>
                </div>
            </section>

            <section className='Section 2 h-screen'></section>
        </div>
    )
}

export default Agence

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
// import React, { useRef } from "react";
// import ProjectFooter from "../components/common/ProjectFooter";

// const Agence = () => {
//     const imageDivRef = useRef(null);
//     const imageRef = useRef(null);
//     const imageArray = [
//         'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
//         'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
//         'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
//         'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
//         'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
//         'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
//         'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
//         'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
//         'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
//         'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
//         'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
//         'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
//         'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
//         'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
//     ];
//     gsap.registerPlugin(ScrollTrigger);
//     useGSAP(function () {
//         gsap.to(imageDivRef.current, {
//             scrollTrigger: {
//                 trigger: imageDivRef.current,
//                 start: "top top",
//                 end: "top -137%",
//                 scrub: 1,
//                 pin: true,
//                 pinSpacing: true,
//                 pinReparent: true,
//                 pinType: "transform",
//                 anticipatePin: 1,
//                 invalidateOnRefresh: true,
//                 onUpdate: (elem) => {
//                     let imageIndex;
//                     if (elem.progress < 1) {
//                         imageIndex = Math.floor(elem.progress * imageArray.length);
//                     } else {
//                         imageIndex = imageArray.length - 1;
//                     }
//                     imageRef.current.src = imageArray[imageIndex];
//                 },
//             },
//         });
//     });

//     return (
//         <div className="text-white">
//             {/* section 1 */}
//             <div className="section1 py-1 ">
//                 <div
//                     ref={imageDivRef}
//                     className="absolute top-[-20vh] left-[29.8vw] h-[19.7vw] w-[15vw] overflow-hidden rounded-2xl"
//                 >
//                     <img
//                         ref={imageRef}
//                         src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
//                         alt=""
//                         className="h-full w-full object-cover"
//                     />
//                 </div>
//                 <div className='relative font-[font2]'>
//                     <div className='mt-[57vh]'>
//                         <h1 className='text-center text-[20vw] leading-[17.1vw]'>
//                             SEVEN7Y
//                             <br />
//                             TWO
//                         </h1>
//                     </div>

//                     <div className='pl-[42%] pr-20'>
//                         <p className='w-full indent-72 text-6xl'>
//                             We&apos;re inquisitive and open-minded, and we make sure creativity
//                             crowds out ego from every corner. A brand is a living thing, with
//                             values, a personality and a story. If we ignore that, we can
//                             achieve short-term success, but not influence that goes the
//                             distance. We bring that perspective to every brand story we help
//                             tell.
//                         </p>
//                     </div>

//                 </div>
//             </div>
//             {/* section 2 */}
//             <div className="section2 h-screen w-full flex flex-col justify-center px-[13vw] gap-30 ">
//                 <div className="flex justify-between">
//                     <div className="font-[font1] text-[21px]">Expertise</div>
//                     <div className="flex flex-col justify-start items-start">
//                         <div className="font-[font1] text-[21px]">Stratégie</div>
//                         <div className="font-[font1] text-[21px]">Publicité</div>
//                         <div className="font-[font1] text-[21px]">Branding</div>
//                         <div className="font-[font1] text-[21px]">Design </div>
//                         <div className="font-[font1] text-[21px]">Contenu</div>
//                     </div>
//                     <div></div>
//                 </div>
//                 <div className="flex justify-between gap-10">
//                     <div className="font-[font1] text-[21px]">
//                         Nos projets_ naissent dans l’humilité, grandissent dans la curiosité
//                         et vivent grâce à la créativité sous toutes ses formes.
//                     </div>
//                     <div className="font-[font1] text-[21px]">
//                         Notre création_ bouillonne dans un environnement où le talent a le
//                         goût d’exploser. Où on se sent libre d’être la meilleure version de
//                         soi-même.
//                     </div>
//                     <div className="font-[font1] text-[21px]">
//                         Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage
//                         participe à bâtir une agence dont on est fiers.
//                     </div>
//                 </div>
//             </div>
//             {/* section 3 */}

//             <ProjectFooter />
//         </div>
//     );
// };

// export default Agence;