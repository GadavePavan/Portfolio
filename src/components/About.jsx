import React from "react";
import AboutImage from "../assets/aboutme-image.png";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaServer } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="About Me"
            className="w-72 h-80 rounded-lg border-4 border-gray-700 mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <FaHtml5 className="text-orange-500 mr-2" /> Frontend Technologies:
                </h3>
                <ul className="list-disc list-inside ml-5 space-y-2">
                  <li className="flex items-center"><FaHtml5 className="text-orange-500 mr-2" /> HTML</li>
                  <li className="flex items-center"><FaCss3Alt className="text-blue-500 mr-2" /> CSS</li>
                  <li className="flex items-center"><FaJs className="text-yellow-400 mr-2" /> JavaScript</li>
                  <li className="flex items-center"><FaReact className="text-blue-400 mr-2" /> React</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <FaServer className="text-green-500 mr-2" /> Backend Technologies:
                </h3>
                <ul className="list-disc list-inside ml-5 space-y-2">
                  <li className="flex items-center"><FaNodeJs className="text-green-500 mr-2" /> Node.js</li>
                  <li className="flex items-center"><FaServer className="text-green-500 mr-2" /> Express.js</li>
                  <li className="flex items-center"><FaDatabase className="text-yellow-500 mr-2" /> TypeScript</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <FaDatabase className="text-purple-500 mr-2" /> Database Technologies:
                </h3>
                <ul className="list-disc list-inside ml-5 space-y-2">
                  <li className="flex items-center"><FaDatabase className="text-blue-500 mr-2" /> MySQL</li>
                  <li className="flex items-center"><FaDatabase className="text-green-500 mr-2" /> MongoDB</li>
                  <li className="flex items-center"><FaDatabase className="text-yellow-500 mr-2" /> PostgreSQL</li>
                  <li className="flex items-center"><FaDatabase className="text-gray-500 mr-2" /> Prisma ORM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
