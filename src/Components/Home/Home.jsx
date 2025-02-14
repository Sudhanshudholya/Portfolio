// import React from "react";
// import avatar from "../../img/code-Photoroom.png"
// import TextChanger from "../../TextChanger";

// const Home = () => {
//   return (
//     <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
//       <div className="md:w-2/4 md:pt-10">
//         <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
//          <TextChanger/>
//         </h1>
//         <p className="text-sm md:text-2xl tracking-tight">
//         A MERN Stack Developer specializes in building full-stack web applications using the MERN (MongoDB, Express.js, React, Node.js) technology stack. They handle both frontend and backend development, ensuring seamless integration between the client and server.
//         </p>
//         <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 
//         duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">Contact me</button>
//       </div>
//       <div>
//         <img className="w-96" src={avatar} alt="" />
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import avatar from "../../img/code-Photoroom.png";
import TextChanger from "../../TextChanger";

const Home = () => {
  return (
    <div className="text-white flex flex-col-reverse md:flex-row w-full items-center justify-between p-10 md:p-20">
      {/* Left Content */}
      <div className="md:w-2/4 md:pt-10 text-center md:text-left">
        <h1 className="text-3xl md:text-6xl font-bold leading-snug tracking-tighter">
          <TextChanger />
        </h1>
        <p className="text-sm md:text-xl mt-3 text-gray-300">
          A MERN Stack Developer specializes in building full-stack web applications using the MERN (MongoDB, Express.js, React, Node.js) technology stack. They handle both frontend and backend development, ensuring seamless integration between the client and server.
        </p>
        
        <button className="mt-5 md:mt-10 text-white py-2 px-4 md:py-3 md:px-6 text-sm md:text-lg font-semibold rounded-full bg-[#465697] hover:bg-[#3a4b8a] transition-transform transform hover:scale-105 duration-300 shadow-lg">
          Contact Me
        </button>
      </div>

      {/* Right Avatar Image */}
      <div className="flex justify-center">
        <img className="w-72 md:w-96 rounded-full shadow-lg hover:scale-105 transition-transform duration-300" src={avatar} alt="Avatar" />
      </div>
    </div>
  );
};

export default Home;
