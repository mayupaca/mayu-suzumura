import React from "react";
import { useInView } from "react-intersection-observer";

const FadeInAnimation = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "50px",
    triggerOnce: true,
  });
  return (
    <div ref={ref}>{inView && <div className="animate__fadeInDown">
      
      </div>}</div>
  );
};

export default FadeInAnimation;
