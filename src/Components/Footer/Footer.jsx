// import React from "react";
// import { CiLinkedin } from "react-icons/ci";
// import { FaGithub } from "react-icons/fa";
// import { MdOutlineEmail } from "react-icons/md";

// const Footer = () => {
//   return (
//     <div
//       id="Footer"
//       className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
//     >
//       <div>
//         <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
//         <h3 className="text-sm md:text-2xl font-normal">Feel free to touch</h3>
//       </div>

//       <ul className="text-sm md:text-xl ">
//         <li  className="flex gap-2 items-center">
//             <MdOutlineEmail size={20}/>
//             sudhanshudholya069@gmail.com
//         </li><br />
//         <li className="flex gap-2 items-center">
//             {" "}
//             <CiLinkedin/>
//             https://www.linkedin.com/in/sudhanshu-dholya-0b9aa7300/
//         </li><br />
//         <li  className="flex gap-2 items-center">
//             <FaGithub/>
//             https://github.com/Sudhanshudholya
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div
      id="Contact"
      className="flex flex-col md:flex-row justify-between bg-gray text-white p-10 md:p-12 items-center shadow-lg"
    >
      {/* Contact Section */}
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold">Contact</h1>
        <h3 className="text-md md:text-xl font-light text-gray-300">
          Feel free to reach out!
        </h3>
      </div>

      {/* Links Section */}
      <ul className="space-y-4 text-sm md:text-lg">
        <li className="flex items-center gap-3 transition-transform transform hover:scale-105">
          <MdOutlineEmail size={24} className="text-red-400" />
          <a
            href="mailto:sudhanshudholya069@gmail.com"
            className="hover:underline"
          >
            sudhanshudholya069@gmail.com
          </a>
        </li>

        <li className="flex items-center gap-3 transition-transform transform hover:scale-105">
          <CiLinkedin size={24} className="text-blue-500" />
          <a
            href="https://www.linkedin.com/in/sudhanshu-dholya-0b9aa7300/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
           https://www.linkedin.com/in/sudhanshu-dholya-0b9aa7300/
          </a>
        </li>

        <li className="flex items-center gap-3 transition-transform transform hover:scale-105">
          <FaGithub size={24} className="text-gray-300" />
          <a
            href="https://github.com/Sudhanshudholya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
           https://github.com/Sudhanshudholya
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
