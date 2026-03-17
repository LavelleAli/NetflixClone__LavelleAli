import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero__banner from "../../assets/hero_banner.jpg";
import hero__title from "../../assets/hero_title.png";
import play__icon from "../../assets/play_icon.png";
import info__icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero__banner} alt="" className="banner__img" />
        <div className="hero__caption">
          <img src={hero__title} alt="" className="caption__img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanble embarks on a quest to save the city from an
            immortal enemy
          </p>
          <div className="hero__btn">
            <button className="btn">
              <img src={ play__icon } alt="" />Play
            </button>
            <button className="btn dark__btn">
              <img src={ info__icon } alt="" />More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more__cards">
        <TitleCards title ={"Blockbuster Movies"} />
        <TitleCards title ={"Only on Netflix"} />
        <TitleCards title ={"Upcoming"} />
        <TitleCards title ={"Top Pics for You"} />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
