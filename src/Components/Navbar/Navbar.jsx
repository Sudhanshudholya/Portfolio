

// import React, { useState } from "react";
// import { RiCloseLine, RiMenu2Line } from "react-icons/ri";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="fixed w-full z-50 bg-cyan-800 bg-opacity-30 shadow-md">
//       <div className="flex items-center justify-between px-6 py-4 md:px-10 text-white">
//         {/* Logo */}
//         <span
//           className="text-xl font-bold tracking-wide cursor-pointer"
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         >
//           Portfolio
//         </span>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-8 font-semibold">
//           {["About", "Skills", "Projects", "Contact"].map((item) => (
//             <a key={item} href={`#${item}`} className="relative group">
//               <li className="text-md transition-all duration-300 p-1 cursor-pointer hover:text-blue-300">
//                 {item}
//                 {/* Hover Effect */}
//                 <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
//               </li>
//             </a>
//           ))}
//         </ul>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden">
//           {menuOpen ? (
//             <RiCloseLine
//               size={30}
//               className="cursor-pointer transition-transform transform hover:scale-110"
//               onClick={() => setMenuOpen(false)}
//             />
//           ) : (
//             <RiMenu2Line
//               size={30}
//               className="cursor-pointer transition-transform transform hover:scale-110"
//               onClick={() => setMenuOpen(true)}
//             />
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-0 right-0 h-[90vh] w-60 bg-black bg-opacity-80 backdrop-blur-lg text-white flex flex-col items-center justify-center gap-6 text-lg font-semibold transition-transform duration-300 ${
//           menuOpen ? "translate-x-0" : "translate-x-full"
//         } md:hidden shadow-lg pt-16`}
//       >
//         {["About", "Experience", "Projects", "Contact"].map((item) => (
//           <a
//             key={item}
//             href={`#${item}`}
//             className="hover:text-gray-300 transition-all duration-300"
//             onClick={() => setMenuOpen(false)}
//           >
//             {item}
//           </a>
//         ))}
//       </div>
//     </nav>
//   );
// };

import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-cyan-800 bg-opacity-30 shadow-md">
      <div className="flex items-center justify-between px-6 py-4 md:px-10 text-white">
        {/* Logo */}
        <span
          className="text-xl font-bold tracking-wide cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Portfolio
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semibold">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a key={item} href={`#${item}`} className="relative group">
              <li className="text-md transition-all duration-300 p-1 cursor-pointer hover:text-blue-300">
                {item}
                {/* Hover Effect */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
            </a>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <RiCloseLine
                size={30}
                className="cursor-pointer transition-transform transform hover:scale-110"
              />
            ) : (
              <RiMenu2Line
                size={30}
                className="cursor-pointer transition-transform transform hover:scale-110"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-60 bg-gray-700 bg-opacity-80 backdrop-blur-lg text-white flex flex-col items-center justify-center gap-6 text-lg font-semibold transition-all duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden shadow-lg`}
      >
        {/* Close Button Inside Menu */}
        <button
          className="absolute top-5 right-6 text-white"
          onClick={() => setMenuOpen(false)}
        >
          <RiCloseLine size={30} />
        </button>

        {["About", "Experience", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="hover:text-gray-300 transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;



