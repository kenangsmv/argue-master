import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import Tecq from "../../images/Technology-Categories.png";
import Sport from "../../images/Sports-Categories.png";
import Science from "../../images/Science-Categories.png";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const Slide = () => {
  const router = useRouter();

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const go = (where) => {
    router.push(where);
  };
  return (
    <div className="w100 p2 ">
      <Slider {...settings} arrows={true}>
        <div
          className="slideItem needHover"
          onClick={() => go("/trends/Technology")}
        >
          <img src={Tecq} className="slideImage"></img>
          <span className="slideText">Teknoloji</span>
        </div>
        <div
          className="slideItem needHover"
          onClick={() => go("/trends/Technology")}
        >
          <img src={Sport} className="slideImage"></img>
          <span className="slideText">Sport</span>
        </div>
      
        <div
          className="slideItem needHover"
          onClick={() => go("/trends/Technology")}
        >
          <img src={Science} className="slideImage"></img>
          <span className="slideText">Science</span>
        </div>
        <div
          className="slideItem needHover"
          onClick={() => go("/trends/Technology")}
        >
          <img src={Tecq} className="slideImage"></img>
          <span className="slideText">Teknoloji</span>
        </div>
        <div
          className="slideItem needHover"
          onClick={() => go("/trends/Technology")}
        >
          <img src={Sport} className="slideImage"></img>
          <span className="slideText">Sport</span>
        </div>
      
        <div
          className="slideItem needHover"
          onClick={() => go("/trends/Technology")}
        >
          <img src={Science} className="slideImage"></img>
          <span className="slideText">Science</span>
        </div>
      
      </Slider>
    </div>
  );
};

export default Slide;
