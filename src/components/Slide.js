import { useRef } from "react";
import {
  useGsapTextUnvile,
  useGsapTextForward,
  useGsapHeadingRevile,
  useGsapCtaUpward,
} from "../hooks/gsap";

const Slide = ({ image }) => {
  const headingSpanRef = useRef(null);
  const bodyRef = useRef(null);
  const headingRef = useRef(null);
  const ctaRef = useRef(null);

  useGsapTextUnvile([headingSpanRef]);
  useGsapTextForward([bodyRef]);
  useGsapHeadingRevile([headingRef]);
  useGsapCtaUpward([ctaRef]);

  return (
    <div
      className='slide'
      style={{ backgroundImage: `url(${image.src}) ` }}
      key={image.id}
    >
      <div className='slide-content container'>
        <h1 ref={headingRef}>
          {image.headline}
          <span ref={headingSpanRef}></span>
        </h1>
        <p ref={bodyRef}>{image.body}</p>
        <a href={`#${image.target}`} ref={ctaRef} className='slide-cta-link'>
          {image.cta}
        </a>
      </div>
    </div>
  );
};

export default Slide;
