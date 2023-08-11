import Spline from '@splinetool/react-spline';
import { useState, useRef, useEffect } from 'react';
import cpp from "../img/C++.png";
import python from "../img/Python.png";
import js from "../img/JS.png";
import htmlcss from "../img/HTMLCSS.png";
import sql from "../img/SQL.png";
import react from "../img/React.png";
import node from "../img/Node.png";
import express from "../img/Express.png";
import bootstrap from "../img/Bootstrap.png";
import tailwind from "../img/Tailwind.png";
import mui from "../img/MUI.png";
import git from "../img/Git.svg";
import vsc from "../img/VSC.png";
import vs from "../img/VS.png";
import firebase from "../img/Firebase.png";
import postman from "../img/Postman.png";
import cmake from "../img/CMake.png";
import chromedt from "../img/ChromeDT.png";
import firestore from "../img/Firestore.png";
import storage from "../img/Storage.png";
import postgres from "../img/Postgres.png";
import mariadb from "../img/MariaDB.png";
import mongodb from "../img/mongoDB.png";
import mysql from "../img/MySQL.png";
import email from "../img/Email.gif";
import { WiMoonAltNew } from "react-icons/wi";
import { WiMoonAltFull } from "react-icons/wi";
import React from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

function Home() {
    const [Card1, setCard1] = useState(0);
    const [Card2, setCard2] = useState(0);
    const [Card3, setCard3] = useState(0);
    const [Card4, setCard4] = useState(0);

    const [smallScreen, setSmallScreen] = useState(window.innerWidth <= 768);

    useEffect(() => {
      const pageResize = () => {
        setSmallScreen(window.innerWidth <= 768);
      };
      window.addEventListener('resize', pageResize);

      return () => {
        window.removeEventListener('resize', pageResize);
      };
    }, []);

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

    emailjs.sendForm('service_q73wqf4', 'template_o1dgmkf', form.current, '4Utl-qsFakTzZqR_R')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      alert("Message Sent!");
    };

    const settingCard = (cardNum, cardMax, cardMethod) => {
      if(cardNum === cardMax)
      {
        cardMethod(0);
      }
      else
      {
        cardMethod(cardNum + 1);
      }
    }

    const card1 = (cards) => {
      switch(cards) {
        case 1:
          return <div className='text-center w-56'>
          <div className='pb-12 text-black font-mono font-bold text-xs lg:text-3xl'>Languages</div>
          <img className='w-full pb-8' alt="python icon" src={python}></img>
          <div className='text-yellow-600 font-bold text-xl'>Python</div>
          <div className='pt-5 flex flex-row justify-center w-[50%] ml-7 lg:w-full lg:ml-0'>
            <WiMoonAltFull color='black'/>
            <WiMoonAltNew color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
          </div>
        </div>;
        case 2:
          return <div className='text-center w-48'>
          <div className='pb-12 text-black font-mono font-bold text-xs lg:text-3xl'>Languages</div>
          <img className='w-full pb-8 drop-shadow-2xl' alt='javascript icon' src={js}></img>
          <div className='text-[#EFD81B] font-bold text-xl'>Javascript</div>
          <div className='pt-5 flex flex-row justify-center w-[50%] ml-7 lg:w-full lg:ml-0'>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltNew color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
          </div>
        </div>;
        case 3:
          return <div className='text-center w-72'>
          <div className='pb-16 text-black font-mono font-bold text-xs lg:text-3xl'>Languages</div>
          <img className='w-full pb-16 drop-shadow-2xl' alt='html and css icon' src={htmlcss}></img>
          <div className='text-[#244BDD] font-bold text-xl'>HTML and CSS</div>
          <div className='pt-5 flex flex-row justify-center w-[50%] ml-7 lg:w-full lg:ml-0'>
            <WiMoonAltFull color='#05386B'/>
            <WiMoonAltFull color='#05386B'/>
            <WiMoonAltFull color='#05386B'/>
            <WiMoonAltNew color='#05386B'/>
            <WiMoonAltFull color='#05386B'/>
          </div>
        </div>;
        case 4:
          return <div className='text-center w-40'>
          <div className='pb-14 text-black font-mono font-bold text-xs lg:text-3xl'>Languages</div>
          <img className='w-full pb-8 drop-shadow-2xl' alt='sql icon' src={sql}></img>
          <div className='text-[#9C27B0] font-bold text-xl'>SQL</div>
          <div className='pt-5 flex flex-row justify-center w-[50%] ml-7 lg:w-full lg:ml-0'>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltNew color='black'/>
          </div>
        </div>;
        default:
          return <div className='text-center w-48'>
            <div className='pb-12 text-black font-mono font-bold text-xs lg:text-3xl'>Languages</div>
            <img className='w-full pb-8 drop-shadow-2xl' alt='C++ icon' src={cpp}></img>
            <div className='text-[#379683] font-bold text-xl'>C++</div>
            <div className='pt-5 flex flex-row justify-center w-[50%] ml-7 lg:w-full lg:ml-0'>
              <WiMoonAltNew color='black'/>
              <WiMoonAltFull color='black'/>
              <WiMoonAltFull color='black'/>
              <WiMoonAltFull color='black'/>
              <WiMoonAltFull color='black'/>
            </div>
          </div>;
      }
    }

    const card2 = (cards) => {
      switch(cards) {
        case 1:
          return <div className='text-center w-60'>
          <div className='pb-12 text-black font-mono font-bold text-xs lg:text-3xl'>Frameworks</div>
          <img className='w-full pb-4 drop-shadow-2xl' alt='node.js icon' src={node}></img>
          <div className='text-[#79B262] font-bold text-xl'>Node.js</div>
          <div className='pt-2 flex flex-row justify-center w-[50%] ml-8 lg:w-full lg:ml-0'>
            <WiMoonAltFull color='black'/>
            <WiMoonAltNew color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
          </div>
        </div>;
        case 2:
          return <div className='text-center w-60'>
          <div className='pb-12 text-black font-mono font-bold text-xs lg:text-3xl'>Frameworks</div>
          <img className='w-full pb-4 drop-shadow-2xl' alt='express icon' src={express}></img>
          <div className='text-yellow-500 font-bold text-xl'>Express</div>
          <div className='pt-2 flex flex-row justify-center w-[50%] ml-8 lg:w-full lg:ml-0'>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltNew color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
          </div>
        </div>;
        case 3:
          return <div className='text-center w-72'>
          <div className='pb-12 text-black font-mono font-bold text-xs lg:text-3xl'>Frameworks</div>
          <img className='w-full pb-4 drop-shadow-2xl' alt='bootstrap icon' src={bootstrap}></img>
          <div className='text-[#8411F5] font-bold text-xl'>Bootstrap</div>
          <div className='pt-2 flex flex-row justify-center w-[50%] ml-8 lg:w-full lg:ml-0'>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltNew color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
          </div>
        </div>;
        case 4:
          return <div className='text-center w-72'>
          <div className='pb-12 text-black font-mono font-bold text-xs lg:text-3xl'>Frameworks</div>
          <img className='w-full pb-4 drop-shadow-2xl' alt='Tailwind.css icon' src={tailwind}></img>
          <div className='pt-10 text-[#06B0CE] font-bold text-xl'>Tailwind CSS</div>
          <div className='pt-2 flex flex-row justify-center w-[50%] ml-8 lg:w-full lg:ml-0'>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltNew color='black'/>
            <WiMoonAltFull color='black'/>
          </div>
        </div>;
        case 5:
          return <div className='text-center w-64'>
          <div className='pb-12 text-black font-mono font-bold text-xs lg:text-3xl'>Frameworks</div>
          <img className='w-full pb-4 drop-shadow-2xl' alt='mui icon' src={mui}></img>
          <div className='text-[#027FFE] font-bold text-xl'>Material UI</div>
          <div className='pt-2 flex flex-row justify-center w-[50%] ml-8 lg:w-full lg:ml-0'>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltNew color='black'/>
          </div>
        </div>;
        default:
          return <div className='text-center w-56'>
          <div className='pb-12 text-black font-mono font-bold text-xs lg:text-3xl'>Frameworks</div>
          <img className='w-full pb-4 drop-shadow-2xl' alt='react icon' src={react}></img>
          <div className='text-[#5FD3F3] font-bold text-xl'>React</div>
          <div className='pt-2 flex flex-row justify-center w-[50%] ml-8 lg:w-full lg:ml-0'>
            <WiMoonAltNew color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
          </div>
        </div>;
      }
    }

    const card3 = (cards) => {
      switch(cards) {
        case 1:
          return <div className='text-center w-48'>
          <div className='pb-16 text-black font-mono font-bold text-xs lg:text-3xl'>Developer Tools</div>
          <img className='w-full pb-4 drop-shadow-2xl' alt='vs code icon' src={vsc}></img>
          <div className='text-[#3DAAF2] font-bold text-xl'>Visual Studio Code</div>
          <div className='pt-2 flex flex-row justify-center w-[50%] ml-9 lg:w-full lg:ml-0'>
            <WiMoonAltFull color='black'/>
            <WiMoonAltNew color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
          </div>
        </div>;
        case 2:
          return <div className='text-center w-48'>
          <div className='pb-16 text-black font-mono font-bold text-xs lg:text-3xl'>Developer Tools</div>
          <img className='w-full pb-4 drop-shadow-2xl' alt='vs icon' src={vs}></img>
          <div className='text-[#9060C9] font-bold text-xl'>Visual Studio</div>
          <div className='pt-2 flex flex-row justify-center w-[50%] ml-9 lg:w-full lg:ml-0'>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltNew color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
          </div>
        </div>;
        case 3:
          return <div className='text-center w-48'>
          <div className='pb-16 text-black font-mono font-bold text-xs lg:text-3xl'>Developer Tools</div>
          <img className='w-full pb-4 drop-shadow-2xl' alt='firebase icon' src={firebase}></img>
          <div className='text-[#FFCB2B] font-bold text-xl'>Firebase</div>
          <div className='pt-2 flex flex-row justify-center w-[50%] ml-9 lg:w-full lg:ml-0'>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltNew color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
          </div>
        </div>;
        case 4:
          return <div className='text-center w-48'>
          <div className='pb-16 text-black font-mono font-bold text-xs lg:text-3xl'>Developer Tools</div>
          <img className='w-full pb-4 drop-shadow-2xl' alt='postman icon' src={postman}></img>
          <div className='text-[#FC6C35] font-bold text-xl'>Postman</div>
          <div className='pt-2 flex flex-row justify-center w-[50%] ml-9 lg:w-full lg:ml-0'>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltNew color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
          </div>
        </div>;
        case 5:
          return <div className='text-center w-48'>
          <div className='pb-16 text-black font-mono font-bold text-xs lg:text-3xl'>Developer Tools</div>
          <img className='w-full pb-4 drop-shadow-2xl' alt='cmake icon' src={cmake}></img>
          <div className='text-[#4188A4] font-bold text-xl'>CMake</div>
          <div className='pt-2 flex flex-row justify-center w-[50%] ml-9 lg:w-full lg:ml-0'>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltNew color='black'/>
            <WiMoonAltFull color='black'/>
          </div>
        </div>;
        case 6:
          return <div className='text-center w-48'>
          <div className='pb-12 text-black font-mono font-bold text-xs lg:text-3xl'>Developer Tools</div>
          <img className='w-full pb-4 drop-shadow-2xl' alt='chrome devtool icon' src={chromedt}></img>
          <div className='text-[#1967D2] font-bold text-xl'>Chrome DevTools</div>
          <div className='pt-2 flex flex-row justify-center w-[50%] ml-9 lg:w-full lg:ml-0'>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltNew color='black'/>
          </div>
        </div>;
        default:
          return <div className='text-center w-48'>
          <div className='pb-20 text-black font-mono font-bold text-xs lg:text-3xl'>Developer Tools</div>
          <img className='w-full pb-4 drop-shadow-2xl' alt='git icon' src={git}></img>
          <div className='text-[#E84E32] font-bold text-xl'>Git/GitHub</div>
          <div className='pt-2 flex flex-row justify-center w-[50%] ml-9 lg:w-full lg:ml-0'>
            <WiMoonAltNew color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
          </div>
        </div>;
      }
    }

    const card4 = (cards) => {
      switch(cards) {
        case 1:
          return <div className='text-center w-56'>
          <div className='pb-20 text-black font-mono font-bold text-xs lg:text-3xl'>Databases</div>
          <img className='w-full pb-4 drop-shadow-2xl' alt='firebase storage icon' src={storage}></img>
          <div className='text-[#FFCB2B] font-bold text-xl'>Firebase Storage</div>
          <div className='pt-2 flex flex-row justify-center w-[50%] ml-8 lg:w-full lg:ml-0'>
            <WiMoonAltFull color='black'/>
            <WiMoonAltNew color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
          </div>
        </div>;
        case 2:
          return <div className='text-center w-48'>
          <div className='pb-20 text-black font-mono font-bold text-xs lg:text-3xl'>Databases</div>
          <img className='w-full pb-4 drop-shadow-2xl' alt='postgresql icon' src={postgres}></img>
          <div className='text-[#31648C] font-bold text-xl'>PostgreSQL</div>
          <div className='pt-2 flex flex-row justify-center w-[50%] ml-8 lg:w-full lg:ml-0'>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltNew color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
          </div>
        </div>;
        case 3:
          return <div className='text-center w-64'>
          <div className='pb-20 text-black font-mono font-bold text-xs lg:text-3xl'>Databases</div>
          <img className='w-full pb-4 drop-shadow-2xl' alt='mariadb icon' src={mariadb}></img>
          <div className='text-[#BA7257] font-bold text-xl'>MariaDB</div>
          <div className='pt-2 flex flex-row justify-center w-[50%] ml-8 lg:w-full lg:ml-0'>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltNew color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
          </div>
        </div>;
        case 4:
          return <div className='text-center w-48'>
          <div className='pb-20 text-black font-mono font-bold text-xs lg:text-3xl'>Databases</div>
          <img className='w-full pb-4 drop-shadow-2xl' alt='mongodb icon' src={mongodb}></img>
          <div className='text-[#429A32] font-bold text-xl'>MongoDB</div>
          <div className='pt-2 flex flex-row justify-center w-[50%] ml-8 lg:w-full lg:ml-0'>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltNew color='black'/>
            <WiMoonAltFull color='black'/>
          </div>
        </div>;
        case 5:
          return <div className='text-center w-56'>
          <div className='pb-20 text-black font-mono font-bold text-xs lg:text-3xl'>Databases</div>
          <img className='w-full pb-4 drop-shadow-2xl' alt='mysql icon' src={mysql}></img>
          <div className='pt-10 text-[#005A84] font-bold text-xl'>MySQL</div>
          <div className='pt-2 flex flex-row justify-center w-[50%] ml-8 lg:w-full lg:ml-0'>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltNew color='black'/>
          </div>
        </div>;
        default:
          return <div className='text-center w-48'>
          <div className='pb-20 text-black font-mono font-bold text-xs lg:text-3xl'>Databases</div>
          <img className='w-full pb-4 drop-shadow-2xl' alt='firestore icon' src={firestore}></img>
          <div className='text-[#FFCB2B] font-bold text-xl'>Firestore</div>
          <div className='pt-2 flex flex-row justify-center w-[50%] ml-8 lg:w-full lg:ml-0'>
            <WiMoonAltNew color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
            <WiMoonAltFull color='black'/>
          </div>
        </div>;
      }
    }

    return (
      <div className='bg-black overflow-x-hidden'>
        <div className='z-10 px-8 lg:px-10 fixed gap-8 right-0 top-4 flex flex-nowrap text-sm lg:text-2xl'>
          <a href='#Home' className='text-[#05386B] font-mono font-semibold text-center hover:text-[#379683] hover:cursor-pointer'>Home</a>
          <a href='#AboutMe' className='text-[#05386B] font-mono font-semibold text-center hover:text-[#379683] hover:cursor-pointer'>About</a>
          <a href="#Works" className='text-[#05386B] font-mono font-semibold text-center hover:text-[#379683] hover:cursor-pointer'>Works</a>
          <a href="#Skills" className='text-[#05386B] font-mono font-semibold text-center hover:text-[#379683] hover:cursor-pointer'>Skills</a>
          <a href="#Contact" className='text-[#05386B] font-mono font-semibold text-center hover:text-[#379683] hover:cursor-pointer'>Contact</a>
        </div>
        <div id='Home' className='bg-[#EBF5DF] w-screen h-screen relative flex'>
          {smallScreen ? (
            <Spline scene='https://prod.spline.design/gpZnHM3HRTxQkm1J/scene.splinecode'/>
            ) : (
            <Spline scene="https://prod.spline.design/mFwVTqprDaF3MLiK/scene.splinecode"/>
          )}
        </div>
        <div className='h-10 bg-gradient-to-b from-[#00DE8E] to-[#EBF5DF] ..."'></div>
        <div id='AboutMe' className='bg-[#EBF5DF] w-screen h-screen relative'>
          {smallScreen ? (
            <Spline scene='https://prod.spline.design/eg5OiIJoWUSMdQ6R/scene.splinecode'/>
            ) : (
            <Spline scene='https://prod.spline.design/SZ7D7DzR88JbvTOT/scene.splinecode'
/>
          )}
          <div className='absolute left-0 right-0 ml-auto mr-auto top-12 text-[#5CDB95] font-serif font-extrabold lg:text-5xl text-2xl w-64'>
            About Me
          </div>
          <div className='absolute top-[23%] w-[45%] left-[12%] lg:text-lg md:text-sm text-xs font-mono'>
            Hello there, and thanks for stopping by!
          </div>
          <div className='absolute top-[33%] left-[12%] w-[45%] lg:text-lg md:text-sm text-xs font-mono'>
            I'm David Chen, a recent computer science graduate from Hunter College. Growing up, I never expected to become a software engineer, however, my journey has been filled with excitement, discovery, and the opportunity to connect with some incredible individuals along the way.
          </div>
          <div className='absolute top-[60%] left-[12%] w-[45%] lg:text-lg md:text-sm text-xs font-mono'>
            From creating interactive games to implementing a practical game engine to collaborating with fellow developers, I thrive on learning new technologies and embracing new opportunities. Passionate about coding and problem-solving, I'm eager to contribute my skills and experiences to make an impact on future projects in this ever-changing field.
          </div>
          <div className='w-screen'>

          </div>
        </div>
        <div id='Works' className='bg-[#EBF5DF] w-screen h-screen relative flex'>
          {smallScreen ? (
              <Spline scene='https://prod.spline.design/kUTwp9UyKjIh8O1f/scene.splinecode'/>
              ) : (
              <Spline scene='https://prod.spline.design/dyXEZSxwUAoXRJcy/scene.splinecode'/>
          )}
        </div>
        <div className='h-10 bg-gradient-to-b from-[#EBF5DF] to-[#8EE4AF] ..."'></div>
        <div id='Skills' className='bg-[#8EE4AF] w-screen h-screen relative flex'>
          <div className='absolute text-[#05386B] top-8 left-[42%] md:left-[46%] lg:left-[46%] font-serif font-extrabold lg:text-4xl text-2xl'>Skills</div>
          <div className='w-screen h-screen relative flex flex-row gap-5 justify-center items-center pl-5 pr-9'>
            <div className='shadow-2xl flex bg-white w-1/4 h-[70%] justify-center items-center drop-shadow-2xl rounded-lg' onClick={() => settingCard(Card1, 4, setCard1)}>
              {card1(Card1)}
            </div>
            <div className='shadow-2xl flex bg-white w-1/4 h-[70%] justify-center items-center drop-shadow-2xl rounded-lg' onClick={() => settingCard(Card2, 6, setCard2)}>
              {card2(Card2)}
            </div>
            <div className='shadow-2xl flex bg-white w-1/4 h-[70%] justify-center items-center drop-shadow-2xl rounded-lg' onClick={() => settingCard(Card3, 7, setCard3)}>
              {card3(Card3)}
            </div>
            <div className='shadow-2xl flex bg-white w-1/4 h-[70%] justify-center items-center drop-shadow-2xl rounded-lg' onClick={() => settingCard(Card4, 5, setCard4)}>
              {card4(Card4)}
            </div>
          </div>
        </div>
        <div id='Contact' className='w-screen h-screen relative'>
          <div className='absolute text-[#05386B] top-20 left-[10%] font-serif font-extrabold lg:text-4xl text-2xl'>Contact Me</div>
          <div className='absolute text-[#05386B] top-36 left-[10%] font-serif font-extrabold lg:text-xl text-base'>Let's chat and create something together!</div>
          <Spline className='absolute left-[30%] pt-10' scene='https://prod.spline.design/GYkkHwqjjpioNTaj/scene.splinecode' />
          <div className='bg-[#EBF5DF] rounded-md shadow-2xl absolute h-[60%] top-[30%] left-[6%] w-[50%]'>
            <form className='flex flex-col pl-10 mt-12' ref={form} onSubmit={sendEmail}>
              <label className='text-[#05386B] font-bold font-serif'>Name</label>
              <input className='w-[40%] pl-1' type="text" name="user_name" />
              <label className='text-[#05386B] font-bold font-serif pt-5'>Email</label>
              <input className='w-[40%] pl-1' type="email" name="user_email" />
              <label className='text-[#05386B] font-bold font-serif pt-5'>Message</label>
              <textarea className='w-[40%] pl-1' rows="5" name="message" />
              <input className='w-20 bg-[#05386B] text-white mt-5' type="submit" value="Send" />
              <img className='absolute w-64 h-32 mt-20 left-[50%]' src={email} alt="email gif"></img>
              <div className='flex absolute left-[50%] top-72 gap-3'>
                <a href="https://linkedin.com/in/david-chen13"><FaLinkedin color='#05386B' size={40} /></a>
                <a href="https://github.com/dchen628"><FaGithubSquare color='#05386B' size={40}/></a>
              </div>
            </form>
          </div>
          <div className='bg-[#8EE4AF] h-[40%]'></div>
          <div className='bg-[#EBF5DF] h-[60%]'></div>
        </div>
      </div>
    );
  }
  
  export default Home;