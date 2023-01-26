import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useLinkDownFall = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);
    console.log(el);
    gsap.fromTo(
      el,
      {
        y: -500,
      },
      {
        y: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "Power4.out",
      }
    );
  }, []);
};
