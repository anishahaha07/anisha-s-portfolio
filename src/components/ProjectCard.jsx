import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  features,
  github,
  live,
  closingLine,
}) => {
  return (
    <div className='bg-[#161b22] p-6 rounded-lg border border-[#30363d] shadow-md text-lg'>
      <h3 className='text-xl font-semibold text-[#c9d1d9] mb-2'>{title}</h3>
      <p className='text-[#c9d1d9]/90 leading-relaxed tracking-wide'>
        {description}
      </p>
      <ul className='list-disc list-inside text-[#c9d1d9]/90 leading-relaxed tracking-wide mt-2'>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <p className='text-[#c9d1d9]/90 leading-relaxed tracking-wide mt-2'>
        <b>{closingLine}</b>
        <br />
        <br />
        <b className='text-[#10b981]'>You can check it out below:</b>
      </p>
      <div className='flex space-x-4 mt-3 text-2xl'>
        {github && (
          <a
            href={github}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-white transition-transform transform hover:scale-110'
          >
            <FaGithub />
          </a>
        )}
        {live && (
          <a
            href={live}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-white transition-transform transform hover:scale-110'
          >
            <FaExternalLinkAlt />
          </a>
        )}
      </div>
    </div>
  );
};
export default ProjectCard;
