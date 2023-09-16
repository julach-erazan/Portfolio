import React from 'react'
import backgroundRem from '../img/backgroundRem.png'
import rolex from '../img/rolex.png'
import tictactoe from '../img/tictactoe.png'
import todolist from '../img/todolist.png'

export default function Projects() {
  return (
    <div className="pl-[10%] pr-[10%] pb-[50px] w-full bg-cover pt-[50px]">
      <h1 className='pl-[5px] text-[#000] text-[30px] font-bold mb-[120px] border-[#72bf6a] border-l-8'>PROJECTS</h1>
      
      <div className="w-full flex flex-col  items-center md:justify-between md:flex-row">

        <div className="w-[100%] h-[250px] md:w-[45%]">
          <p className="border-[#72bf6a] border-l-8 pl-[5px]">
            <span className="text-[#000] text-[30px] font-bold">To-Do-List</span>
            <br/><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam 
            reprehenderit beatae rem quo aliquam pariatur quos necessitatibus. 
            Harum, iure. Quam, reiciendis! Rerum molestias consequuntur at atque
            in hic eveniet quam?
          </p>
        </div>
        <div className="w-[100%] h-[250px] md:w-[45%] flex items-center justify-center">
          <img
          style={{
            'max-height': '100%',
            'max-width': '100%',
          }}
          src={todolist} alt="img" />
        </div>

      </div>

      <div className="w-full flex items-center md:justify-between mt-[30px]
      flex-wrap-reverse
      ">

        <div className="w-[100%] h-[250px] md:w-[45%] flex items-center justify-center">
          <img
          style={{
            'max-height': '100%',
            'max-width': '100%',
          }}
          src={tictactoe} alt="img" />
        </div>

        <div className="w-[100%] h-[250px] md:w-[45%]">
          <p className="border-[#72bf6a] border-r-8 pl-[5px]">
            <span className="text-[#000] text-[30px] font-bold">Tic-Tac-Toe</span>
            <br/><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam 
            reprehenderit beatae rem quo aliquam pariatur quos necessitatibus. 
            Harum, iure. Quam, reiciendis! Rerum molestias consequuntur at atque
            in hic eveniet quam?
          </p>
        </div>

      </div>

      <div className="w-full flex flex-col  items-center md:justify-between md:flex-row mt-[30px]">

        <div className="w-[100%] h-[250px] md:w-[45%]">
          <p className="border-[#72bf6a] border-l-8 pl-[5px]">
            <span className="text-[#000] text-[30px] font-bold">Background-Remover</span>
            <br/><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam 
            reprehenderit beatae rem quo aliquam pariatur quos necessitatibus. 
            Harum, iure. Quam, reiciendis! Rerum molestias consequuntur at atque
            in hic eveniet quam?
          </p>
        </div>

        <div className="
        w-[100%] h-[250px] md:w-[45%] flex items-center justify-center">
          <img
          style={{
            'max-height': '100%',
            'max-width': '100%',
          }}
          src={backgroundRem} alt="img" />
        </div>

      </div>

      <div className="w-full flex flex-wrap-reverse  items-center md:justify-between mt-[30px]">

        <div className="w-[100%] h-[250px] md:w-[45%] flex items-center justify-center">
          <img
          style={{
            'max-height': '100%',
            'max-width': '100%',
          }}
          src={rolex} alt="img" />
        </div>

        <div className="w-[100%] h-[250px] md:w-[45%]">
          <p className="border-[#72bf6a] border-r-8 pl-[5px]">
            <span className="text-[#000] text-[30px] font-bold">Shop-WebSite</span>
            <br/><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam 
            reprehenderit beatae rem quo aliquam pariatur quos necessitatibus. 
            Harum, iure. Quam, reiciendis! Rerum molestias consequuntur at atque
            in hic eveniet quam?
          </p>
        </div>
        
      </div>
    </div>
  )
}
