import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className='min-h-screen px-10 py-[120px] md:px-20 bg-[#0d1117] text-[#c9d1d9] font-jetbrains'>
      <div className='text-4xl font-light'>cd &gt; REPOS</div>
      <br />
      <br />
      <div className='text-2xl'>
        Following is a small selection of my WebDev projects :)
      </div>
      <br />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
        <ProjectCard
          title='Personal Portfolio'
          description='This is my personal portfolio site where I’ve put together all the cool stuff I’ve worked on—projects, internships, open-source contributions, and more. It’s got:'
          features={[
            "A clean, responsive design that works on all devices",
            "A tech stack section showing what tools and languages I use",
            "A quick rundown of my experiences",
            "Smooth navigation and minimalistic UI",
          ]}
          github='https://github.com/anishahaha07'
          live='' // optional
          closingLine='It was a great chance to sharpen my skills and experiment a bit too.'
        />

        <ProjectCard
          title='Bookstore'
          description="A sleek web app where you can explore a bookstore's catalog, viewing details like titles, descriptions, and subjects. Built with React and styled using Tailwind CSS, it fetches real-time data from the Open Library API."
          features={[
            " Live Book Search using Open Library API",
            "Fast & responsive UI with Tailwind CSS",
            "Detailed info on each book (title, description, subjects)",
          ]}
          github='https://github.com/anishahaha07/bookstore'
          live='https://bookstore-xi-sable.vercel.app/'
          closingLine='Turns out building a bookstore app is just as fun as reading one!'
        />

        <ProjectCard
          title='Urban Nomad'
          description='A minimal blogging site where users can read and share posts. I made it to explore how content-driven platforms work, and kept it clean and simple.'
          features={[
            "Clean UI with markdown-like feel",
            "Home page with recent articles",
            "Compose and publish blog posts",
          ]}
          github='https://github.com/anishahaha07/blogging'
          live='https://blogging-flame.vercel.app/'
          closingLine='Built it to write stories—ended up writing code instead'
        />

        <ProjectCard
          title='ArtAxis'
          description='A sleek web app to showcase artwork in a visually appealing gallery layout. Built to give each piece the spotlight it deserves, with a smooth and minimal aesthetic.'
          features={[
            "Dynamic image grid to display artworks",
            "Responsive design for all devices",
            "Lightweight and fast-loading UI.",
          ]}
          github='https://github.com/anishahaha07/art-gallery-project'
          live='https://live-demo-link.com'
          closingLine='Because art deserves a space as beautiful as the work itself. '
        />
      </div>
    </div>
  );
};

export default Projects;
