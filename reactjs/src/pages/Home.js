import React from 'react'
import Nav from '../components/Nav'
import Typed from 'typed.js';
import facebook from './facebook.png'
import linkedin from './linkedin.png'
import github from './github.png'
import astronaut from './astronaut.png'

const Home = () => {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Julach Earzan. ', 'Web Developer. '],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {

      typed.destroy();
    };
  }, []);

  return (
    <div>
      <Nav />
      <div className='container min-w-[350px] text-white absolute top-0 z-5 pl-[10%] pr-[5%] md:pt-[190px] transition-all duration-500 ease-in pt-[80px]'>
        <div className='hero-text'>
          <h3 className='text-[30px] font-bold'>Hi, There</h3>
          <h1 className='md:text-[50px] font-black transition-all duration-300 ease-in text-[40px]'>I Am <span className='text-[#72bf6a]' ref={el}></span></h1>
          <p className='w-[500px] max-w-full pb-[20px]'>
            I'm undergraduate in Eastern University Sri Lanka. I'm following a Computer Science Degree course. I am
            able to demonstrate effective communication and organizational skills; work on my own initiative, both
            independently and within a team. I have the excellent ability to organize and prioritize my workload to achieve
            set goals and deadlines in the most efficient manner</p>
        </div>
        <div className='social flex space-x-[30px]'>
          <li className='w-[40px] h-[40px] bg-[#999] hover:bg-[#72bf6a] flex items-center justify-center rounded-full'><a href='/' ><img src={facebook} alt="Facebook" className='w-[20px] h-[20px]' /></a></li>
          <li className='w-[40px] h-[40px] bg-[#999] hover:bg-[#72bf6a] flex items-center justify-center rounded-full'><a href='https://www.linkedin.com/in/julach-earzan-094755251' ><img src={linkedin} alt="Linkedin" className='w-[20px] h-[20px]' /></a></li>
          <li className='w-[40px] h-[40px] bg-[#999] hover:bg-[#72bf6a] flex items-center justify-center rounded-full'><a href='https://github.com/julach-erazan' ><img src={github} alt="GitHub" className='w-[20px] h-[20px]' /></a></li>
        </div>

        <a href="/Resume/_Julach_Earzan-Software_Engineer-Internship.pdf" download><button className='
            w-[200px] h-[40px]
            bg-transparen mt-[30px]
            rounded-full text-[15px]
            border-[3px]
            text-[#72bf6a]
            border-[#72bf6a]
            hover:bg-[#72bf6a]
            hover:text-white
            '>
          <i class="fa fa-download" aria-hidden="true"></i>
          <span className='ml-[10px] font-bold'>Download Resume</span>
        </button></a>
      </div>

      <div
        className='
        hidden lg:flex w-[250px]
        h-[370px] absolute fixed
        lg:right-[calc(7%+50px)] top-[130px]
        border-[#72bf6a] border-8
          '>
      </div>
      <img src={astronaut} alt="Astronaut" className='up-down hidden lg:flex w-[280px] h-[400px] absolute lg:right-[12%] top-[100px]' />
      <div
        className='
        hidden lg:flex w-[250px]
        h-[370px] absolute
        lg:right-[calc(7%+50px)] top-[130px]
        border-[#72bf6a] border-b-8
          '>
      </div>
    </div>
  )
}

export default Home