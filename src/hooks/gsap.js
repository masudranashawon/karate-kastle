import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapLinkDownFall = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

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
  }, [arr]);
};

export const useGsapHeadingRevile = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: -100,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 1,
        duration: 1,
        delay: 1.8,
        ease: "Power4.out",
      }
    );
  }, [arr]);
};

export const useGsapTextUnvile = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        x: 0,
      },
      {
        x: "100%",
        duration: 1,
        delay: 2.1,
        ease: "Power4.out",
      }
    );
  }, [arr]);
};

export const useGsapTextForward = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        x: 500,
        opacity: 0,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 2.5,
        ease: "Power4.out",
      }
    );
  }, [arr]);
};

export const useGsapCtaUpward = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 3,
        ease: "Power4.out",
      }
    );
  }, [arr]);
};
