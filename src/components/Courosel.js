import React from 'react'
import {FaAngular, FaBootstrap, FaCss3, FaHtml5, FaJava, FaJsSquare, FaNodeJs, FaReact} from 'react-icons/fa'
function Courosel() {
  return (
    <div>
      <div className='courosel-parent position-relative' id='courosel'>
        <h1 className='position-absolute top-0 start-0 end-0 text-center mt-3'>Technologies I use</h1>
        <div className='gallery'>
            <span style={{'--i' : 1}}>
                  <FaReact color='cyan'/>
            </span>
             <span style={{'--i' : 2}}>
                  <FaAngular  color='red'/>
            </span>
            <span style={{'--i' : 3}}>
                  <FaJava  color='orange'/>
            </span>
            <span style={{'--i' : 4}}>
                  <FaCss3  color='skyblue'/>
            </span>
            <span style={{'--i' : 5}}>
                  <FaBootstrap  color='purple'/>
            </span>
            <span style={{'--i' : 6}}>
                  <FaJsSquare  color='yellow'/>
            </span>
            <span style={{'--i' : 7}}>
                  <FaHtml5  color='orange'/>
            </span>
            <span style={{'--i' : 8}}>
                  <FaNodeJs  color='green'/>
            </span>
            </div>
        </div>
    </div>
  )
}

export default Courosel