import React from 'react'
import Link from 'next/link'

function About() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'> A Revolutionary Developer that is passionate about innovating technology and Cyber Security.</p>
                <p className='py-2 text-gray-600'>I started programming in high school to build cool things and taking an idea that is in my head and bringing it to reality. I visualize things and how they operate which sparks new ideas for me to build upon which then turned into something that I want to do for the rest of my life.</p>
                <p className='py-2 text-gray-600'>Learning programming quickly was mainly driven by my relentless drive for building web applications and being the best I can be at all times. Now as I build upon this, I have turned my attention to learning cyber security while in college at Louisiana Tech as a Info Systems Major. Now I am currently learning about security and working towards my CompTIA certifications like A+, Security+, Network+, and CASP+.</p>
                <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src="https://freepngimg.com/thumb/software/27297-3-software-transparent-image.png" alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About