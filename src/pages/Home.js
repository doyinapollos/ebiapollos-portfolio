/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
import React, { useRef } from 'react';
import portfolioLogo from '../assets/svgs/portfolio-logo.svg';
import downloadIcon from '../assets/svgs/download-icon.svg';
import helloText from '../assets/svgs/hello-text.svg';
import rectangleShape from '../assets/svgs/rectangle-shape.svg';
import followMe from '../assets/svgs/follow-me.svg';
import verticalLine from '../assets/svgs/vertical-line.svg';
import instagramLogo from '../assets/svgs/instagram-logo.svg';
import behacneLogo from '../assets/svgs/behacne-logo.svg';
import image1 from '../assets/images/image-1.jpg';
import whatIDoText from '../assets/svgs/what-I-do-text.svg';
import icon1 from '../assets/svgs/icon-1.svg';
import skillsText from '../assets/svgs/skills-text.svg';
import recentWorksText from '../assets/svgs/recent-works-text.svg';
import rectangleShape2 from '../assets/svgs/rectangle-shape-2.svg';
import phoneIcon from '../assets/svgs/phone-icon.svg';
import emailIcon from '../assets/svgs/email-icon.svg';
import handout3 from '../assets/images/h-screen3.png';
import handout2 from '../assets/images/handout-screen.png';
import handout1 from '../assets/images/handout-screen2.png';
import lendsqrLoginPics from '../assets/images/lendsqr-login-pics.png';
import lendsqrDashboardPics from '../assets/images/lendsqr-dashboard-pics.png';
import dataVisualize1 from '../assets/images/data-visualize1.png';
import homeIcon from '../assets/svgs/home-icon.svg';
import icon2 from '../assets/svgs/icon2.svg';
import backgroundImage from '../assets/svgs/background-image.svg';

// const pdfFile =
//  'https://docs.google.com/document/d/1UGQbyNr1VdTNWt4-pvKNwZuQ7oVnVQkZ/edit?usp=share_link&ouid=109017585835242468987&rtpof=true&sd=true';

