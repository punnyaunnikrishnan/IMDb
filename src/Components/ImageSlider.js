//importing necessary modules
import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImgSlider() {
  // given settings of image slider, The transition details and speed etc.
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="images\image-slider1.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="images\image-slider5.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="images\image-slider6.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="images\image-slider2.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="images\image-slider7.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="images\image-slider3.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="images\image-slider4.jpg" alt="" />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

// Styling each JSX elements using styled components
const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 150, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duartion: 300ms;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
