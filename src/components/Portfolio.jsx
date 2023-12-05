import React from "react";
import discord from "../assets/portfolio/discord.jpeg";
import qrcode from "../assets/portfolio/qrcodeimage.jpg";
import dream from "../assets/portfolio/dream.jpg";
import virtualmemory from "../assets/portfolio/virtualmemory.png";
import shell from "../assets/portfolio/shell.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: discord,
      project_name: "Rasenbot",
      technologies: "Discord.py | MongoDB",
      href: "https://github.com/LinsaneFC/RasenBot",
    },
    {
      id: 2,
      src: qrcode,
      project_name: "QR Code Scanner",
      technologies: "Java | Android SDK",
      href: "https://github.com/benjaminl4917/QR_Code_Scanner",
    },
    {
      id: 3,
      src: dream,
      project_name: "Dream Journal",
      technologies: "React | TailwindCSS | Django | CockroachDB",
      href: "https://github.com/benjaminl4917/Dream_Journal_Server",
    },
    {
      id: 4,
      src: virtualmemory,
      project_name: "Virtual Memory Simulator",
      technologies: "C Programming Language",
      href: "https://github.com/benjaminl4917/Virtual-Memory-Simulator",
    },
    {
      id: 5,
      src: shell,
      project_name: "Shell",
      technologies: "C Programming Language",
      href: "https://github.com/benjaminl4917/shell",
    },
    
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl  sm:text-7xl font-bold inline border-gray-500 hover:text-customRed transition-colors duration-300 mb-4">
            Projects
          </h2>
          <h2 className="text-base sm:text-sm font-bold text-white mt-2">
              (A collection of projects showcasing my skills in various technologies such as Python, C, React, and more...)
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, project_name, technologies }) => (
            <div key={id} className="shadow-md shadow-gray-600 hover:shadow-customRed hover:scale-105 rounded-lg">
              <a href={href} target="_blank" rel="noopener noreferrer">
                <img
                  src={src}
                  alt=""
                  className="rounded-md max-w-full max-h-40 object-cover"
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="flex items-center justify-center">
                  <button className="px-6 py-3 m-4 duration-200 hover:scale-105 justify-center">
                    {project_name}
                    <hr className="border-gray-300 my-2 mx-auto" />
                    <p className="mt-2 text-sm">{technologies}</p>
                  </button>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;