import React from 'react'
import {FaLaptopCode} from 'react-icons/fa'
import Header from '../components/Header'
import projectsdata from './projectsdata'
function Projects() {
  return (
    <div>
      <Header/>
      <div className="container projects-intro">
        <div className="row flex-with-center mt-5 p-box">
          <div className="col-md-6 n-box2 p-3">

          <div className=' m-3'data-aos='fade-down'>
            <h1 className='font-bold'>Projects</h1>
            <p>Good ideas are not automatically.They must be driven into practice with courageous patience</p>
            <button className='primary-button btn-color'>
              <a href="#project2">Get Started</a>
            </button>
          </div>

          </div>
          
           <div className="col-md-6 position-relative">
           <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#0F62FE" d="M57.8,-46.6C72.5,-27.7,80.3,-3.8,75.9,18.1C71.5,40,54.9,59.8,33.6,70.2C12.3,80.6,-13.7,81.6,-36.3,72.1C-58.9,62.5,-78,42.3,-82.8,19.4C-87.7,-3.6,-78.3,-29.3,-62.1,-48.4C-46,-67.6,-23,-80.3,-0.7,-79.7C21.6,-79.2,43.2,-65.4,57.8,-46.6Z" transform="translate(100 100)" />
</svg>
    <FaLaptopCode 
    color='white'
    size='180'
    className='position-absolute top-50 start-50 translate-middle'/>
          </div>
        </div>
      </div>

      <div className="container projects-list" id='project2'>

        <h3 className="font-bold">
          Take a look of my Projects (Just a showcase right now.)
        </h3>
        <hr/>

      <div className="row">

        {projectsdata.map(project=>{
          return <div className="col-md-4">
            <div className="position-relative project">
              <img src={project.image} alt="" />
                  <div className="project-content">
                    <h3>{project.title}</h3> <hr/>
                    <p>{project.description}</p>
                    <button className='primary-button'>Demo</button>
                  </div>
            </div>
          </div>
        })}
      </div>


      </div>
    </div>
  )
}

export default Projects