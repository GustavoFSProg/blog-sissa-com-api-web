import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import carne from "../assets/carne.jpg";
import burger from "../assets/hamburger.jpg";
import cutt from "../assets/cutt.jpg";

import styled from "styled-components";

const Image = styled.img`
  display: flex;
  width: 80%;
  height: 400px;

  margin-right: 18px;

  @media screen and (max-width: 700px) {
    height: 190px;
  }
`;

const ImageContainer = styled.div`
  /* display: flex; */
  width: 80%;
  margin-left: 122px;

  @media screen and (max-width: 700px) {
    margin-left: 0px;
    width: 118%;
  }
`;

class StartCarousel extends Component {
  render() {
    return (
      <Carousel
        // autoPlay
        interval="3500"
        transitionTime={2150}
        showArrows
        showThumbs={false}
        // infiniteLoop={true}
      >
        <ImageContainer>
          <Image src={carne} alt="imagem 1" />
          {/* <p className="legend">Legend 1</p> */}
        </ImageContainer>
        <ImageContainer>
          <Image src={burger} alt="imagem2" />
        </ImageContainer>
        <ImageContainer>
          <Image src={cutt} alt="imagem 3" />
        </ImageContainer>
      </Carousel>
    );
  }
}

// ReactDOM.render(<StartCarousel />, document.querySelector('.demo-carousel'));

export default StartCarousel;
