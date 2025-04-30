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
import myImage from "../assets/myBgImage.jpg"; // Replace this with your actual image path

const frontend = [
  { name: "HTML", icon: <FaHtml5 className='text-orange-500 text-3xl' /> },
  { name: "CSS", icon: <FaCss3Alt className='text-blue-500 text-3xl' /> },
  {
    name: "JavaScript",
    icon: <TbBrandJavascript className='text-yellow-400 text-3xl' />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className='text-cyan-400 text-3xl' />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className='text-purple-500 text-3xl' />,
  },
  { name: "PHP", icon: <FaPhp className='text-indigo-400 text-3xl' /> },
  { name: "ReactJS", icon: <FaReact className='text-blue-400 text-3xl' /> },
];

const backend = [
  { name: "PHP", icon: <FaPhp className='text-indigo-400 text-3xl' /> },
  { name: "MySQL", icon: <SiMysql className='text-yellow-200 text-3xl' /> },
  { name: "MongoDB", icon: <SiMongodb className='text-green-500 text-3xl' /> },
  {
    name: "Supabase",
    icon: <RiSupabaseLine className='text-emerald-400 text-3xl' />,
  },
];

const prglang = [
  { name: "C++", icon: <PiFileCpp className='text-indigo-400 text-3xl' /> },
  { name: "Python", icon: <FaPython className='text-yellow-200 text-3xl' /> },
  { name: "Java", icon: <FaJava className='text-blue-500 text-3xl' /> },
];

const tools = [
  { name: "Docker", icon: <FaDocker className='text-blue-600 text-3xl' /> },
  { name: "Figma", icon: <FaFigma className='text-red-300 text-3xl' /> },
  {
    name: "MS-Excel",
    icon: <PiMicrosoftExcelLogoFill className='text-green-400 text-3xl' />,
  },
  {
    name: "MS-PowerPoint",
    icon: (
      <PiMicrosoftPowerpointLogoDuotone className='text-orange-400 text-3xl' />
    ),
  },
  {
    name: "MS-Word",
    icon: <PiMicrosoftWordLogoThin className='text-blue-800 text-3xl' />,
  },
];

const AboutMe = () => {
  return (
    <div className='min-h-screen px-6 sm:px-10 md:px-20 py-[120px] bg-[#0d1117] text-[#c9d1d9] font-jetbrains'>
      <div className='text-4xl font-light'>cd &gt; README.MD</div>
      <br />
      <br />
      <br />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* Photo Section */}
        {/* Photo Section with Gradient Background */}
        <div className='flex justify-center md:justify-start'>
          <img
            src={myImage}
            alt='Anisha'
            className='w-60 h-60 sm:w-72 sm:h-72 lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] rounded-full object-cover'
          />
        </div>
        {/* About and Skills */}
        <div>
          <div className='text-3xl'>Hola! I am Anisha Bhandare!</div>
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
              <h3 className='text-xl font-semibold mb-2'>
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

          {/* Open Source Section */}
          <section className='mt-10'>
            <h2 className='text-2xl md:text-3xl font-bold text-[#10b981] mb-4'>
              Open Source Experience
            </h2>
            <div className='bg-[#161b22] p-6 rounded-lg border border-[#30363d] shadow-md'>
              <h3 className='text-xl font-semibold mb-2'>
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
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Skills Section (Full Width) */}
      <div className='mt-20'>
        <h2 className='text-2xl md:text-3xl font-bold text-[#10b981] mb-6'>
          Skills
        </h2>
        <div className='space-y-6'>
          {/* Frontend */}
          <SkillBlock title='Frontend' data={frontend} />

          {/* Backend */}
          <SkillBlock title='Backend and Databases' data={backend} />

          {/* Programming Languages */}
          <SkillBlock title='Programming Languages' data={prglang} />

          {/* Tools */}
          <SkillBlock title='Tools' data={tools} />
        </div>
      </div>
    </div>
  );
};

const SkillBlock = ({ title, data }) => (
  <div>
    <h3 className='text-xl md:text-2xl font-bold text-[#a2a7a5] mb-2'>
      {title}
    </h3>
    <div className='flex flex-wrap gap-3'>
      {data.map((item) => (
        <div
          key={item.name}
          className='flex items-center gap-3 px-6 py-4 bg-[#161b22] border border-[#30363d] rounded-md font-inconsolata text-base font-medium hover:scale-105 hover:shadow-md transition-transform duration-200 ease-in-out'
        >
          {item.icon}
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default AboutMe;
