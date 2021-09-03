import React, { Image } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Slider from "react-slick";
import LogoImg from "../assets/nomflix.png";

const Container = styled.div`
  :not(:last-child) {
    margin-top: 10px;
    margin-bottom: 50px;
  }
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(10, 250px);
  grid-gap: 15px;
`;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "skyblue" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  swipeToSlide: true,
  arrows: true,
};

const StyledSlider = styled(Slider)`
  margin-top: 20px;

  /* .slick-prev:before {
    width: 46px;
    height: 46px;
    content: "" !important;
    position: absolute;
    top: -11px;
    background-image: url("../assets/nomflix.png");
    background-repeat: no-repeat;
    vertical-align: middle;
    background-size: 46px;
    opacity: 1 !important;
    background-color: pink;
    z-index: 5;
  } */
`;

const TrendingSection = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    {/* <Grid>{children}</Grid> */}
    <StyledSlider {...settings}>{children}</StyledSlider>
  </Container>
);

TrendingSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default TrendingSection;
