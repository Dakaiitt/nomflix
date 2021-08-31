import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Slider from "react-slick";

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

  .slick-next {
    color: yellow;
  }
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
