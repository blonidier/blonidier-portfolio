import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Brennan | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Brennan Lonidier</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/brennan-l-489367228/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/blonidier'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Fast Learning <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Fast Learning</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and providing the best user experience
          for anyone that uses or views my websites. Played football all my life so I have a competitive 
          side to me that wants to be the best version of myself.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML <span className='px-2'>|</span>
            CSS <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span> NextJS
            <span className='px-2'>|</span> MongoDB
          </p>
          
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Front End Devloper Intern
            </span>
            <span className='px-2'>|</span>Remote
          </p>
          <p className='py-1 italic'>Frontend Simplified (06/2022 - 09/2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Transformed a completely static HTML, CSS, JavaScript and React single page application into an interactive user interface using
            animations, transitions and carousels
            </li>
            <li>
            Processed API requests to dynamically represent data from a cloud server and represented it through skeleton loading states, 
            pagination and dynamic routing
            </li>
            <li>
            Utilized Git version control and the GitHub interface to work and thrive in a collaborative team environment
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Front End Support Engineer</span>
            <span className='px-2'>|</span>Remote
          </p>
          <p className='py-1 italic'>Frontend Simplified (2021 – Present)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Tutored over 40,000 people on best practices in HTML, CSS, JS, React, and NextJS and
              the way to make them multi-device-friendly.
            </li>
            <li>
             Simplified difficult programming concepts including responsive website development, CSS layout, Promises and API requests along with building clean user interfaces to make visiting very beginner-friendly.
            </li>
            <li>
            Taught debugging best practises using Google Chrome inspect element tooling and solved numerous bugs for other students with help of my fellow support engineers.
            </li>
            <li>
             Provided website UI designs to 1:1 and reviewed code through weekly code reviews 
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Freelance Frontend Engineer
            </span>
            <span className='px-2'>|</span>Remote
          </p>
          <p className='py-1 italic'>Freelance Work (2019 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript, React, and NextJS
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Built functional and user friendly websites and apps to ensure it would be used correctly
            </li>
          </ul>
        </div>
        
      </div>
    </>
  );
};

export default resume;