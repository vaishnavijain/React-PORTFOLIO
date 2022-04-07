import React from "react";
import {FaGithub, FaInstagram, FaLinkedin, FaMailBulk} from 'react-icons/fa'

function Footer() {
  return (
    <div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#001220"
            fill-opacity="1"
            d="M0,128L60,112C120,96,240,64,360,69.3C480,75,600,117,720,160C840,203,960,245,1080,229.3C1200,213,1320,139,1380,101.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
           </svg>
        <div className="row justify-content-center footer-content">
            <div className="col-md-6">
                <div className="div">
                    <p>Designed and Developed By</p>
                    <hr/>
                <div className="d-flex justify-content-between px-2">
                  <a href="https://instagram.com/vaishnavii_jain?utm_medium=copy_link" target="blank">
                    <FaInstagram className="footer-icons"/>
                  </a>
                  <a href="https://www.linkedin.com/in/vaishnavi-jain-52bba3205" target="blank">
                  <FaLinkedin className="footer-icons"/>
                  </a>
                  <a href="mailto:vaishnavijain562@gmail.com"target="blank">
                  <FaMailBulk className="footer-icons"/>
                  </a>
                    <a href="https://github.com/vaishnavijain" target="blank">
                    <FaGithub className="footer-icons"/>
                    </a>
                </div>
                    <hr/>
                    <br />
                    <p>VaishnaviJain</p>
                    </div>
            </div>
        </div>

      </div>

    </div>
  );
}

export default Footer;
