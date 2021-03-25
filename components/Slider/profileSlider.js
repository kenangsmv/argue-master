import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import PostCard from "../post/postcard.js";
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

const Slide = ({debates}) => {
  const router = useRouter();
  const sortTıme=(a,b)=>{return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()}
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
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
      
        {debates?.sort(sortTıme).map((post) => (
            
          <PostCard key={post.id} data={post}></PostCard>
      
        ))}
      </Slider>
    </div>
  );
};

export default Slide;
