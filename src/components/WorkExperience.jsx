import React from "react";

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      title: "Product Connectivity Software Intern",
      company: "Johnson & Johnson",
      location: "Santa Clara, California, USA",
      date: "June 2024 – September 2024",
      responsibilities: [
        "Contributed to R&D for Ottava, a next-gen surgical robot, by developing software in C++ and Python to help improve releases to prepare for FDA submission as Ottava strives to make it to market.",
        "Designed and implemented a volume control feature using the ALSA Library to manage audio settings that dynamically responds to audio trigger events for precise sound management. The feature was presented and approved in design review, extensively tested on local simulation and live hardware systems, and the implementation details were thoroughly documented.",
        "Consolidated and simplified logging infrastructures by merging the Auris Health and Verb Surgical libraries while refining unit tests and leveraging mock/abstract classes to ensure seamless logging of the full system across distributed hosts.",
        "Developed in C++ to integrate third-party libraries such as Boost with custom in-house libraries, adhered to Google C++ style guides for code quality, and made updates to software organization’s build docker as part of the CI/CD pipeline.",
        "Worked cross-functionally across teams following an Agile format, utilized technologies within the Atlassian Suite for code reviews and testing, and debugged issues to iteratively design and implement software solutions."
      ],
      href: "https://www.jnj.com", // Placeholder link
    },
    {
      id: 2,
      title: "Software Engineer Intern",
      company: "Esports Arena",
      location: "Lake Forest, California, USA",
      date: "November 2023 – March 2024",
      responsibilities: [
        "Spearheaded the development of a Discord bot using Python, FastAPI, and MongoDB.",
        "Implemented a matchmaking system for balanced gaming experiences."
      ],
      href: "https://www.esportsarena.com", // Placeholder link
    },
    {
      id: 3,
      title: "Software Engineer, OSSA.ai (Individual Contractor)",
      company: "Remote, USA",
      date: "June 2023 - August 2023",
      responsibilities: [
        "Implemented Google Cloud Functions using Flask and Pydub to convert and parse video files.",
        "Designed algorithms to error-check and correct Google's speech recognition API.",
        "Established OAuth 2.0 in GCP to automate requests to Google Cloud Functions."
      ],
      href: "https://www.ossa.ai", // Placeholder link
    }
  ];

  return (
    <div name="work experience" className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen pb-24">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl sm:text-7xl font-bold inline border-gray-500 hover:text-customRed transition-colors duration-300 mb-4">
            Work Experiences
          </h2>
          <h2 className="text-base sm:text-sm font-bold text-white mt-2">
            (A collection of work experiences showcasing my skills in software development and engineering...)
          </h2>
        </div>

        <ul className="list-disc pl-5 space-y-8">
          {experiences.map(({ id, title, company, location, date, responsibilities }) => (
            <li key={id} className="shadow-md shadow-gray-600 hover:shadow-customRed hover:scale-105 rounded-lg p-4">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-gray-400">{company} - {location}</p>
              <p className="text-gray-400 italic">{date}</p>
              <hr className="border-gray-300 my-2" />
              <ul className="mt-2 text-sm list-disc pl-5">
                {responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="list-disc">{responsibility}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default WorkExperience;