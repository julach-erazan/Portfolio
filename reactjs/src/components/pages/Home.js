import React from 'react'
import Nav from '../Nav'
import Typed from 'typed.js';
import facebook from './facebook.png'
import linkedin from './linkedin.png'
import github from './github.png'

const Home = () => {

    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Julach Earzan. ', 'Web Developer. '],
        typeSpeed: 50,
        backSpeed:50,
        loop:true,
      });
  
      return () => {
        
        typed.destroy();
      };
    }, []);  

  return (
    <div className="bg-[url('/src/img/background.png')] w-full h-screen bg-cover bg-center">
        <Nav/>
        <div className='container min-w-[350px] text-white absolute top-0 z-5 pl-[10%] pr-[5%] md:pt-[190px] transition-all duration-500 ease-in pt-[80px] '>
            <div className='hero-text'>
                <h3 className='text-[30px] font-bold'>Hi, There</h3>
                <h1 className='md:text-[50px] font-black transition-all duration-300 ease-in text-[40px]'>I Am <span className='text-[#72bf6a]' ref={el}></span></h1>
                <p className='w-[500px] max-w-full pb-[20px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Recusandae perspiciatis quos libero. Sunt obcaecati, ea cumque,
                    tempora natus sit ad provident qui labore velit eaque reiciendis
                    inventore. Dicta, voluptate ullam.</p>
            </div>
            <div className='social flex space-x-[30px]'>
                <li className='w-[40px] h-[40px] bg-[#999] hover:bg-[#72bf6a] flex items-center justify-center rounded-full'><a href='/' ><img src={facebook} alt="Facebook" className='w-[20px] h-[20px]'/></a></li>
                <li className='w-[40px] h-[40px] bg-[#999] hover:bg-[#72bf6a] flex items-center justify-center rounded-full'><a href='/' ><img src={linkedin} alt="Linkedin" className='w-[20px] h-[20px]'/></a></li>
                <li className='w-[40px] h-[40px] bg-[#999] hover:bg-[#72bf6a] flex items-center justify-center rounded-full'><a href='/' ><img src={github} alt="GitHub" className='w-[20px] h-[20px]'/></a></li>
            </div>
            <button className='
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
                </button>
        </div>
    </div>
  )
}

export default Home