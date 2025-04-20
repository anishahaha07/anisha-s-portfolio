import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaPhp,
  FaPython,
  FaJava,
  FaFigma,
  FaDocker,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  PiMicrosoftExcelLogoFill,
  PiFileCpp,
  PiMicrosoftWordLogoThin,
  PiMicrosoftPowerpointLogoDuotone,
} from "react-icons/pi";

import { RiSupabaseLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiMysql } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoGmail } from "react-icons/bi";
import myImage from "../assets/myBgImage.jpg";

// import { motion } from "framer-motion"; // uncomment if animations are needed later

const frontend = [
  {
    name: "HTML",
    icon: <FaHtml5 className='text-orange-500 text-3xl flex-shrink-0' />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className='text-blue-500 text-3xl flex-shrink-0' />,
  },
  {
    name: "JavaScript",
    icon: (
      <TbBrandJavascript className='text-yellow-400 text-3xl flex-shrink-0' />
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <RiTailwindCssFill className='text-cyan-400 text-3xl flex-shrink-0' />
    ),
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className='text-purple-500 text-3xl flex-shrink-0' />,
  },
  {
    name: "PHP",
    icon: <FaPhp className='text-indigo-400 text-3xl flex-shrink-0' />,
  },
  {
    name: "ReactJS",
    icon: <FaReact className='text-blue-400 text-3xl flex-shrink-0' />,
  },
];

const backend = [
  {
    name: "PHP",
    icon: <FaPhp className='text-indigo-400 text-3xl flex-shrink-0' />,
  },
  {
    name: "MySQL",
    icon: <SiMysql className='text-yellow-200 text-3xl flex-shrink-0' />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className='text-green-500 text-3xl flex-shrink-0' />,
  },
  {
    name: "Supabase",
    icon: (
      <RiSupabaseLine className='text-emerald-400 text-3xl flex-shrink-0' />
    ),
  },
];

const prglang = [
  {
    name: "C++",
    icon: <PiFileCpp className='text-indigo-400 text-3xl flex-shrink-0' />,
  },
  {
    name: "Python",
    icon: <FaPython className='text-yellow-200 text-3xl flex-shrink-0' />,
  },
  {
    name: "Java",
    icon: <FaJava className='text-blue-500 text-3xl flex-shrink-0' />,
  },
];

const tools = [
  {
    name: "Docker",
    icon: <FaDocker className='text-blue-600 text-3xl flex-shrink-0' />,
  },
  {
    name: "Figma",
    icon: <FaFigma className='text-red-300 text-3xl flex-shrink-0' />,
  },
  {
    name: "MS-Excel",
    icon: (
      <PiMicrosoftExcelLogoFill className='text-green-400 text-3xl flex-shrink-0' />
    ),
  },
  {
    name: "MS-PowerPoint",
    icon: (
      <PiMicrosoftPowerpointLogoDuotone className='text-orange-400 text-3xl flex-shrink-0' />
    ),
  },
  {
    name: "MS-Word",
    icon: (
      <PiMicrosoftWordLogoThin className='text-blue-800 text-3xl flex-shrink-0' />
    ),
  },
];

