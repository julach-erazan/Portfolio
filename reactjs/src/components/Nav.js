import React, { useEffect, useState } from 'react'

const Nav = () => {
    let [open,setOpen]=useState(false);

    const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const handleClickScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  let Links =[
    {name:"HOME",id:"home"},
    {name:"ABOUT",id:"about"},
    {name:"PROJECTS",id:"projects"},
    {name:"CONTACT",id:"contact"},
  ];

  return (
    <>
    <div onClick={()=>setOpen(!open)} className={`
    flex justify-end h-[50px]
    relative z-10
    md:hidden
    transition-all duration-500 ease-in
    ${open ? 'bg-[#000]' :''}
    `}
    >
        <button className={`
        w-[40px] h-[40px] bg-center mr-2 mt-2
        transition-all duration-500 ease-in
        ${open ? "bg-cover bg-[url('/src/img/close.png')]" :"bg-cover bg-[url('/src/img/menu.png')]"}
        `}
        name={open ? 'close':'menu'}>
        </button>
    </div>
    <div onClick={()=>setOpen(!open)} className={`
      w-full flex align-center justify-center
      relative z-10
      transition-all duration-500 ease-in
      ${open ? 'top-0 md:top-[10px] bg-[#000] md:bg-transparent' :'top-[-400px] md:top-[10px] md:bg-transparent'}`}>
      <ul className="md:flex">
        {
          Links.map((link)=>(
            <li key={link.name} className="h-[60px] flex justify-center">
              <button onClick={() => handleClickScroll(link.id)} className="text-white text-[25px]
               font-moonhouse pl-3 pr-3 duration-150 ease-in hover:text-[35px] hover:text-[#72bf6a]">{link.name}</button>
            </li>
          ))
        }
      </ul>
    </div>
    <button onClick={() => handleClickScroll('home')} 
    className="
            w-[120px]
            h-[160px]
            bg-cover
            bg-center
            fixed bottom-[10px]
            right-[10px] z-10 text-white
            bg-[url('/src/img/ufo.gif')]
    "></button>
    </>
  )
}

export default Nav