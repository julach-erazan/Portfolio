import React from 'react'
import hero from './hero.png'

export default function About() {

  return (
    <>
      <div className="
    bg-[url('/src/img/about_bg.png')] 
    lg:bg-[url('/src/img/trans.png')]
    w-full min-h-screen bg-cover bg-center
    pt-[50px] pb-[80px]
    ">
        <h1 className='ml-[10%] pl-[5px] text-[#a9a9a9] text-[30px] font-bold mb-[120px] border-[#72bf6a] border-l-8'>ABOUT</h1>
        <div className='ml-[10%] mr-[10%] md:flex-row md:justify-between flex flex-col items-center'>
          <div className='mb-[50px] md:h-[250px] md:w-[40%] w-full text-[#a9a9a9] flex-nowrap'>
            <p className='
          pl-[10px] 
          border-[#72bf6a] border-l-8
          bg-[#0000001e]
          font-bold
          '>I am a Software Engineer with hands-on experience in full-stack web development. I work with technologies like React, Next.js, Node.js, and PostgreSQL to build clean, efficient, and user-friendly applications. I enjoy solving problems, learning new technologies, and working with teams to create impactful software solutions.</p>
          </div>
          <div className="
        w-[250px] h-[250px] bg-transparent
        mt-[20px] md:mt-8 flex
        items-center justify-center

        before:content-['']
        before:w-[250px] before:h-[250px] before:bg-transparent
        before:border-[#72bf6a] before:border-8 before:absolute before:rotate-[15deg] hover:before:rotate-[45deg]

        after:content-['']
        after:w-[250px] after:h-[250px] after:bg-transparent
        after:border-[#3f9e35] after:border-8 after:absolute after:rotate-[-15deg] hover:after:rotate-[0deg]
        ">
            <img src={hero} alt="Hero" className='w-[200px]' />
          </div>
        </div>
      </div>
    </>
  )
}
