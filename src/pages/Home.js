import React from "react";
import Courosel from "../components/Courosel";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />

      <div
        className="introduction flex-with-center"
        style={{ backgroundImage: `url('./intro.svg')` }}
      >
        <div>
          <h1 data-aos="fade-up">Vaishnavi jain</h1>

          <div className="intro-content d-flex justify-content-between">
           
            <p>
              ***---Developer!---***<br/>
              Web design reimagined!
            </p>
            <button className="primary-button font-bold m-2">
             <a href="#courosel"> Get Started</a>
            </button>
          </div>
        </div>
      </div>

      <Courosel />
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#001220"
            fill-opacity="1"
            d="M0,224L21.8,192C43.6,160,87,96,131,85.3C174.5,75,218,117,262,154.7C305.5,192,349,224,393,213.3C436.4,203,480,149,524,149.3C567.3,149,611,203,655,192C698.2,181,742,107,785,69.3C829.1,32,873,32,916,58.7C960,85,1004,139,1047,181.3C1090.9,224,1135,256,1178,229.3C1221.8,203,1265,117,1309,80C1352.7,43,1396,53,1418,58.7L1440,64L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container">
        <div className="row justify-content-start">
          <div className="col-md-4">
            <div className="n-box2 p-5 font-bold" data-aos="fade-right">
              <h1>Yes you are right...</h1>
              <p>I am a JavaScript Buff...</p>
            </div>
          </div>
        </div>
        <div className="row pt-3 justify-content-center">
          <div className="col-md-4">
            <div>
              <img
                src="./Developer.svg"
                alt=""
                height="200"
                className="w-100 svgs"
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-end">
          <div className="col-md-4">
            <div className="n-box2 p-5 font-bold" data-aos="fade-left">
              <p>
                JavaScript is a lightweight, cross-platform, and interpreted
                scripting language. It is well-known for the development of web
                pages, many non-browser environments also use it.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" devstack container my-5 n-box2 py-4">
        <div className="text-center">
          <h1 className="font-bold">My Development Stack</h1>
          <hr />
          <img
            src="./rafiki.svg"
            alt=""
            height="200"
            width="200"
            className="w-30"
          />
        </div>
        <div className="row p-2">
          <div className="col-md-4 font-bold">
            <h3 className="font-bold"> Front-end </h3>
            <hr />
            <p>Html/css</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Redux</p>
            <p>Angular</p>
          </div>

          <div className="col-md-4 font-bold text-center">
            <h3 className="font-bold">UI/UX Styling </h3>
            <hr />
            <p>Bootstrap</p>
            <p>Material UI</p>
          </div>
          <div className="col-md-4 font-bold text-end">
            <h3 className="font-bold">Backend/DB </h3>
            <hr />
            <p>NodeJs</p>
            <p>Express</p>
            <p>MongoDB</p>
          </div>
        </div>
      </div>

      <div
        className="whoiam flex-with-center"
        style={{ backgroundImage: `url('/who-am-i.svg')` }}
      >
        <div>
          <h3>Hello ,Hi, Namaste...</h3>
          <hr />
          <p>
            <pre>
              {JSON.stringify(
                {
                  name: "Vaishnavi Jain",
                  from: "India",
                  Age: null,
                  gender: "Female",
                },
                null,
                2
              )}
            </pre>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
