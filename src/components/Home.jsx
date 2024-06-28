import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import gsap from "gsap";
export default function Home() {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleScreen = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreen);
    return () => {
      window.removeEventListener("resize", handleScreen);
    };
  }, []);

  useGSAP(() => {
    gsap.to(".hero-title", {
      y: 0,
      opacity: "100%",
      delay: 1.5,
    });

    gsap.to("#cta", {
      y: -50,
      opacity: "100%",
      delay: 1.5,
    });
  }, []);
  return (
    <>
      <section className="w-full overflow-hidden nav-height">
        <div className="h-5/6 w-full flex-center flex-col">
          <p className="hero-title">iPhone 15 pro</p>
          <div className="md:w-10/12 w-9/12">
            <video
              autoPlay
              muted
              playsInline={true}
              className="pointer-events-none"
              key={videoSrc}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
        </div>
        <div
          className="flex flex-col items-center opacity-0 translate-y-20"
          id="cta"
        >
          <a href="#highlights" className="btn">
            Buy
          </a>
          <p className="font-semibold text-xl text-white">From ₹134900.00*</p>
        </div>
      </section>
    </>
  );
}
