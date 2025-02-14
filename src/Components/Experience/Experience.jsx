// // import React from "react";
// // import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
// // import { FaNode } from "react-icons/fa6";
// // import { FaGoogle } from "react-icons/fa";
// // import { SiMongodb } from "react-icons/si";
// // import { RiNetflixFill } from "@remixicon/react";
// // import { FaAmazon } from "react-icons/fa";
// // import { SiRedux } from "react-icons/si";
// // import { RiTailwindCssFill } from "react-icons/ri";

// // const Experience = () => {
// //   return (
// //     <div id="Experience" className="p-10 md:p-24">
// //       <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
// //       <div className="flex flex-wrap items-center justify-around">
// //         <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
// //           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
// //             <FaHtml5 color="#E34F26" size={50} />
// //           </span>
// //           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
// //             <FaCss3 color="#1572b6" size={50} />
// //           </span>
// //           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
// //             <FaJs color="#F7DF1E" size={50} />
// //           </span>
// //           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
// //             <RiTailwindCssFill color="#0891b2" size={50} />
// //           </span>
// //           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
// //             <FaBootstrap color="#6610f2" size={50} />
// //           </span>
// //           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
// //             <FaReact color="#61DAFB" size={50} />
// //           </span>
// //           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
// //             <SiRedux color="#764abc" size={50} />
// //           </span>
          
// //           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
// //             <SiMongodb color="#47A248" size={50} />
// //           </span>
// //           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
// //             <FaNode color="#47A248" size={50} />
// //           </span>
// //         </div>

// //         <div>
// //           <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 item-center">
// //             <FaGoogle color="#4285F4" size={50} />
// //             <span className="text-white">
// //               <h2 className="leading-tight">Software Engineer, Google</h2>
// //               <p className="text-sm leading-tight font-thin">
// //                 Sept 2023 - Present
// //               </p>
// //               <ul className="text-sm p-2">
// //                 <li>Work as a junior developer</li>
// //                 <li>Node Developer</li>
// //               </ul>
// //             </span>
// //           </div>

// //           <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 item-center">
// //             <RiNetflixFill color="#E50914" size={50} />
// //             <span className="text-white">
// //               <h2 className="leading-tight">Software Engineer, Netflix</h2>
// //               <p className="text-sm leading-tight font-thin">
// //                 Sept 2023 - Present
// //               </p>
// //               <ul className="text-sm p-2">
// //                 <li>Work as a junior developer</li>
// //                 <li>Node Developer</li>
// //               </ul>
// //             </span>
// //           </div>

// //           <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 item-center">
// //             <FaAmazon color="#FF9900" size={50} />
// //             <span className="text-white">
// //               <h2 className="leading-tight">Software Engineer, Amazon</h2>
// //               <p className="text-sm leading-tight font-thin">
// //                 Sept 2023 - Present
// //               </p>
// //               <ul className="text-sm p-2">
// //                 <li>Work as a junior developer</li>
// //                 <li>Node Developer</li>
// //               </ul>
// //             </span>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Experience;


// import React from "react";
// import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaReact, FaNode, FaGoogle, FaAmazon } from "react-icons/fa";
// import { SiMongodb, SiRedux } from "react-icons/si";
// import { RiNetflixFill, RiTailwindCssFill } from "react-icons/ri";

// const Experience = () => {
//   return (
//     <div id="Skills" className="p-10 md:p-24 bg-gray text-white">
//       <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">Skills</h1>

//       <div className="flex flex-col md:flex-row items-center justify-center gap-12">

//         {/* Skills Section */}
//         <div className="flex flex-wrap justify-center md:w-2/5 gap-6 md:p-12">
//           {[
//             { icon: FaHtml5, color: "#E34F26" },
//             { icon: FaCss3, color: "#1572b6" },
//             { icon: FaJs, color: "#F7DF1E" },
//             { icon: RiTailwindCssFill, color: "#0891b2" },
//             { icon: FaBootstrap, color: "#6610f2" },
//             { icon: FaReact, color: "#61DAFB" },
//             { icon: SiRedux, color: "#764abc" },
//             { icon: SiMongodb, color: "#47A248" },
//             { icon: FaNode, color: "#47A248" },
//           ].map((tech, index) => (
//             <span key={index} className="p-4 bg-gray-800 rounded-2xl shadow-lg transition-all hover:scale-105">
//               <tech.icon size={55} color={tech.color} />
//             </span>
//           ))}
//         </div>

//         {/* Work Experience Section */}
//         <div className="flex flex-col gap-6">
//           {[
//             // { icon: FaGoogle, color: "#4285F4", company: "Google", role: "Software Engineer", duration: "Sept 2023 - Present" },
//             // { icon: RiNetflixFill, color: "#E50914", company: "Netflix", role: "Software Engineer", duration: "Sept 2023 - Present" },
//             // { icon: FaAmazon, color: "#FF9900", company: "Amazon", role: "Software Engineer", duration: "Sept 2023 - Present" },
//           ].map((job, index) => (
//             <div key={index} className="flex items-center gap-6 bg-gray-800 bg-opacity-50 rounded-lg p-5 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
//               <job.icon size={55} color={job.color} />
//               <div>
//                 <h2 className="text-xl font-semibold">{job.role}, {job.company}</h2>
//                 <p className="text-sm font-light">{job.duration}</p>
//                 <ul className="text-sm mt-2 list-disc pl-4">
//                   <li>Work as a junior developer</li>
//                   <li>Node Developer</li>
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Experience;


import React from "react";
import { FaHtml5, FaCss3, FaJs, FaBootstrap, FaReact, FaNode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux, SiMongodb } from "react-icons/si";


const techStack = [
  { icon: FaHtml5, color: "#E34F26", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { icon: FaCss3, color: "#1572b6", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { icon: FaJs, color: "#F7DF1E", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { icon: RiTailwindCssFill, color: "#0891b2", url: "https://tailwindcss.com/docs" },
  { icon: FaBootstrap, color: "#6610f2", url: "https://getbootstrap.com/docs/" },
  { icon: FaReact, color: "#61DAFB", url: "https://react.dev/" },
  { icon: SiRedux, color: "#764abc", url: "https://redux.js.org/" },
  { icon: SiMongodb, color: "#47A248", url: "https://mongoosejs.com/docs/" },
  { icon: FaNode, color: "#47A248", url: "https://nodejs.org/api/documentation.html" },
];

const Skills = () => {
  return (
    <div className="flex flex-wrap justify-center items-center w-full max-w-[800px] mx-auto gap-6 p-6 md:p-12 text-center">
      {techStack.map((tech, index) => (
        <span
          key={index}
          className="p-4 bg-gray-800 rounded-2xl shadow-lg transition-all hover:scale-105 cursor-pointer"
          onClick={() => window.open(tech.url, "_blank")}
        >
          <tech.icon size={55} color={tech.color} />
        </span>
      ))}
    </div>
  );
};


export default Skills;
