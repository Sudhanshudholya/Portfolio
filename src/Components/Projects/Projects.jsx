// import React from "react";
// import ProjectCard from "./ProjectCard";

// const Projects = () => {
//   return (
//     <div id="Projects" className="p-10 md:p-24 text-white">
//       <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
//       <div className="py-12 px-8 flex flex-wrap gap-5">
//         <ProjectCard
//           title="Blogging"
//           main="This is a bloging website and used for some component library "
//         />
//         <ProjectCard
//           title="Youtube"
//           main="This is a bloging website and used for some component library "
//         />
//         <ProjectCard
//           title="Netflix"
//           main="This is a bloging website and used for some component library "
//         />
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React from "react";
import ProjectCard from "./ProjectCard";
import bg from "../../img/bg.jpeg"
import currency from "../../img/currency.jpg";
import whatsapp from "../../img/Whatsapp.png";
import instagram from "../../img/Instagram.jpg"
import youtube from "../../img/Youtube.png";
import Password from "../../img/Password.png";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="p-6 md:p-20 text-white w-full max-w-[1200px] mx-auto"
    >
      {/* Title Section */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 md:mb-12 tracking-tight">
        My Projects 🚀
      </h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-2 sm:px-6 md:px-12">
        <ProjectCard
          title="Currency Coverter"
          image={currency}
          main="A currency converter calculates exchange rates between different currencies, allowing users to convert amounts instantly based on real-time or fixed rates for financial convenience."
          codeUrl={"https://github.com/Sudhanshudholya/Currency-converter"}
          demoUrl={"https://currency-converter-jbqh.onrender.com"}
        />
        <ProjectCard
          title="Password generator"
          image={Password}
          main="A password generator creates strong, random passwords using a mix of letters, numbers, and symbols, enhancing security and preventing unauthorized access to accounts and systems."
          codeUrl={"https://github.com/Sudhanshudholya/Password-generator"}
          demoUrl={"https://password-generator-0ryv.onrender.com/"}
        />
        <ProjectCard
          title="Background changer"
          image={bg}
          main="A background changer allows users to dynamically switch backgrounds on a webpage or app, enhancing visual appeal and customization. It can use solid colors, gradients, or images for a personalized user experience."
          codeUrl={"https://github.com/Sudhanshudholya/Background-changer"}
          demoUrl={"https://background-changer-xql0.onrender.com"}
        />

        <ProjectCard
          title="Whatsapp"
          image={whatsapp}
          main="A WhatsApp clone using HTML, CSS, and JavaScript replicates the chat interface, allowing real-time messaging, notifications, and user interactions for an engaging communication experience."
          codeUrl={"https://github.com/Sudhanshudholya/Whatsapp"}
          demoUrl={"https://clone-whats.netlify.app/"}
        />
        <ProjectCard
          title="Instagram"
          image={instagram}
          main="Instagram is a social media platform for sharing photos, videos, and stories. Users can follow others, like, comment, and explore content while engaging through reels, IGTV, and direct messaging."
          codeUrl={"https://github.com/Sudhanshudholya/Instagram"}
          demoUrl={"https://cls-insta.netlify.app/"}
        />
        <ProjectCard
          title="Youtube"
          image={youtube}
          main="A YouTube clone using HTML, CSS, and JavaScript replicates video streaming, featuring a homepage, video player, search functionality, and interactive UI for an engaging user experience."
          codeUrl={"https://github.com/Sudhanshudholya/Youtube"}
          demoUrl={"https://youtube-cls.netlify.app/"}
        />
      </div>
    </div>
  );
};

export default Projects;
