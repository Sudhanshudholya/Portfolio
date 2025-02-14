// import React, { useState } from "react";
// import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

// const Navbar = () => {
//   const [menu, setMenu] = useState(false);
//   const [showMenu, setShowMenu] = useState(true);
//   return (
//     <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
//       <span className="text-xl font-bold tracking-wide">Portfolio</span>

//       <ul
//         className={`${
//           menu ? "block" : "hidden"
//         }    mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
//       >
//         <a href="#About">
//           <li className="text-md transition-all duration-300 p-1 md:p-0">
//             About
//           </li>
//         </a>

//         <a href="#Experience">
//           <li className="text-md transition-all duration-300 p-1 md:p-0">
//             Experience
//           </li>
//         </a>

//         <a href="#Projects">
//           <li className="text-md transition-all duration-300 p-1 md:p-0">
//             Projects
//           </li>
//         </a>

//         <a href="#Footer">
//           <li className="text-md transition-all duration-300 p-1 md:p-0">
//             Contact
//           </li>
//         </a>
//       </ul>
//       {showMenu ? (
//         <RiMenu2Line
//           size={30}
//           className="md:hidden right-10 top-6 transition-all duration-300"
//           onClick={() => {
//             openMenu(!menu);
//             setShowMenu(!showMenu);
//           }}
//         />
//       ) : (
//         <RiCloseLine
//           size={30}
//           className="md:hidden right-10 top-6 transition-all duration-300"
//         />
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { RiCloseLine, RiMenu2Line } from "react-icons/ri";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   console.log("Menu State:", menuOpen);  // Debugging menu state

//   return (
//     <nav className="flex items-center justify-between px-10 py-6 md:px-20 text-white bg-cyan-800 bg-opacity-30 shadow-md fixed w-full z-50">
//       {/* Logo */}
//       <span className="text-xl font-bold tracking-wide">Portfolio</span>

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex gap-8 font-semibold">
//         {["About", "Skills", "Projects", "Contact"].map((item) => (
//           <a key={item} href={`#${item}`} className="relative group">
//             <li className="text-md transition-all duration-300 p-1 cursor-pointer hover:text-gray-300">
//               {item}
//               {/* Hover Effect */}
//               <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
//             </li>
//           </a>
//         ))}
//       </ul>

//       {/* Mobile Menu Toggle */}
//       <div className="md:hidden">
//         {menuOpen ? (
//           // <RiCloseLine
//           //   size={30}
//           //   className="cursor-pointer transition-transform transform hover:scale-110"
//           //   onClick={() => {
//           //     console.log("Close Icon Clicked");
//           //     setMenuOpen(false);
//           //   }}
//           // />

//           <RiCloseLine
//   size={30}
//   className="cursor-pointer transition-transform transform hover:scale-110 z-50"
//   onClick={() => setMenuOpen(false)}
// />

//         ) : (
//           <RiMenu2Line
//             size={30}
//             className="cursor-pointer transition-transform transform hover:scale-110"
//             onClick={() => setMenuOpen(true)}
//           />
//         )}
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-black bg-opacity-90 backdrop-blur-lg text-white flex flex-col items-center justify-center gap-6 text-xl font-semibold transition-transform duration-300 ${
//           menuOpen ? "translate-x-0" : "translate-x-full"
//         } md:hidden`}
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

// export default Navbar;

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
          {menuOpen ? (
            <RiCloseLine
              size={30}
              className="cursor-pointer transition-transform transform hover:scale-110"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <RiMenu2Line
              size={30}
              className="cursor-pointer transition-transform transform hover:scale-110"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-[90vh] w-60 bg-black bg-opacity-80 backdrop-blur-lg text-white flex flex-col items-center justify-center gap-6 text-lg font-semibold transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden shadow-lg pt-16`}
      >
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
