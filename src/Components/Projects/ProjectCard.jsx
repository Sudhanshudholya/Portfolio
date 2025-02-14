// import React from "react";
// import Image from "../../img/abc.jpg"

// const ProjectCard = ({ title, main, image }) => {
//   return (
//     // <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
//       <img className="p-4" src={Image} alt="" />
//       <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
//         {title}
//       </h3>
//       <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
//       <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
//         <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
//           DEMO
//         </button>
//         <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
//           CODE
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;


// import React from "react";

// const ProjectCard = ({ title, main, image }) => {
//   return (
//     <div className="p-5 md:p-8 flex flex-col w-80 bg-[#0c0e19] bg-opacity-90 backdrop-blur-lg shadow-lg shadow-slate-900 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
//       {/* Project Image */}
//       <img className="w-full h-48 object-cover rounded-xl" src={image} alt={title} />

//       {/* Title */}
//       <h3 className="mt-4 px-2 text-xl md:text-2xl font-bold text-white">
//         {title}
//       </h3>

//       {/* Description */}
//       <p className="px-2 text-sm md:text-md text-gray-300 leading-tight py-2">
//         {main}
//       </p>

//       {/* Buttons */}
//       <div className="mt-4 flex gap-3">
//         <button className="flex-1 py-2 text-sm md:text-lg font-semibold text-white bg-gradient-to-r from-[#465697] to-[#6a89cc] rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
//           DEMO
//         </button>
//         <button className="flex-1 py-2 text-sm md:text-lg font-semibold text-white bg-gradient-to-r from-[#6a89cc] to-[#465697] rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
//           CODE
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;



import React from "react";

const ProjectCard = ({ title, main, image, demoUrl, codeUrl }) => {
  return (
    <div className="p-5 md:p-8 flex flex-col w-80 bg-[#0c0e19] bg-opacity-90 backdrop-blur-lg shadow-lg shadow-slate-900 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
      {/* Project Image */}
      <img className="w-full h-48 object-cover rounded-xl" src={image} alt={title} />

      {/* Title */}
      <h3 className="mt-4 px-2 text-xl md:text-2xl font-bold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="px-2 text-sm md:text-md text-gray-300 leading-tight py-2">
        {main}
      </p>

      {/* Buttons */}
      <div className="mt-4 flex gap-3">
        <button
          className="flex-1 py-2 text-sm md:text-lg font-semibold text-white bg-gradient-to-r from-[#465697] to-[#6a89cc] rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          onClick={() => window.open(demoUrl, "_blank")}
        >
          DEMO
        </button>
        <button
          className="flex-1 py-2 text-sm md:text-lg font-semibold text-white bg-gradient-to-r from-[#6a89cc] to-[#465697] rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          onClick={() => window.open(codeUrl, "_blank")}
        >
          CODE
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
