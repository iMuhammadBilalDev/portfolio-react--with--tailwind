import React from "react";
import image from "../assets/Mypic.png";
function Home() {
  return (
    <section
      id="home"
      className="h-screen flex items-center bg-gray-100 text-center"
    >
      <div className="flex-1 flex flex-col justify-center items-start pl-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Hi, I'm Bilal
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mt-4">
          I create beautiful web experiences
        </p>
        <a
          href="#projects"
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500"
        >
          View My Work
        </a>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src={image}
          alt="Profile"
          className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full border-4 border-blue-600 shadow-lg"
        />
      </div>
    </section>
  );
}

export default Home;
