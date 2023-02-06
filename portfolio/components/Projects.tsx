import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      src: "https://user-images.githubusercontent.com/108888457/202707444-9a008b47-1145-4b7d-9fde-d6ef08757cd0.mp4",
      title: "Yakker",
      description:
        "Built a full-stack (MERN) social media web application which facilitates interactions between users. The platform allows users to see updates about each other and to interact privately with one another via direct message in real-time. Technologies used include ReactJS, TailwindCSS, MongoDB, Express, Node, Socket.IO, BCrypt, JSONWebToken and Cloudinary.",
    },
    {
      src: "https://media.licdn.com/dms/image/C562DAQHbYT4_U6clcA/profile-treasury-image-shrink_800_800/0/1669351346619?e=1676304000&v=beta&t=5HkTHB9M388_dx4MtfYLT8IWQAIrcK1Sj0UUDWeyGPU",
      title: "Carbon Footprint Calculator",
      description:
        "The carbon emission calculator was built for the purposes of understanding one's impact on the environment while traveling and a way to offset the impact by planting trees. While planting trees to offset carbon emissions is not a perfect solution, it is a positive step towards embracing sustainability while traveling. The project was built using HTML, CSS and JavaScript. Climatiq API provided the backend data required to perform the calculations.",
    },
    {
      src: "https://media.licdn.com/dms/image/C562DAQE1Q3a17s8PeA/profile-treasury-image-shrink_8192_8192/0/1669310473453?e=1676304000&v=beta&t=zquQh9dQX6lu_s0fYME7CZyw0hW-dapJ-Uw-qgVSQ8Y",
      title: "Seeds Cafe",
      description:
        "Built a full-stack (MERN) web application with a team of software engineers and UX designers. The purpose of the application was to create a digital platform for diners to order food from Seeds Cafe and explore artwork done by Rainbow Centre’s students.",
    },
    {
      src: "https://media.licdn.com/dms/image/C562DAQHP0iU8tWo9Tw/profile-treasury-image-shrink_1920_1920/0/1669310233682?e=1676304000&v=beta&t=IUxzLPxeg1Vrup6_XegGNfjyPPCqZdZ-14VxS09eEkU",
      title: "Ghost Shooter",
      description:
        "This was my first project as a student at General Assembly. It is a canvas-based game where you shoot at Pac-Man ghosts as they come at you. This was built using HTML, CSS and vanilla JavaScript.",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly w-auto items-center z-0"
    >
      <h3 className="sectionHeader">Projects</h3>

      <div className="mt-20 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{ y: -300 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="object-cover h-200 w-auto"
              src={project.src}
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6-xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-highlight-blue/50">
                  Case Study {i + 1} of {projects.length} :
                </span>{" "}
                {project.title}
              </h4>
              <p className="text-lg text-center md:text-left">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-highlight-blue/10 left-0 h-[300px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
