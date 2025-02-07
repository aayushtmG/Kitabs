// import React from "react";

// const MotivationalBlock = () => {
//   return (
//     <div className="flex items-center justify-center p-6 my-4 gap-24">
//       <div className="max-w-md ">
//         <h1 className="text-4xl font-bold text-gray-800 mb-4">"Climb the Ladder of Knowledge"</h1>
//         <p className="text-lg text-gray-600">Every page is a step closer to wisdom. Start your journey today and never stop exploring.</p>
//       </div>

//       <div className="">
//         <img 
//           src="/images/book_ladder.png" 
//           alt="Floating books with ladders" 
//           className="rounded-lg  max-h-[500px]"
//         />
//       </div>
//     </div>
//   );
// };

// export default motivationalblock;

import react, { useEffect, useRef, useState } from "react";

const MotivationalBlock = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // stop observing once visible
        }
      },
      {
        root: null,
        rootMargin: "20px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="flex items-center justify-center p-6 my-4 gap-24">
      <div className={`max-w-md ${isVisible ? "fade-in" : ""}`}>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">"Climb the ladder of knowledge"</h1>
        <p className="text-lg text-gray-600">
          every page is a step closer to wisdom. start your journey today and never stop exploring.
        </p>
      </div>

      <div className={`${isVisible ? "fade-in" : ""}`}>
        <img
          src="/images/book_ladder.png"
          alt="floating books with ladders"
          className="rounded-lg max-h-[500px]"
        />
      </div>
    </div>
  );
};

export default MotivationalBlock;