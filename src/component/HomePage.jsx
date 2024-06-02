import React, { useRef } from 'react';
import '../css/HomePage.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Lottie from 'lottie-react';
import waveSVG from '../assets/svg/101786-wave.json';
import emailSVG from '../assets/svg/95247-email.json';
import viteSVG from '../assets/svg/viteLogo.svg';
import netlifySVG from '../assets/svg/netlifyLogo.svg';
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
import sassSVG from '../assets/svg/sassLogo.svg';
import myResume from '../assets/pdf/GauravResume_offCampus.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faHtml5, faCss3, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Projects from './Projects';

export default function HomePage() {
  const ref = useRef();

  return (
    <div className="homePage">
      <Parallax pages={4} ref={ref}>
{/* Navigation Section */}
        <ParallaxLayer
          sticky={{ start: 0, end: 1.5 }}
          style={{ height: "fit-content" }}
        >
          <nav>
            <h1
              className="logo"
              ref={ref}
              onClick={() => ref.current.scrollTo(0)}
              style={{color:"purple"}}
            >
              गौरव शर्मा
              <span
                style={{
                  color: "rgb(217, 4, 41)",
                  fontFamily: "Helvetica",
                  fontSize: "65px",
                  margin: "0",
                }}
              >
                .
              </span>
            </h1>
            <ul className="navOptions">
              <li
                ref={ref}
                onClick={() =>
                  window.innerWidth < 768
                    ? ref.current.scrollTo(2.5)
                    : ref.current.scrollTo(2.25)
                }
                style={{color:"purple"}}
              >
                PROJECTS
              </li>
              <li ref={ref} onClick={() => ref.current.scrollTo(1)} style={{color:"purple"}}>
                RESUME
              </li>
              <li
                style={{ fontWeight: "300" }}
                ref={ref}
                onClick={() => ref.current.scrollTo(3)}
                style={{color:"purple"}}
              >
                CONTACT
              </li>
            </ul>
          </nav>
        </ParallaxLayer>
{/* Introduction Section */}
        <ParallaxLayer>
          <section className="introSection">
            <div style={{ display: "flex" }}>
              <div className="introText">
                <h1>I AM GAURAV SHARMA</h1>
                <h2>Electrical Engineering | NIT RKL'25</h2>
                <h2>MERN Developer</h2>
                <h2>
                  Based in Jaipur{" "}
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ color: "red" }}
                  />
                </h2>
                <div className="contactBtns">
                  <a
                    target="#"
                    href="https://www.linkedin.com/in/gaurav-sharma-9556b2196"
                  >
                    <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
                  </a>
                  <a target="#" href="https://github.com/gauravrdj">
                    <FontAwesomeIcon className="github" icon={faGithub} />
                  </a>
                </div>
              </div>
              <div className="profileImg"></div>
            </div>
          </section>
        </ParallaxLayer>
{/* SVG Transition Section */}
        {/* <ParallaxLayer offset={0.75} speed={1}>
          <Lottie className="lottieWave" animationData={waveSVG} />
        </ParallaxLayer> */}
{/* About Me Section */}
        <ParallaxLayer offset={1}>
          <section className="aboutMe">
            <div className="aboutIntro">
              <h2 style={{color:"purple"}}>ABOUT ME</h2>
              <p>
              Welcome to my portfolio! I am Gaurav Sharma, an aspiring Electrical Engineer currently in my prefinal year at NIT Rourkela. Alongside my core engineering studies, I am a passionate MERN stack developer with a strong foundation in C++ and Data Structures & Algorithms (DSA).  Let's connect and discuss how I can
                contribute to your web development team!
              </p>
            </div>
            <div className="aboutResume">
              <object
                data={myResume}
                width="100%"
                height="100%"
                type="application/pdf"
              />
              <a href={myResume}>Download</a>
            </div>
          </section>
          <section className="techStack">
            <h2 style={{color:"purple"}}>MY TECHSTACK</h2>
            <div className="scrollStack">
              <div className="stackLogos">
                <FontAwesomeIcon
                  className="htmlLogo"
                  icon={faHtml5}
                  style={{ color: "orangered" }}
                />
                <FontAwesomeIcon
                  className="cssLogo"
                  icon={faCss3}
                  style={{ color: "blue" }}
                />
                <FontAwesomeIcon
                  className="jsLogo"
                  icon={faJsSquare}
                  style={{ color: "gold" }}
                />
                {/* <img src={sassSVG} /> */}
                
                <FontAwesomeIcon
                  className="reactLogo"
                  icon={faReact}
                  style={{ color: "cyan" }}
                />
                <img src={viteSVG} />
                <img src={cpp} />
                <img src={netlifySVG} />
                <img src={tsLogoSVG} />
                <img src={node} />
                <img src={next} />
                <img src={git} />
                <img src={clodflare} />
                <img src={mongo} />
                <img src={turbo} />
                <img src={postgres} />
                <img src={express} />
                <img src={tailwind} />
              </div>
              <div className="stackLogos" aria-hidden="true">
                <FontAwesomeIcon
                  className="htmlLogo"
                  icon={faHtml5}
                  style={{ color: "orangered" }}
                />
                <FontAwesomeIcon
                  className="cssLogo"
                  icon={faCss3}
                  style={{ color: "blue" }}
                />
                <FontAwesomeIcon
                  className="jsLogo"
                  icon={faJsSquare}
                  style={{ color: "gold" }}
                />
                {/* <img src={sassSVG} /> */}
                <FontAwesomeIcon icon="fa-brands fa-node-js" />
                <FontAwesomeIcon
                  className="reactLogo"
                  icon={faReact}
                  style={{ color: "cyan" }}
                />
                <img src={viteSVG} />
                <img src={cpp} />
                <img src={netlifySVG} />
                <img src={tsLogoSVG} />
                <img src={node} />
                <img src={next} />
                <img src={git} />
                <img src={clodflare} />
                <img src={mongo} />
                <img src={turbo} />
                <img src={postgres} /> 
                <img src={express} />
                <img src={tailwind} />
              </div>
            </div>
          </section>
        </ParallaxLayer>
{/* Projects Section */}
        <ParallaxLayer offset={window.innerWidth < 768 ? 2.5 : 2.25}>
          <section className="projectSection">
            <h2 style={{color:"purple"}}>PROJECTS</h2>
            <Projects />
          </section>
        </ParallaxLayer>
{/* Contact Section */}
        <ParallaxLayer
          offset={3}
          speed={window.innerWidth < 768 ? 2 : 1}
          style={{ backgroundColor: "var(--body_background)" }}
        >
          <Lottie className="lottieEmail" animationData={emailSVG} />
          <section className="contactSection">
            <h2 style={{color:"purple"}}>LETS WORK</h2>
            <div className="formContainer">
              <form
                netlify
                name="contact"
                method="POST"
                onSubmit="submit"
                action=""
                className="contactForm"
              >
                <input type="hidden" name="form-name" value="contact" />

                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    required
                    aria-required="true"
                    placeholder='Gaurav Sharma'
                  />
                </label>

                <label htmlFor="email">
                  Email
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    aria-required="true"
                    placeholder='gauravjdh2021@gmail.com'
                  />
                </label>

                <label>
                  Message
                  <textarea
                    name="message"
                    rows="4"
                    required
                    aria-required="true"
                    placeholder='Hi There!'
                  ></textarea>
                </label>

                <button type="submit" >Submit</button>
              </form>
            </div>
          </section>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}