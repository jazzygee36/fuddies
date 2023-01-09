import React from "react";
import "./index.css";
import Fuddle from "../../../assets/Fuddle.svg";
import Frame from "../../../assets/Frame.svg";
import Food1 from "../../../assets/Group1.svg";
import Food2 from "../../../assets/Group2.svg";
import Food3 from "../../../assets/Group3.svg";
import Eclipe from "../../../assets/Subtract.svg";
import MealCard from "./mealCard";

const Index = () => {
  return (
    <div className="container">
      <header className="top-header justify-content-between d-flex mt-4 ">
        <img src={Fuddle} alt="food" />
        <button className="btn btn-started text-white">Get Started</button>
      </header>
      <div className="your-taste">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-12 " data-aos="fade-right">
            <p className="find-foods">Find the foods you love</p>
            <h1 className="taste ">
              By being true to <span className="food-taste">your taste</span>
            </h1>
            <p className="perfect-menu ">
              A platform for you to find the perfect food <br /> menus based on
              your preferences, taste and <br /> much more
            </p>
            <button className="btn btn-started-taste text-white">
              Get Started
            </button>
            <img src={Frame} alt="arrow" className="img-arrow " />
            <h6 className="mt-5 powered">Powered by GPT</h6>
            <p className="algorithm">
              Menus are generated based on your <br /> likes and analyzed with
              the use of <br />
              GPT AI algorithm
            </p>
          </div>
          <div
            className="col-lg-7 col-md-6 col-sm-12 group-img "
            data-aos="fade-up-left"
          >
            <img src={Food1} alt="food" className="food-group" />
            <img src={Food2} alt="food" className="food-group2" />
            <img src={Food3} alt="food" className="food-group3" />
          </div>
        </div>
      </div>
      <div className="experiencing">
        <img src={Eclipe} alt="eclipe" className="eclipes" />
        <h2 className="text-center new-cuisines" data-aos="zoom-in-down">
          Trying new cuisines, experiencing <br /> different flavors, sharing
          meals <br />
          with others - that's what dining <br /> should be about!
        </h2>
      </div>
      <MealCard />
    </div>
  );
};

export default Index;
