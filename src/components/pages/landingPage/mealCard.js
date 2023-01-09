import React from "react";

const MealCard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12  ">
          <div
            className="card-menu p-4"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="inner-circle mb-4 "></div>
            <h3 className="text-white card-name">Smart Menu Recommendations</h3>
            <p className="text-white card-description">
              Fuddle uses advanced machine learning algorithms to suggest dishes
              and menus based on your tastes, dietary needs, and health goals.
              Just swipe what you like and what you don't like.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 ">
          <div
            className="card-menu-info card-menu p-4"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="inner-circle mb-4 "></div>
            <h3 className="card-name">Customized Nutrition Information</h3>
            <p className="card-description">
              Fuddle is more than just a generating menus. With our detailed
              nutrition analysis, you can see how each dish fits into your daily
              nutrient intake. Whether you want to eat more protein or less
              sugar, our app can help.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12  ">
          <div
            className="card-menu-planning card-menu p-4"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="inner-circle mb-4 "></div>
            <h3 className="text-white card-name">Meal Planning</h3>
            <p className="text-white card-description">
              It's never been easier to plan your meals. Fuddle will make a
              personalized meal plan with shopping lists and recipes, you won't
              have to decide what to eat at the last minute or buy things on a
              whim. Instead, you'll be organized and on track to reach your
              nutrition goals.
            </p>
          </div>
        </div>
      </div>
      <div className="row d-flex align-items-center our-goal">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h1 className="haeding">Where we are haeding to with fiuddle</h1>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <p className="our-goal-paragraph">
            Our goal is to give people the tools they need to make smart and
            healthy food choices. We do this by giving people personalized
            recommendations, detailed nutrition analysis, and easy meal
            planning.
          </p>
          <p className="our-goal-paragraph">
            We think that everyone should have access to the tools and
            information they need to live a healthy, happy life, and our app is
            here to make that happen.
          </p>
          <p className="our-goal-paragraph">
            With our app, you'll be able to save time and effort while eating
            delicious, healthy meals that meet your specific needs and tastes.
            Join us on our mission to change the way people think about food and
            nutrition.
          </p>
        </div>
      </div>
    </div>
  );
};
export default MealCard;
