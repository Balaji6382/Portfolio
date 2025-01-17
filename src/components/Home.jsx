import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
  return (
    <div id="home" className="bg-[#FFFFFF]">
      <div className="max-w-[85%] mx-auto font-inter grid grid-cols-1 md:grid-cols-2 gap-8 items-center  min-h-screen">
        {/* Left Section */}
        <div className="order-2 lg:order-1 flex flex-col items-center md:items-start justify-start space-y-5 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">
            I’m <span className="text-[#fe5617]">Balaji D</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold flex gap-2">
            <span className="text-[#fe5617]">I’m a</span>
            <Typewriter
              options={{
                strings: [
                  "AI/ML Enthusiast.",
      "AI Developer.",
      "Machine Learning Researcher.",
      "Deep Learning Practitioner.",
      "AI Innovator.",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>
          {/* About Me */}
          <p className="text-lg md:text-xl text-gray-700 font-medium">
          I'm an AI/ML developer passionate about using technology to solve problems. With hands-on experience in machine learning and deep learning models , I love learning and sharing what I know to help others grow. Learning never stops, and I strive to make AI accessible to all.
</p>


          {/* Contact Information */}
          <div className=" flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-6 text-lg md:text-xl font-semibold ">
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-[#fe5617]" size={20} />
              <span>Udumalpet</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#fe5617]" size={20} />
              <span>6382141607</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#fe5617]" size={20} />
              <span>balajidevaraj18@gmail.com</span>
            </div>
          </div>
          {/* Button */}
          <div className="bg-[#fe5617] px-5 py-2 rounded-2xl font-bold">
  <a href="public/22bam034_resume.pdf" download="Balaji-D-resume">Download CV</a>
</div>

        </div>

        {/* Right Section */}
        <div className="order-1 lg:order-2 flex justify-end items-center p-4">
  <img
    className="w-[90%] sm:w-[90%] md:w-[75%] lg:w-[60%] rounded-full border-4 border-white shadow-lg hover:scale-105 focus:scale-105 active:scale-105 transition-transform duration-300"
    src="/balaji.jpeg"
    alt="Profile"
  />
</div>


      </div>
    </div>
  );
};

export default Home;
