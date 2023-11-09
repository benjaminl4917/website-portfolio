import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      project_name: "Rasenbot",
      href: "https://github.com/LinsaneFC/RasenBot",
    },
    {
      id: 2,
      src: reactParallax,
      project_name: "QR Code Scanner",
      href: "https://github.com/benjaminl4917/QR_Code_Scanner",
    },
    {
      id: 3,
      src: navbar,
      project_name: "Dream Journal",
      href: "https://github.com/benjaminl4917/Dream_Journal_Server",
    },
    {
      id: 4,
      src: reactSmooth,
      project_name: "Virtual Memory Simulator",
      href: "https://github.com/benjaminl4917/Virtual-Memory-Simulator",
    },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, project_name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={href} target="_blank" rel="noopener noreferrer">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="px-6 py-3 m-4 duration-200 hover:scale-105">
                    {project_name}
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