function Home() {
  // const handleFileDownload = (url) => {

  // }

  const contact = useRef(null);
  const portFolio = useRef(null);
  const goUp = useRef(null);

  const goToContact = () => {
    window.scrollTo({
      top: contact.current.offsetTop,
      behavior: 'smooth',
    });
  };
  const goToportFolio = () => {
    window.scrollTo({
      top: portFolio.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const goToUp = () => {
    window.scrollTo({
      top: goUp.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className=" w-full h-auto bg-gray-900 flex flex-col justify-start items-center ">
      <nav
        className="w-full h-[80px] bg-black flex justify-around items-center font-poppins text-white "
        ref={goUp}
      >
        <div className="w-[20%] h-full flex justify-center items-center  ">
          <img className="w-[80px] h-[50px]  " src={portfolioLogo} alt="" />
          <p className="ml-[10px]  text-[24px] font-poppins font-[700] ">
            ebiapollos{' '}
          </p>{' '}
        </div>{' '}
        <ul className="w-[40%] h-full flex justify-around items-center ">
          <li className="text-[24px] font-[700] cursor-pointer transition duration-500 ease-in-out hover:bg-[#00ADB5] transform hover:-translate-y-1 hover:scale-110 ">
            Home{' '}
          </li>{' '}
          <li className="text-[24px] font-[400] cursor-pointer transition duration-500 ease-in-out hover:bg-[#00ADB5] transform hover:-translate-y-1 hover:scale-110 ">
            About Me{' '}
          </li>{' '}
          <li
            className="text-[24px] font-[400] cursor-pointer transition duration-500 ease-in-out hover:bg-[#00ADB5] transform hover:-translate-y-1 hover:scale-110 "
            onClick={goToportFolio}
          >
            Portfolio{' '}
          </li>{' '}
          <li
            className="text-[24px] font-[400] cursor-pointer transition duration-500 ease-in-out hover:bg-[#00ADB5] transform hover:-translate-y-1 hover:scale-110 "
            onClick={goToContact}
          >
            Contact{' '}
          </li>{' '}
        </ul>{' '}
        <div className="w-[20%] h-full flex justify-center items-center ">
          <a
            href="https://docs.google.com/document/d/1UGQbyNr1VdTNWt4-pvKNwZuQ7oVnVQkZ/edit?usp=share_link&ouid=109017585835242468987&rtpof=true&sd=true"
            rel="noreferrer"
            target="_blank"
          >
            {' '}
            <button className=" w-[223px] h-[44px] bg-[#393E46] rounded-[5px] text-white flex justify-center items-center text-[10px] font-[600] transition duration-500 ease-in-out hover:bg-[#00ADB5] transform hover:-translate-y-1 hover:scale-110">
              Download CV{' '}
              <img
                className="w-[15px] h-[15px] ml-[10px] animate-bounce "
                src={downloadIcon}
                alt=""
              />{' '}
            </button>{' '}
          </a>{' '}
        </div>{' '}
      </nav>{' '}
      <div className="w-[100%] h-[600px] flex justify-center items-center ">
        <div className="w-[50%] h-full flex flex-col justify-start items-start mt-[100px] ml-[100px] relative left-[50px] ">
          <div className="w-full ml-[50px] ">
            <img className="w-[100%] " src={helloText} alt="" />
          </div>{' '}
          <div className="font-[700] text-[44px] font-poppins text-white mt-[50px] ">
            <p>
              I am <br />
              Ebi - erefa <span className="text-[#00ADB5] ">
                {' '}
                Apollos{' '}
              </span>{' '}
            </p>{' '}
            <p className="text-[24px] text-[#EEEEEE] font-poppins animate-pulse ">
              Frontend developer{' '}
            </p>{' '}
          </div>{' '}
        </div>{' '}
        <div className="w-[45%] h-full flex justify-center items-center mr-[70px] relative right-[50px] ">
          <div className="relative w-[80%] h-[100%] flex flex-col justify-start items-center mt-[-100px] ">
            <div className="bg-cover w-[70%] h-[350px] relative top-[160px] rounded-b-[50px] rounded-t-[50px] z-10 ">
              <img
                className=" w-full h-full rounded-b-[50px] rounded-t-[50px] "
                src={image1}
                alt=""
              />
            </div>{' '}
            <div className="absolute bottom-[0px] w-[100%] h-[60%]">
              <img
                className="w-full h-full relative  "
                src={rectangleShape}
                alt=""
              />
            </div>{' '}
          </div>{' '}
          <div className="w-[20%] h-[90%] flex flex-col justify-start items-center ">
            <div className="w-[50%] h-[80%] flex flex-col justify-around items-center ">
              <img className=" " src={followMe} alt="" />
              <img className=" " src={verticalLine} alt="" />
              <button>
                <img className=" " src={instagramLogo} alt="" />
              </button>{' '}
              <button>
                <img className=" " src={behacneLogo} alt="" />
              </button>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
      <hr className=" w-[90%] border-1 border-[#00ADB5] relative bottom-[120px] " />
      <div className="w-[76%] h-[90px] flex flex-col justify-around items-start relative bottom-[100px] ">
        <p className="text-[#959DA9] font-[700] text-[24px] font-poppins ">
          Steve Jobs, co - founder of Apple, Inc.{' '}
        </p>{' '}
        <p className="text-[#EEEEEE] font-[700] text-[24px] font-poppins ">
          Design is not just what it looks like and feels <br /> like.Design is
          how it works.{' '}
        </p>{' '}
      </div>{' '}
      <div className="w-[100%] h-[800px] font-poppins flex flex-col justify-start items-center bg-gray-900 z-10 ">
        <img
          className="object-cover absolute left-[0px] mix-blend-overlay h-[125%] z-50  "
          src={backgroundImage}
          alt=""
        />
        <div className=" w-[100%] h-[90px] flex flex-col justify-center items-center ">
          <img src={whatIDoText} alt="" />
          <p className="text-[40px] text-white font-[700] font-poppins relative bottom-[60px] ">
            What I do
          </p>{' '}
        </div>{' '}
        <div className="w-[90%] h-[40%] flex justify-around items-center ">
          <div className="w-[200px] h-[200px] rounded-[5px] bg-[#222831] text-white flex flex-col justify-around items-center ">
            <img
              className="w-[55px] h-[55px] text-[#355f61] "
              src={icon1}
              alt=""
            />
            <p> Frondend </p>{' '}
          </div>{' '}
          <div className="w-[200px] h-[200px] rounded-[5px] bg-[#222831] text-white flex flex-col justify-around items-center ">
            <img
              className="w-[55px] h-[55px] text-[#00ADB5] "
              src={homeIcon}
              alt=""
            />
            <p> Frondend Engineer </p>{' '}
          </div>{' '}
          <div className="w-[200px] h-[200px] rounded-[5px] bg-[#222831] text-white flex flex-col justify-around items-center ">
            <img
              className="w-[55px] h-[55px] text-[#00ADB5] "
              src={icon1}
              alt=""
            />
            <p> Frondend developer </p>{' '}
          </div>{' '}
          <div className="w-[200px] h-[200px] rounded-[5px] bg-[#222831] text-white flex flex-col justify-around items-center ">
            <img
              className="w-[55px] h-[55px] text-[#00ADB5] "
              src={icon2}
              alt=""
            />
            <p> React developer </p>{' '}
          </div>{' '}
        </div>{' '}
        <div className="w-[100%] h-[10%] flex flex-col justify-center items-center mt-[100px] ">
          <img src={skillsText} alt="" />
          <p className="text-[64px] font-[700] text-white font-poppins relative bottom-[80px] ">
            Skills{' '}
          </p>{' '}
        </div>{' '}
        <div className="w-[100%] h-[40%] flex flex-col justify-center items-center  ">
          <div className="w-[45%] h-full flex flex-col justify-around items-center text-white ">
            <div className="w-[100%] flex justify-between items-center  ">
              <p> React </p>{' '}
              <div className="w-[70%] h-[19px] bg-white rounded-l-[50px] rounded-r-[50px] ">
                <div className="w-[80%] h-full bg-[#00ADB5] rounded-l-[50px] rounded-r-[50px] ">
                  {' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className="w-[100%] flex justify-between items-center ">
              <p> Tailwind CSS </p>{' '}
              <div className="w-[70%] h-[19px] bg-white rounded-l-[50px] rounded-r-[50px] ">
                <div className="w-[80%] h-full bg-[#00ADB5] rounded-l-[50px] rounded-r-[50px] ">
                  {' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className="w-[100%] flex justify-between items-center ">
              <p> Javascript </p>{' '}
              <div className="w-[70%] h-[19px] bg-white rounded-l-[50px] rounded-r-[50px] ">
                <div className="w-[50%] h-full bg-[#00ADB5] rounded-l-[50px] rounded-r-[50px] ">
                  {' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className="w-[100%] flex justify-between items-center ">
              <p> HTML 5 </p>{' '}
              <div className="w-[70%] h-[19px] bg-white rounded-l-[50px] rounded-r-[50px] ">
                <div className="w-[90%] h-full bg-[#00ADB5] rounded-l-[50px] rounded-r-[50px] ">
                  {' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className="w-[100%] flex justify-between items-center ">
              <p> CSS3 </p>{' '}
              <div className="w-[70%] h-[19px] bg-white rounded-l-[50px] rounded-r-[50px] ">
                <div className="w-[80%] h-full bg-[#00ADB5] rounded-l-[50px] rounded-r-[50px] ">
                  {' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className="w-[100%] flex justify-between items-center ">
              <p> GIT </p>{' '}
              <div className="w-[70%] h-[19px] bg-white rounded-l-[50px] rounded-r-[50px] ">
                <div className="w-[60%] h-full bg-[#00ADB5] rounded-l-[50px] rounded-r-[50px]  ">
                  {' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
          <div className="w-[100%] h-[10%] flex flex-col justify-center items-center mt-[100px] ">
            <img src={recentWorksText} alt="" />
            <p className="text-[64px] font-[700] text-white font-poppins relative bottom-[80px] ">
              Recent Works{' '}
            </p>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
      <div
        className="w-[100%] h-[800px] flex flex-col justify-start items-center "
        ref={portFolio}
      >
        <div className="w-[80%] h-[85%] flex justify-around items-center flex-wrap ">
          <a
            href="https://handout-stutern.web.app/"
            rel="noreferrer"
            target="_blank"
          >
            <button>
              <div className="w-[300px] h-[300px] rounded-[5px] bg-[#222831] text-white flex flex-col justify-around items-center ">
                <img
                  className="w-full h-full rounded-[10px] "
                  src={handout1}
                  alt=""
                />
              </div>{' '}
            </button>{' '}
          </a>{' '}
          <a
            href="https://handout-stutern.web.app/"
            rel="noreferrer"
            target="_blank"
          >
            <button>
              <div className="w-[300px] h-[300px] rounded-[5px] bg-[#222831] text-white flex flex-col justify-around items-center ">
                <img
                  className="w-full h-full rounded-[10px] "
                  src={handout2}
                  alt=""
                />
              </div>{' '}
            </button>{' '}
          </a>{' '}
          <a
            href="https://handout-stutern.web.app/"
            rel="noreferrer"
            target="_blank"
          >
            <button>
              <div className="w-[300px] h-[300px] rounded-[5px] bg-[#222831] text-white flex flex-col justify-around items-center ">
                <img
                  className="w-full h-full rounded-[10px] "
                  src={handout3}
                  alt=""
                />
              </div>{' '}
            </button>{' '}
          </a>{' '}
          <a
            href="https://lendsqr-frontend.web.app/"
            rel="noreferrer"
            target="_blank"
          >
            <button>
              <div className="w-[300px] h-[300px] rounded-[5px] bg-[#222831] text-white flex flex-col justify-around items-center ">
                <img
                  className="w-full h-full rounded-[10px] "
                  src={lendsqrLoginPics}
                  alt=""
                />
              </div>{' '}
            </button>{' '}
          </a>{' '}
          <a
            href="https://lendsqr-frontend.web.app/dashboard"
            rel="noreferrer"
            target="_blank"
          >
            <button>
              <div className="w-[300px] h-[300px] rounded-[5px] bg-[#222831] text-white flex flex-col justify-around items-center ">
                <img
                  className="w-full h-full rounded-[10px] "
                  src={lendsqrDashboardPics}
                  alt=""
                />
              </div>{' '}
            </button>{' '}
          </a>{' '}
          <a
            href="https://ebiapollos-world-data.web.app/"
            rel="noreferrer"
            target="_blank"
          >
            <button>
              <div className="w-[300px] h-[300px] rounded-[5px] bg-[#222831] text-white flex flex-col justify-around items-center ">
                <img
                  className="w-full h-full rounded-[10px] "
                  src={dataVisualize1}
                  alt=""
                />
              </div>{' '}
            </button>{' '}
          </a>{' '}
        </div>{' '}
        <div className="w-[90%] h-[10%] flex justify-center items-center  ">
          <button className="w-[186px] h-[38px] bg-[#393E46] rounded-[5px] text-white flex justify-center items-center text-[10px] font-[600]">
            View All Works{' '}
          </button>{' '}
        </div>{' '}
      </div>{' '}
      <div
        className="w-[100%] h-[700px] flex flex-col justify-center items-center  "
        ref={contact}
      >
        <div className="w-[50%] h-[60%] flex justify-center items-center relative">
          <img className="w-full h-full z-10 " src={rectangleShape2} alt="" />
        </div>{' '}
        <div className="w-[90%] h-[40%] flex justify-center items-center relative bottom-[280px] bg-[#00ADB5]">
          <div className="w-[40%] h-[100%] z-10 text-white flex flex-col justify-around items-center  ">
            <p className="text-[35px] font-poppins font-[700] "> Contact me </p>{' '}
            <div className="flex justify-center items-center">
              <img
                className="w-[20px] h-[20px] text-[#EEEEEE] "
                src={phoneIcon}
                alt=""
              />
              <div className="ml-[10px]">
                <p className="text-[18px] font-[700] font-poppins ">
                  Call me <br />
                  <span className="text-[14px] font-[400] font-poppins">
                    +2348038376835{' '}
                  </span>{' '}
                </p>{' '}
              </div>{' '}
            </div>{' '}
            <div className="flex justify-center items-center ml-[50px]">
              <img
                className="w-[32px] h-[12px] text-[#EEEEEE]"
                src={emailIcon}
                alt=""
              />
              <p className="text-[18px] font-[700] font-poppins ml-[10px]">
                Email me <br />
                <span className="text-[14px] font-[400] font-poppins">
                  doyinapollos @gmail.com{' '}
                </span>{' '}
              </p>{' '}
            </div>{' '}
            <button
              className="w-[60px] h-[30px] font-poppins text-[12px] bg-[#00ADB5] rounded-[4px] "
              onClick={goToUp}
            >
              Go Up{' '}
            </button>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
}

export default Home;
