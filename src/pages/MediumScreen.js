/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
import React from 'react';
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
import portfolioPics1 from '../assets/images/portfolio-pics1.png';
import homeIcon from '../assets/svgs/home-icon.svg';
import icon2 from '../assets/svgs/icon2.svg';
import backgroundImage from '../assets/svgs/background-image.svg';

function MediumScreen() {
  return (
    <div className=" w-full h-auto bg-gray-900 flex flex-col justify-start items-center ">
      <nav className="w-full h-[80px] bg-black flex justify-around items-center font-poppins text-white ">
        <div className="w-[20%] h-full flex justify-center items-center  ">
          <img className="w-[80px] h-[50px] " src={portfolioLogo} alt="" />
          <p className="ml-[5px]  text-[18px] font-poppins font-[700] ">
            ebiapollos{' '}
          </p>{' '}
        </div>{' '}
        <ul className="w-[40%] h-full flex justify-around items-center ">
          <li className="text-[18px] font-[700]"> Home </li>{' '}
          <li className="text-[18px] font-[400]"> About Me </li>{' '}
          <li className="text-[18px] font-[400]"> Portfolio </li>{' '}
          <li className="text-[18px] font-[400]"> Contact </li>{' '}
        </ul>{' '}
        <div className="w-[20%] h-full flex justify-center items-center ">
          <button className="w-[223px] h-[44px] bg-[#393E46] rounded-[5px] text-white flex justify-center items-center text-[10px] font-[600]">
            Download CV{' '}
            <img
              className="w-[15px] h-[15px] ml-[10px] "
              src={downloadIcon}
              alt=""
            />{' '}
          </button>{' '}
        </div>{' '}
      </nav>{' '}
      <div className="w-[100%] h-[600px] flex justify-center items-center ">
        <div className="w-[47%] h-full flex flex-col justify-start items-start mt-[100px] relative ">
          <div className="w-full ml-[50px] ">
            <img className="w-[100%] " src={helloText} alt="" />
          </div>{' '}
          <div className="font-[700] text-[28px] font-poppins text-white mt-[50px] ">
            <p>
              I am <br />
              Ebi - erefa <span className="text-[#00ADB5] ">
                {' '}
                Apollos{' '}
              </span>{' '}
            </p>{' '}
            <p className="text-[18px] text-[#EEEEEE] font-poppins ">
              Frontend developer{' '}
            </p>{' '}
          </div>{' '}
        </div>{' '}
        <div className="w-[45%] h-full flex justify-center items-center relative right-[50px] ">
          <div className="relative w-[80%] h-[100%] flex flex-col justify-start items-center mt-[-100px] ">
            <div className=" w-[70%] h-[350px] relative top-[160px] rounded-b-[50px] rounded-t-[50px] z-10 ">
              <img
                className="w-full h-full rounded-b-[50px] rounded-t-[50px] "
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
              <img className=" " src={instagramLogo} alt="" />
              <img className=" " src={behacneLogo} alt="" />
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
      <hr className=" w-[90%] border-1 border-[#00ADB5] relative bottom-[120px] " />
      <div className="w-[76%] h-[90px] flex flex-col justify-around items-start relative bottom-[50px] ">
        <p className="text-[#959DA9] font-[700] text-[18px] font-poppins ">
          Steve Jobs, co - founder of Apple, Inc.{' '}
        </p>{' '}
        <p className="text-[#EEEEEE] font-[700] text-[18px] font-poppins ">
          Design is not just what it looks like and feels <br /> like.Design is
          how it works.{' '}
        </p>{' '}
      </div>{' '}
      <div className="w-[100%] h-[800px] font-poppins flex flex-col justify-start items-center bg-gray-900 z-10 ">
        <img
          className="object-cover absolute left-[0px] mix-blend-overlay h-[80%] z-50  "
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
              src={icon2}
              alt=""
            />
            <p> React developer </p>{' '}
          </div>{' '}
        </div>{' '}
        <div className="w-[100%] h-[10%] flex flex-col justify-center items-center mt-[100px] ">
          <img src={skillsText} alt="" />
          <p className="text-[54px] font-[700] text-white font-poppins relative bottom-[80px] ">
            Skills{' '}
          </p>{' '}
        </div>{' '}
        <div className="w-[100%] h-[40%] flex flex-col justify-center items-center  ">
          <div className="w-[75%] h-full flex flex-col justify-around items-center text-white ">
            <div className="w-[100%] flex justify-between items-center  ">
              <p> React </p>{' '}
              <div className="w-[70%] h-[19px] bg-white ">
                <div className="w-[80%] h-full bg-[#00ADB5] rounded-r-[50px] ">
                  .{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className="w-[100%] flex justify-between items-center ">
              <p> Tailwind CSS </p>{' '}
              <div className="w-[70%] h-[19px] bg-white ">
                <div className="w-[80%] h-full bg-[#00ADB5] rounded-r-[50px] ">
                  .{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className="w-[100%] flex justify-between items-center ">
              <p> Javascript </p>{' '}
              <div className="w-[70%] h-[19px] bg-white ">
                <div className="w-[50%] h-full bg-[#00ADB5] rounded-r-[50px] ">
                  .{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className="w-[100%] flex justify-between items-center ">
              <p> HTML 5 </p>{' '}
              <div className="w-[70%] h-[19px] bg-white ">
                <div className="w-[90%] h-full bg-[#00ADB5] rounded-r-[50px] ">
                  .{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className="w-[100%] flex justify-between items-center ">
              <p> CSS3 </p>{' '}
              <div className="w-[70%] h-[19px] bg-white ">
                <div className="w-[80%] h-full bg-[#00ADB5] rounded-r-[50px] ">
                  .{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className="w-[100%] flex justify-between items-center ">
              <p> GIT </p>{' '}
              <div className="w-[70%] h-[19px] bg-white ">
                <div className="w-[60%] h-full bg-[#00ADB5] rounded-r-[50px]  ">
                  .{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
          <div className="w-[100%] h-[10%] flex flex-col justify-center items-center mt-[100px] ">
            <img src={recentWorksText} alt="" />
            <p className="text-[44px] font-[700] text-white font-poppins relative bottom-[70px] ">
              Recent Works{' '}
            </p>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
      <div className="w-[100%] h-[950px] flex flex-col justify-start items-center ">
        <div className="w-[80%] h-[85%] flex justify-around items-center flex-wrap ">
          <div className="w-[250px] h-[250px] rounded-[5px] bg-[#222831] text-white flex flex-col justify-around items-center ">
            <img className="w-full h-full " src={handout1} alt="" />
          </div>{' '}
          <div className="w-[250px] h-[250px] rounded-[5px] bg-[#222831] text-white flex flex-col justify-around items-center ">
            <img className="w-full h-full " src={handout2} alt="" />
          </div>{' '}
          <div className="w-[250px] h-[250px] rounded-[5px] bg-[#222831] text-white flex flex-col justify-around items-center ">
            <img className="w-full h-full " src={handout3} alt="" />
          </div>{' '}
          <div className="w-[250px] h-[250px] rounded-[5px] bg-[#222831] text-white flex flex-col justify-around items-center ">
            <img className="w-full h-full " src={lendsqrLoginPics} alt="" />
          </div>{' '}
          <div className="w-[250px] h-[250px] rounded-[5px] bg-[#222831] text-white flex flex-col justify-around items-center ">
            <img className="w-full h-full " src={lendsqrDashboardPics} alt="" />
          </div>{' '}
          <div className="w-[250px] h-[250px] rounded-[5px] bg-[#222831] text-white flex flex-col justify-around items-center ">
            <img className="w-full h-full " src={portfolioPics1} alt="" />
          </div>{' '}
        </div>{' '}
        <div className="w-[90%] h-[15%] flex justify-center items-center  ">
          <button className="w-[186px] h-[38px] bg-[#393E46] rounded-[5px] text-white flex justify-center items-center text-[10px] font-[600]">
            View All Works{' '}
          </button>{' '}
        </div>{' '}
      </div>{' '}
      <div className="w-[100%] h-[700px] flex flex-col justify-center items-center  ">
        <div className="w-[50%] h-[60%] flex justify-center items-center relative">
          <img className="w-full h-full z-10 " src={rectangleShape2} alt="" />
        </div>{' '}
        <div className="w-[90%] h-[40%] flex justify-center items-center relative bottom-[290px] bg-[#00ADB5]">
          <div className="w-[40%] h-[80%] z-10 text-white flex flex-col justify-around items-center  ">
            <p className="text-[25px] font-poppins font-[700] "> Contact me </p>{' '}
            <div className="flex justify-center items-center">
              <img
                className="w-[20px] h-[20px] text-[#EEEEEE] "
                src={phoneIcon}
                alt=""
              />
              <div className="ml-[10px]">
                <p className="text-[14px] font-[700] font-poppins ">
                  Call me <br />
                  <span className="text-[10px] font-[400] font-poppins">
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
              <p className="text-[14px] font-[700] font-poppins ml-[10px]">
                Email me <br />
                <span className="text-[10px] font-[400] font-poppins">
                  doyinapollos @gmail.com{' '}
                </span>{' '}
              </p>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
}

export default MediumScreen;
