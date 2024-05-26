import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import viteSVG from '../assets/svg/viteLogo.svg';
import netlifySVG from '../assets/svg/netlifyLogo.svg';
import '../css/Projects.css';
import sassSVG from '../assets/svg/sassLogo.svg';
import webGenerator from '../assets/WebsiteGenerator.jpg';
import profile from '../assets/profile.png';
import paymentsApp from '../assets/paymentsApp.jpeg';
import medium from '../assets/medium.jpeg';
import authySite from '../assets/TicketAuthSite.jpg';
import { faArrowLeft, faArrowRight, faCircle } from '@fortawesome/free-solid-svg-icons';
import tsLogoSVG from '../assets/svg/tsLogo.svg';
import node from '../assets/svg/Node.js_logo.svg';
import next from '../assets/svg/next.svg';
import git from '../assets/svg/git.svg';
import clodflare from '../assets/svg/cloudflare.svg';
import mongo from '../assets/svg/mongo.svg';
import postgres from '../assets/svg/postgres.svg';
import turbo from '../assets/svg/turbo.svg';
import cpp from '../assets/svg/cpp.svg';
import tailwind from '../assets/svg/tailwind.svg';
import express from '../assets/svg/express.svg';
import prisma from '../assets/svg/prisma.svg';



export default function Projects() {
  const [activeIndex, setCurrentIndex] = useState(0);
  const reactLogo = <FontAwesomeIcon icon={faReact} style={{color:'cyan'}}/>
  const htmlLogo = <FontAwesomeIcon icon={faHtml5}  style={{color:'orangered'}}/>
  const cssLogo = <FontAwesomeIcon icon={faCss3}  style={{color:'blue'}}/>
  const jsLogo = <FontAwesomeIcon icon={faJsSquare}  style={{color:'gold'}}/>  
  const netlifyLogo = <img src={netlifySVG} className='netlifyLogo' alt="Netlify Logo"/>;
  const viteLogo = <img src={viteSVG} className='viteLogo' alt="Vite Logo"/>;
  const sassLogo = <img src={sassSVG} className='sassLogo' alt='Sass Logo'/>;
  const tsLogo = <img src={tsLogoSVG} className='viteLogo'></img>
  const nodeLogo = <img src={node} className='viteLogo'></img>
  const nextLogo = <img src={next} className='viteLogo'></img>
  const gitLogo = <img src={git} className='viteLogo'></img>
  const cloudflareLogo = <img src={clodflare} className='viteLogo'></img>
  const mongoLogo = <img src={mongo} className='viteLogo'></img>
  const postgresLogo = <img src={postgres} className='viteLogo'></img>
  const turboLogo = <img src={turbo} className='viteLogo'></img>
  const cppLogo = <img src={cpp} className='viteLogo'></img>
  const tailwindLogo = <img src={tailwind} className='viteLogo'></img>
  const expressLogo = <img src={express} className='viteLogo'></img>
  const prismaLogo = <img src={prisma} className='viteLogo'></img>

  function updateIndex(newIndex) {
    newIndex < 0
      ? newIndex = 0
      : newIndex >= projects.length 
      ? newIndex = projects.length - 1 
      : newIndex
    setCurrentIndex(newIndex);
  }

  const projects = [
    {
      name: "Payments App",
      techstack: (
        <>
          {viteLogo}
          {reactLogo}
          {jsLogo}
          {nodeLogo}
          {expressLogo}
          {tailwindLogo}
          {mongoLogo}
        </>
      ),
      dependencies: (
        <>
          
          <p>Mongoose Sessions</p>
          <p>React Router</p>
          <p>Zod</p>
          <p>JWT</p>
        </>
      ),
      description: (
        <>
          <ul>
            <li>
            Designed and implemented a fully secure payment application facilitating user-to-user money transfers.
            </li>
            <li>
            Prioritized user safety by employing industry standard security protocols and addressing real-time transaction
 success and failure scenarios.
            </li>
            <li>
            Leveraged Mongoose sessions for efficient transaction tracking and stored user data securely in MongoDB.
            </li>
            <li>
            Crafted a scalable and performant backend utilizing Express.js and Node.js and a frontend using React and
 Tailwind.
            </li>
          </ul>
        </>
      ),
      demoUrl: "https://securetransaction.netlify.app/",
      image: paymentsApp,
    },
    {
      name: "Medium: Publishing platform",
      techstack: (
        <>
          {viteLogo}
          {reactLogo}
          {tsLogo}
          {postgresLogo}
          {prismaLogo}
          {cloudflareLogo}
        </>
      ),
      dependencies: (
        <>
          
          
          <p>Hono</p>
          <p>ServerLess Backends</p>
          <p>Prisma - ORM</p>
          <p>JWT</p>
          <p>Zod</p>
        </>
      ),
      description: (
        <>
          <ul>
            <li>
            Developed a Medium-like publishing web application using TypeScript and Hono on the backend, leveraging
 Cloudflare for enhanced security and performance.
            </li>
            <li>
            Implemented a robust frontend using React and Tailwind CSS, focusing on user experience and modern design
 principles.
            </li>
            <li>
            Utilized PostgreSQL as the database management system, integrated seamlessly with Prisma ORM for efficient
 data handling and manipulation.
            </li>
            <li>
            Implemented input validation using Zod and secured user authentication with JWT, ensuring data integrity and
 user privacy throughout the application.
            </li>
          </ul>
        </>
      ),
      demoUrl: "https://publishingmedium.netlify.app/",
      image: medium,
    },
    {
      name: " Dynamic Profile Management System",
      techstack: (
        <>
          {/* {viteLogo} */}
          {reactLogo}
          {jsLogo}
          {nodeLogo}
          {expressLogo}
          {tailwindLogo}
          {mongoLogo}
        </>
      ),
      dependencies: (
        <>
          <p>Dynamic Routing</p>
          <p>React-Router-Dom</p>
        </>
      ),
      description: (
        <>
          <ul>
            <li>
            Created a web application allowing users to manage multiple profiles (e.g., LinkedIn, GitHub, Facebook) by
 dynamically adding profile links.
            </li>
            <li>
            Implemented using React for the front end, Node.js with Express.js for the back end, and MongoDB for data
 management.
            </li>

            <li>
            Users can access their profiles just by using their name and profile name. 
            </li>
            <br />
            <li> Ex.- <a href="https://getmyprofile.netlify.app/gaurav/leetcode">/gaurav/leetcode</a></li>
          </ul>
        </>
      ),
      demoUrl: "https://getmyprofile.netlify.app/",
      image: profile,
    },
    // {
    //   name: "Ticket Authentication Site",
    //   techstack: (
    //     <>
    //       {viteLogo}
    //       {reactLogo}
    //       {jsLogo}
    //       {sassLogo}
    //     </>
    //   ),
    //   dependencies: (
    //     <>
    //       {netlifyLogo}
    //       <p>React Context</p>
    //     </>
    //   ),
    //   description: (
    //     <>
    //       <p>
    //         This website explores mock <em>form validation techniques</em> with
    //         features such as being able to generate a randomized custom ticket
    //         in similar format to a gift or CC. The form may only be submitted if
    //         the proper mock data is supplied to the appropriate fields.
    //       </p>
    //     </>
    //   ),
    //   demoUrl: "https://authentix.netlify.app/",
    //   image: authySite,
    // },
    // {
    //   name: "Random Website Generator",
    //   techstack: (
    //     <>
    //       {htmlLogo}
    //       {cssLogo}
    //       {jsLogo}
    //     </>
    //   ),
    //   dependencies: <>{netlifyLogo}</>,
    //   description: (
    //     <>
    //       <p>
    //         This website is powered by HTML, CSS, JavaScript and{" "}
    //         <em>deployed with Netlify</em>. This tool immerses users in a
    //         recreation of the Windows XP operating system, complete with a
    //         pseudo Microsoft Paint allowing users to create digital artworks and
    //         save them locally, a pseudo Internet Explorer that serves as a
    //         random website generator allowing users to visit over 100 websites
    //         from all corners of the internet, and a live messaging system to
    //         chat with other visitors who have visited, this project transports
    //         users back in time in a trip down memory lane to relive the charm of
    //         the past through a modern lens.
    //       </p>
    //     </>
    //   ),
    //   demoUrl: "https://thedesktop.netlify.app",
    //   image: webGenerator,
    // },
  ];

  return (
    <div className="projectWheelContainer" onTouchMove={updateIndex}>
      <div
        className="projectWheel"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {projects.map((project, index) => {
          return (
            <section className="project" key={index}>
              <div className='projectImg'>
                <img src={project.image} />
              </div>
              <div className='projectInfo'>
                <h3>{project.name}</h3>
                <div className='projectStacks'>
                  {project.techstack}
                </div>
                <div className='projectDeps'>
                  {project.dependencies}
                </div>
                <div className='projectDesc'>
                  {project.description}
                </div>
                <a target='_blank' href={project.demoUrl}>Live Demo</a>
              </div>
            </section>
          );
        })}
      </div>

      <div className="wheel-btns">
        <button
          className="btn-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span>
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>{" "}
        </button>
        <div className="indicators">
          {projects.map((project, index) => {
            return (
              <button
                className="indicator-btns"
                onClick={() => {
                  updateIndex(index);
                }}>
                <span className={
                  `${index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                    }`
                  }>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="btn-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>
    </div>
  );
}
