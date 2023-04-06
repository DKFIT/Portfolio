import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
function Motivationl() {
    const typedRef = useRef(null);

    useEffect(() => {
      const options = {
        strings: [`Lorem ipsum dolor sit, `,],
            typeSpeed: 75,
            startDelay: 150,
            loop: false
      };
      if (typedRef.current) {
        const typed = new Typed(typedRef.current, options);
        return () => {
          typed.destroy();
        };
      }
    }, []);
  return (
    <div className="App">
    <h1 ref={typedRef}></h1>
  </div>
  )
}
export default Motivationl