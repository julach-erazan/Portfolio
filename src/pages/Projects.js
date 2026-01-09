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

        <div className="w-[100%] md:w-[45%] pb-[50px]">
          <p className="border-[#72bf6a] border-l-8 pl-[5px]">
            <span className="text-[#000] text-[30px] font-bold">To-Do-List</span>
            <br /><br />This lively application, styled with flair using CSS, allows users to add, update, and delete notes effortlessly.
            The interactive features not only make task management a breeze but also bring an element of enjoyment to the to-do list experience.
            Whether you're checking off completed tasks or adding new notes, the user interface is designed for both functionality and playfulness.
            Explore my portfolio for a firsthand look at this project and other engaging creations that showcase my skills in ReactJS and creative front-end development.
            Let's make coding as enjoyable as crossing items off your to-do list

            <br/><br/>
            <a href="https://www.linkedin.com/posts/julach-earzan-094755251_reactjs-css-activity-7074098299275800577-9Wq3?utm_source=share&utm_medium=member_desktop">
              <span className='underline mr-[10px]'>See More</span>
              <i class="fas fa-external-link-alt"></i>
            </a>
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

        <div className="w-[100%] md:w-[45%] pb-[50px]">
          <p className="border-[#72bf6a] border-r-8 pl-[5px]">
            <span className="text-[#000] text-[30px] font-bold">Tic-Tac-Toe</span>
            <br /><br /> I developed a classic yet engaging tic-tac-toe web application using 
            the timeless trio of HTML, CSS, and JavaScript. This project not only demonstrates my proficiency 
            in front-end technologies but also showcases my commitment to creating interactive and enjoyable 
            user experiences. The seamless integration of HTML for structure, CSS for stylish visuals, and 
            JavaScript for dynamic gameplay results in a web application that brings the beloved tic-tac-toe game 
            to life on the digital canvas. Take a look at my portfolio for a closer look at this project and other 
            endeavors that highlight my skills in web development.

            <br/><br/>
            <a href="https://www.linkedin.com/posts/julach-earzan-094755251_html-css-javascript-activity-7050532946801291264-mnl1?utm_source=share&utm_medium=member_desktop">
              <span className='underline mr-[10px]'>See More</span>
              <i class="fas fa-external-link-alt"></i>
            </a> 
          </p>
        </div>

      </div>

      <div className="w-full flex flex-col  items-center md:justify-between md:flex-row mt-[30px]">

        <div className="w-[100%] md:w-[45%] pb-[50px]">
          <p className="border-[#72bf6a] border-l-8 pl-[5px]">
            <span className="text-[#000] text-[30px] font-bold">Background-Remover</span>
            <br /><br />I'm excited to showcase my project—a background removal web application crafted with HTML, CSS, JavaScript, and Flask. 
            This innovative application allows users to seamlessly remove backgrounds from images, enhancing their visual content with just a 
            few clicks.The combination of HTML, CSS, and JavaScript ensures an intuitive and responsive user interface, while Flask handles the 
            backend seamlessly. Notably, this web app is designed to be mobile-responsive, ensuring a consistent and user-friendly experience 
            across various devices. Feel free to explore my portfolio for a closer look at this project and others that highlight my skills in 
            web development.

            <br/><br/>
            <a href="https://www.linkedin.com/posts/julach-earzan-094755251_backgroudabrremover-flask-activity-7102213142671216642-D-w0?utm_source=share&utm_medium=member_desktop">
              <span className='underline mr-[10px]'>See More</span>
              <i class="fas fa-external-link-alt"></i>
            </a> 
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

        <div className="w-[100%] md:w-[45%] pb-[50px]">
          <p className="border-[#72bf6a] border-r-8 pl-[5px]">
            <span className="text-[#000] text-[30px] font-bold">Shop-WebSite</span>
            <br /><br />A dynamic shop website built with ReactJS and styled with CSS. 
            This web application seamlessly combines the power of React for smooth 
            interactivity with a carefully crafted aesthetic using CSS. Users can explore 
            a user-friendly interface, browse products, and enjoy a responsive design that 
            adapts seamlessly to different screen sizes. The use of React ensures a modern 
            and efficient user experience, while the CSS styling adds a touch of visual appeal. 
            Feel free to delve into my portfolio for an in-depth look at this project and others 
            that highlight my skills in web development.

            <br/><br/>
            <a href="https://www.linkedin.com/posts/julach-earzan-094755251_reactjs-css-activity-7082748470847029249-bEjE?utm_source=share&utm_medium=member_desktop">
              <span className='underline mr-[10px]'>See More</span>
              <i class="fas fa-external-link-alt"></i>
            </a>
          </p>
        </div>

      </div>
    </div>
  )
}
