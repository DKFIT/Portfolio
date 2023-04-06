
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
function Intro() {
    const typedRef = useRef(null);

    useEffect(() => {
      const options = {
        strings: [`Aspiring web developer`, `Aspiring full stack developer`, `Big time foodie`],
        typeSpeed: 75,
        startDelay: 150,
        backSpeed: 75,
        backDelay: 700,
        loop: true
      };
      if (typedRef.current) {
        const typed = new Typed(typedRef.current, options);
        return () => {
          typed.destroy();
        };
      }
    }, []);
  return (
    <div >
    <h1 ref={typedRef}></h1>
  </div>
  )
}

export default Intro