const AboutMe = () => {
  return (
    <div className='min-h-screen px-10 py-[120px] md:px-20 bg-[#0d1117] text-[#c9d1d9] font-jetbrains'>
      <div className='text-4xl font-light'>cd &gt; README.MD </div>
      <br />
      <br />
      <br />
      <div className='grid grid-cols-2'>
        <div className='grid col-span-1'>
          <div className='text-3xl'>Hola! I am Anisha Bhandare !</div>
          <br />
          <p className='text-base md:text-lg leading-relaxed tracking-wide'>
            I am a Computer-Engineering student with a passion for building
            clean, useful, and aesthetic digital experiences. I blend creativity
            with code and love making things work seamlessly.
          </p>

          {/* Internship Section */}
          <section className='mt-10'>
            <h2 className='text-2xl md:text-3xl font-bold text-[#10b981] mb-4'>
              Internship Experience
            </h2>
            <div className='bg-[#161b22] p-6 rounded-lg border border-[#30363d] shadow-md'>
              <h3 className='text-xl font-semibold text-[#c9d1d9] mb-2'>
                Austere Systems Limited{" "}
                <span className='text-sm text-[#8b949e]'>(1 Month)</span>
              </h3>
              <p className='text-[#c9d1d9]/90 leading-relaxed tracking-wide'>
                As a Software Developer Intern, I contributed to building
                responsive and dynamic web interfaces using technologies like
                ReactJS, HTML, CSS, Bootstrap, PHP, and MySQL. I designed
                separate login systems for admins and users, allowing job
                postings and applications. This role sharpened my frontend,
                authentication, and database skills, while also enhancing my
                teamwork, clean code habits, and documentation practices.
              </p>
            </div>
          </section>
          <section className='mt-10'>
            <h2 className='text-2xl md:text-3xl font-bold text-[#10b981] mb-4'>
              Open Source Experience
            </h2>
            <div className='bg-[#161b22] p-6 rounded-lg border border-[#30363d] shadow-md'>
              <h3 className='text-xl font-semibold text-[#c9d1d9] mb-2'>
                Winter of Code 4.0 – Devfolio
              </h3>
              <p className='text-[#c9d1d9]/90 leading-relaxed tracking-wide'>
                I was selected as a contributor for Winter of Code 4.0 organized
                by Devfolio, where I contributed to the open source framework{" "}
                <span className='text-[#10b981] font-semibold'>Brisa</span>. My
                contributions involved integrating{" "}
                <span className='text-[#10b981] font-semibold'>
                  Shoelace Web Components
                </span>
                , enhancing developer experience, fixing terminal warnings,
                improving SSR support, and writing custom ESLint rules for
                consistent coding practices.
                <br />
                <br />
                This experience deepened my understanding of modern web
                frameworks, collaborative development on GitHub, and the
                importance of writing clean, maintainable code in a
                community-driven project.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className='mt-10'>
            <h2 className='text-2xl md:text-3xl font-bold text-[#10b981] mb-4'>
              Skills
            </h2>
            <h2 className='text-xl md:text-2xl font-bold text-[#a2a7a5] mb-4'>
              Frontend
            </h2>
            <div className='flex flex-wrap gap-3'>
              {frontend.map((frontend) => (
                <div
                  key={frontend.name}
                  className='flex items-center gap-3 px-6 py-4 bg-[#161b22] border border-[#30363d] text-[#c9d1d9] rounded-md font-inconsolata text-base font-medium hover:scale-105 hover:shadow-md transition-transform duration-200 ease-in-out'
                >
                  {frontend.icon}
                  <span>{frontend.name}</span>
                </div>
              ))}
            </div>{" "}
            <br />
            <h2 className='text-xl md:text-2xl font-bold text-[#a2a7a5] mb-4'>
              Backend and Databases
            </h2>
            <div className='flex flex-wrap gap-3'>
              {backend.map((backend) => (
                <div
                  key={backend.name}
                  className='flex items-center gap-3 px-6 py-4 bg-[#161b22] border border-[#30363d] text-[#c9d1d9] rounded-md font-inconsolata text-base font-medium hover:scale-105 hover:shadow-md transition-transform duration-200 ease-in-out'
                >
                  {backend.icon}
                  <span>{backend.name}</span>
                </div>
              ))}
            </div>
            <br />
            <h2 className='text-xl md:text-2xl font-bold text-[#a2a7a5] mb-4'>
              Programming Languages
            </h2>
            <div className='flex flex-wrap gap-3'>
              {prglang.map((prglang) => (
                <div
                  key={prglang.name}
                  className='flex items-center gap-3 px-6 py-4 bg-[#161b22] border border-[#30363d] text-[#c9d1d9] rounded-md font-inconsolata text-base font-medium hover:scale-105 hover:shadow-md transition-transform duration-200 ease-in-out'
                >
                  {prglang.icon}
                  <span>{prglang.name}</span>
                </div>
              ))}
            </div>
            <br />
            <h2 className='text-xl md:text-2xl font-bold text-[#a2a7a5] mb-4'>
              Tools
            </h2>
            <div className='flex flex-wrap gap-3'>
              {tools.map((tools) => (
                <div
                  key={tools.name}
                  className='flex items-center gap-3 px-6 py-4 bg-[#161b22] border border-[#30363d] text-[#c9d1d9] rounded-md font-inconsolata text-base font-medium hover:scale-105 hover:shadow-md transition-transform duration-200 ease-in-out'
                >
                  {tools.icon}
                  <span>{tools.name}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className='grid col-span-1'>
          <div className='flex flex-col items-center pt-16 md:pt-28 space-y-6'>
            {/* Profile Image */}
            <div className='w-100 h-100 rounded-full overflow-hidden shadow-lg'>
              <img
                src={myImage}
                alt='Anisha Bhandare'
                className='w-full h-full object-cover'
              />
            </div>

            {/* Social Icons */}
            <div className='flex space-x-4'>
              <a
                href='https://github.com/anishahaha07'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-700 hover:text-white text-4xl transition-transform transform hover:scale-110'
              >
                <FaGithub />
              </a>
              <a
                href='https://www.linkedin.com/in/anisha-bhandare-21583722b/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-700 hover:text-blue-400 text-4xl transition-transform transform hover:scale-110'
              >
                <FaLinkedin />
              </a>
              <a
                href='mailto:bhandare.ani@gmail.com'
                className='text-red-500 hover:text-red-700 text-4xl transition-transform transform hover:scale-110'
              >
                <BiLogoGmail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
