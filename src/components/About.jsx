import React from 'react'

const About = () => {
  return (
    <div name ="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">About</h2>
            </div>

            <p className= "text-xl">
                As someone committed to always learning, I'm eager to leverage my technical skills and creative problem-solving abilities to contribute to innovative projects. 
                Currently, I am driven by the desire to explore emerging technologies and develop practical solutions to make meaningful impact.
            </p>

            <br />

            <p>
                As someone committed to always learning, I'm eager to leverage my technical skills and creative problem-solving abilities to contribute to innovative projects. 
                Currently, I am driven by the desire to explore emerging technologies and develop practical solutions to make meaningful impact.
            </p>
        </div>
    </div>
  )
}

export default About