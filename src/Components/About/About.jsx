// import React from "react";
// import code from "../../img/code.png";
// import { IoArrowForward } from "react-icons/io5";

// const About = () => {
//   return (
//     <div id="About" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
//       <div>
//         <h2 className="text-2xl md:text-4xl font-bold">About</h2>
//         <div className="md:flex flex-wrap flex-col md:flex-row items-center">
//           <img className="md:h-80" src={code} alt="About image" />

//           <ul>

//             <div className="flex gap-3 py-4">
//               <IoArrowForward size={30} className="mt-1" />

//               <span className="w-96">
//                 <h1 className="text-xl md:text-2xl font-semibold leading-normal">
//                   Frontend Developer
//                 </h1>
//                 <p className="text-sm md:text-md leading-tight">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Praesentium quibusdam eaque tempore ab non placeat, dicta
//                   obcaecati nesciunt explicabo, aperiam totam optio aliquam
//                   natus velit rerum.
//                 </p>
//               </span>
//             </div>

//             <div className="flex gap-3 py-4">
//               <IoArrowForward size={30} className="mt-1" />

//               <span className="w-96">
//                 <h1 className="text-xl md:text-2xl font-semibold leading-normal">
//                   Backend Developer
//                 </h1>
//                 <p className="text-sm md:text-md leading-tight">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Praesentium quibusdam eaque tempore ab non placeat, dicta
//                   obcaecati nesciunt explicabo, Soluta veniam provident reprehenderit ipsam
//                   alias?
//                 </p>
//               </span>
//             </div>

//             <div className="flex gap-3 py-4">
//               <IoArrowForward size={30} className="mt-1" />

//               <span className="w-96">
//                 <h1 className="text-xl md:text-2xl font-semibold leading-normal">
//                   MERN Developer
//                 </h1>
//                 <p className="text-sm md:text-md leading-tight">
//                   Lorem ipsum dolor, dicta
//                   obcaecati nesciunt explicabo, aperiam totam optio aliquam
//                   natus velit rerum. Soluta veniam provident reprehenderit ipsam
//                   alias?
//                 </p>
//               </span>
//             </div>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import code from "../../img/code.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div id="About" className="text-white flex flex-col md:flex-row items-center justify-center bg-gray shadow-xl mx-4 md:mx-20 bg-opacity-40 rounded-lg p-8 md:p-12">
      {/* Left Section - Image */}
      <div className="flex-shrink-0">
        <img className="md:h-96 h-64 rounded-lg shadow-lg" src={code} alt="About" />
      </div>

      {/* Right Section - Content */}
      <div className="md:ml-12 mt-6 md:mt-0 w-full md:w-2/3">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-6">About Me</h2>

        <div className="space-y-6">
          {/* Card 1 */}
          <div className="flex gap-4 items-start p-4 bg-gray-900 bg-opacity-50 rounded-lg shadow-md hover:scale-105 transition-transform">
            <IoArrowForward size={30} className="mt-1 text-blue-400" />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold">Frontend Developer</h1>
              <p className="text-sm md:text-md leading-tight text-gray-300">
                Passionate about crafting interactive and visually stunning web experiences using React, Tailwind CSS, and modern UI frameworks.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex gap-4 items-start p-4 bg-gray-900 bg-opacity-50 rounded-lg shadow-md hover:scale-105 transition-transform">
            <IoArrowForward size={30} className="mt-1 text-green-400" />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold">Backend Developer</h1>
              <p className="text-sm md:text-md leading-tight text-gray-300">
                Experienced in building scalable and efficient server-side applications using Node.js, Express, and MongoDB.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex gap-4 items-start p-4 bg-gray-900 bg-opacity-50 rounded-lg shadow-md hover:scale-105 transition-transform">
            <IoArrowForward size={30} className="mt-1 text-purple-400" />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold">MERN Stack Developer</h1>
              <p className="text-sm md:text-md leading-tight text-gray-300">
                Skilled in developing full-stack web applications using MongoDB, Express, React, and Node.js for a seamless end-to-end experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
