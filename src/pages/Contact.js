import React from 'react'

export default function Contact() {
  return (
    <div className="
    bg-[#d3d3d3] w-full min-h-screen 
    pt-[50px] flex md:flex-row flex-col 
    items-center pb-[40px]
    justify-center
    ">
      <div className='
      md:w-[100%] w-[80%]
      md:h-[400px] h-[300px]
      bg-black md:top-[-90px] 
      md:right-[-50px]
      relative z-1
      '>
        <h1 className='
        ml-[20px] pl-[5px] text-[#999] 
        text-[30px] font-bold mb-[120px] 
        border-[#72bf6a] border-l-8
        mt-[20px]
        '>CONTACT</h1>
      </div>
      <div className="
      w-[70%] md:w-[50%]
      h-[400px] 
      bg-[#00000036]
      absolute z-10
      md:left-[25%]
      p-[8px]
      border-[#72bf6a] border-l-8
      ">
        <h2 className='text-[#999] text-[30px] font-bold w-full text-center'>Get In Touch</h2>
        <form action="https://formsubmit.co/017d60356378d6bb1b16323985f505fd" method="POST">
          <input type="text" name="Name" placeholder="Full Name" required></input>
          <input type="email" name="Email" placeholder="Email" required></input>
          <input type="text" name="Subject" placeholder="Subject"></input>
          <textarea name="Message" placeholder="Message" required></textarea>
          <button type="submit" className='
            w-[200px] h-[40px]
            bg-transparen mt-[30px]
            rounded-full text-[15px]
            border-[3px]
            font-black
            text-[#72bf6a]
            border-[#72bf6a]
            hover:bg-[#72bf6a]
            hover:text-white
            '
          ><span>Say, Hello</span>
          </button>
        </form>
      </div>
      <div className="
      w-[100%] w-[80%]
      md:h-[400px] h-[300px]
      bg-white 
      md:top-[90px] 
      md:left-[-50px]
      relative z-1
      bg-[url('/src/img/contact.jpeg')]
      bg-cover bg-center
      "></div>
    </div>
  )
}