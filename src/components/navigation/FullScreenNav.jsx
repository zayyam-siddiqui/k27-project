import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useContext } from "react";
import { NavbarContext } from "../../context/navContext";

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null);
  const fullScreenRef = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);

  useGSAP(() => {
    const stairs = gsap.utils.toArray(".stairing");

    if (navOpen) {
      // Show the nav container
      gsap.set(fullScreenRef.current, { display: "block" });

      const tlOpen = gsap.timeline();

      // Animate stairs opening
      tlOpen.fromTo(
        stairs,
        { height: 0 },
        {
          height: "100%",
          duration: 0.6, // Duration wapas thodi badha di taake "too fast" na lage
          stagger: {
            amount: 0.3, // Amount ko thoda increase kiya taake stairs ke beech gap "smooth" lage
            from: "end",
          },
          ease: "power3.inOut", // Expo se wapas Power3 par shift kiya for a softer flow
        },
      );
      // Cross button comes from right FIRST
      tlOpen.fromTo(
        ".crossBtn",
        {
          x: 60, // Bohat zyada (100) move karne se jumpy lagta hai, 60 is perfect
          opacity: 0,
          rotate: 15, // Halki si rotation animation ko "organic" feel deti hai
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.4, // 0.2 bohat fast tha, 0.4 isse smooth "glide" dega
          ease: "expo.out", // Fast start aur smooth slow-down ke liye best ease hai
        },
        "-=0.4", // Stairs ke khatam hone se pehle start karein taake "overlap" ho
      );
      // Animate nav links after stairs are open
      tlOpen.fromTo(
        ".link",
        {
          opacity: 0,
          rotateX: 90,
          y: 40, // Halki si upward movement smooth feel degi
          transformPerspective: 1000, // 3D rotation ko depth deta hai
        },
        {
          opacity: 1,
          rotateX: 0,
          y: 0,
          stagger: 0.1, // 0.2 se kam kiya taake links ek ke peeche ek jaldi aayen
          duration: 0.35, // Snappy duration
          ease: "expo.out", // 'expo' fast movement ko smooth banata hai
        },
        "-=0.1", // Stairs ke khatam hone se pehle hi start kar dein
      );
    } else {
      // Closing nav
      const tlClose = gsap.timeline();

      // Animate nav links out first
      tlClose.to(".link", {
        opacity: 0,
        rotateX: 90,
        stagger: 0.15,
        duration: 0.4,
      });
      // 👉 Cross slides out to right
      tlClose.to(
        ".crossBtn",
        { x: 100, opacity: 0, duration: 0.2, ease: "power2.in" },
        "-=0.2",
      );
      // Animate stairs collapsing
      tlClose.to(
        stairs,
        { height: 0, stagger: 0.15, duration: 0.5, ease: "power2.inOut" },
        "-=0.2",
      );

      // Hide the nav container after animation
      tlClose.set(fullScreenRef.current, { display: "none" });
    }
  }, [navOpen]);

  return (
    <div
      ref={fullScreenRef}
      className="fullScreenNav fixed top-0 left-0 z-50 hidden h-screen w-full overflow-hidden bg-transparent"
    >
      {/* stair animation */}
      <div className="h-screen w-full fixed ">
        <div className="h-screen w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      {/* nav and nav links */}
      <div
        ref={fullNavLinksRef}
        className="relative w-full h-screen overflow-hidden"
      >
        {/* nav */}
        <div className="navLink flex w-full justify-between items-start absolute">
          <div className="p-4 ">
            <div className="w-35">
              <svg
                className=" w-full text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 103 44"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </div>
          </div>
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            className="crossBtn crossBox h-28 w-28 relative pt-3 right-3 cursor-pointer"
          >
            <div className="crossBoxLine h-40 w-1 bg-white origin-top -rotate-45 absolute"></div>
            <div className="crossBoxLine h-40 w-1 bg-white origin-top rotate-45 right-0 absolute"></div>
          </div>
        </div>
        {/* navlinks */}
        <div className=" h-full w-full flex flex-col justify-center">
          <div className="link origin-top border-y-1 border-white relative">
            <h1 className="font-[font2] text-white text-[8vw] uppercase leading-[0.8] pt-5 text-center">
              Projets
            </h1>
            <div className="moveLink absolute flex top-0 bg-[#d3fd50] overflow-hidden">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-black text-[8vw] uppercase leading-[0.8] pt-5 text-center">
                  See everything
                </h2>
                <img
                  className="h-20 w-32 shrink-0 rounded-full object-cover md:h-24 md:w-40"
                  src="/images/work 1.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-black text-[8vw] uppercase leading-[0.8] pt-5 text-center">
                  See everything
                </h2>
                <img
                  className="h-20 w-32 shrink-0 rounded-full object-cover md:h-24 md:w-40"
                  src="/images/work 2.png"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-black text-[8vw] uppercase leading-[0.8] pt-5 text-center">
                 See everything
                </h2>
                <img
                  className="h-20 w-32 shrink-0 rounded-full object-cover md:h-24 md:w-40"
                  src="/images/work 1.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-black text-[8vw] uppercase leading-[0.8] pt-5 text-center">
                  See everything
                </h2>
                <img
                  className="h-20 w-32 shrink-0 rounded-full object-cover md:h-24 md:w-40"
                  src="/images/work 2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top border-y-1 border-white relative">
            <h1 className="font-[font2] text-white text-[8vw] uppercase leading-[0.8] pt-5 text-center">
              Agence
            </h1>
            <div className="moveLink absolute flex top-0 bg-[#d3fd50] overflow-hidden">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-black text-[8vw] uppercase leading-[0.8] pt-5 text-center">
                 Know us
                </h2>
                <img
                  className="h-20 w-32 shrink-0 rounded-full object-cover md:h-24 md:w-40"
                  src="/images/know 1.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-black text-[8vw] uppercase leading-[0.8] pt-5 text-center">
                 Know us
                </h2>
                <img
                  className="h-20 w-32 shrink-0 rounded-full object-cover md:h-24 md:w-40"
                  src="/images/know 1.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-black text-[8vw] uppercase leading-[0.8] pt-5 text-center">
                  Know us
                </h2>
                <img
                  className="h-20 w-32 shrink-0 rounded-full object-cover md:h-24 md:w-40"
                  src="/images/know 1.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-black text-[8vw] uppercase leading-[0.8] pt-5 text-center">
                  Know us
                </h2>
                <img
                  className="h-20 w-32 shrink-0 rounded-full object-cover md:h-24 md:w-40"
                  src="/images/know 1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top border-y-1 border-white relative">
            <h1 className="font-[font2] text-white text-[8vw] uppercase leading-[0.8] pt-5 text-center">
              Contact
            </h1>
            <div className="moveLink absolute flex top-0 bg-[#d3fd50] overflow-hidden">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-black text-[8vw] uppercase leading-[0.8] pt-5 text-center">
                  send us a fax
                </h2>
                <img
                  className="h-10 w-38 shrink-0 rounded-full object-cover md:h-24 md:w-40"
                  src="/images/heart.png"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-black text-[8vw] uppercase leading-[0.8] pt-5 text-center">
                  send us a fax
                </h2>
                <img
                  className="h-20 w-32 shrink-0 rounded-full object-cover md:h-24 md:w-40"
                  src="/images/heart.png"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-black text-[8vw] uppercase leading-[0.8] pt-5 text-center">
                  send us a fax
                </h2>
                <img
                  className="h-20 w-32 shrink-0 rounded-full object-cover md:h-24 md:w-40"
                  src="/images/heart.png"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-black text-[8vw] uppercase leading-[0.8] pt-5 text-center">
                  send us a fax
                </h2>
                <img
                  className="h-20 w-32 shrink-0 rounded-full object-cover md:h-24 md:w-40"
                  src="/images/heart.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top border-y-1 border-white relative">
            <h1 className="font-[font2] text-white text-[8vw] uppercase leading-[0.8] pt-5 text-center">
              Blogue
            </h1>
            <div className="moveLink absolute flex top-0 bg-[#d3fd50] overflow-hidden">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-black text-[8vw] uppercase leading-[0.8] pt-5 text-center">
                  Read articles
                </h2>
                <img
                  className="h-20 w-32 shrink-0 rounded-full object-cover md:h-24 md:w-40"
                  src="/images/last 1.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-black text-[8vw] uppercase leading-[0.8] pt-5 text-center">
                  Read articles{" "}
                </h2>
                <img
                  className="h-20 w-32 shrink-0 rounded-full object-cover md:h-24 md:w-40"
                  src="/images/last 2.gif"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-black text-[8vw] uppercase leading-[0.8] pt-5 text-center">
                  Read articles{" "}
                </h2>
                <img
                  className="h-20 w-32 shrink-0 rounded-full object-cover md:h-24 md:w-40"
                  src="/images/last 1.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-black text-[8vw] uppercase leading-[0.8] pt-5 text-center">
                  Read articles{" "}
                </h2>
                <img
                  className="h-20 w-32 shrink-0 rounded-full object-cover md:h-24 md:w-40"
                  src="/images/last 2.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
