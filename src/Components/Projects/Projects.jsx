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
import download from "../../img/download.jpeg"
import alarm from "../../img/alarm.jpg";
import currency from "../../img/currency.jpg";
import whatss from "../../img/whatss.jpeg";
import insta from "../../img/insta.jpeg";
import you from "../../img/you.png"

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      {/* Title Section */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 tracking-tight">
        My Projects 🚀
      </h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-4 md:px-12">
        <ProjectCard
          title="Currency Coverter"
          image={currency}
          main="A currency converter calculates exchange rates between different currencies, allowing users to convert amounts instantly based on real-time or fixed rates for financial convenience."
          codeUrl={"https://github.com/Sudhanshudholya/Currency-converter"}
          demoUrl={"https://currency-converter-jbqh.onrender.com"}
        />
        <ProjectCard
          title="Alarm Clock"
          image={alarm}
          main="An alarm clock project using HTML, CSS, and JavaScript allows users to set alarms, display the current time, and trigger alerts or sounds at scheduled times and managed time."
          codeUrl={"https://github.com/Sudhanshudholya/Alarm-Clock"}
        />
        <ProjectCard
          title="Quotes app"
          image={download}
          main="A Quote App using HTML, CSS, and JavaScript displays random or categorized quotes, allowing users to generate, share, and save their favorite inspirational quotes dynamically."
          codeUrl={"https://github.com/Sudhanshudholya/Quote-App"}
          demoUrl={"https://quote-app-0ug7.onrender.com/"}
        />
        <ProjectCard
          title="Whatsapp"
          image={whatss}
          main="A WhatsApp clone using HTML, CSS, and JavaScript replicates the chat interface, allowing real-time messaging, notifications, and user interactions for an engaging communication experience."
          codeUrl={"https://github.com/Sudhanshudholya/Whatsapp"}
          demoUrl={"https://clone-whats.netlify.app/"}
        />

        <ProjectCard
          title="Instagram"
          image={insta}
          main="An Instagram clone using HTML, CSS, and JavaScript replicates the feed, profile, and post interactions, enabling users to upload images, like posts, and experience a social media interface."
          codeUrl={"https://github.com/Sudhanshudholya/Instagram"}
          demoUrl={"https://cls-insta.netlify.app/"}
        />

        <ProjectCard
          title="Youtube"
          image={you}
          main="A YouTube clone using HTML, CSS, and JavaScript replicates video streaming, featuring a homepage, video player, search functionality, and interactive UI for an engaging user experience."
          codeUrl={"https://github.com/Sudhanshudholya/Youtube"}
          demoUrl={"https://youtube-cls.netlify.app/"}
        />
      </div>
    </div>
  );
};

export default Projects;
