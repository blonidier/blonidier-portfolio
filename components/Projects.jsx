import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Projectitem from './Projectitem'
import whatsapp from '../public/assets/projects/whatsapp.png'
import disney from '../public/assets/projects/disney.png'
import nft from '../public/assets/projects/nft.png'
import library from '../public/assets/projects/library.png'

function Projects() {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2  className='py-4'>What Ive Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
           <Projectitem title='Chat Clone (WhatsApp)' backgroundImg={whatsapp} projectUrl='/whatsapp' />
           <Projectitem title='Disney+ Clone' backgroundImg={disney} projectUrl='/disney' />
           <Projectitem title='Ultraverse' backgroundImg={nft} projectUrl='/ultraverse' />
           <Projectitem title='Library Book Store' backgroundImg={library} projectUrl='/library' />
            </div>
        </div>

    </div>
  )
}

export default Projects