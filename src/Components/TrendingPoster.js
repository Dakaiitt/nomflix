import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  font-size: 12px;
`;

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 3,
};

const Image = styled.div`
  position: absolute;
  margin-left: 110px;
  background-image: url(${(props) => props.bgUrl});
  width: 140px;
  height: 210px;
  background-size: cover;
  background-position: center center;
  border-radius: 4px;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  display: block;
`;

const InfoContainer = styled.div`
  display: flex;
  width: 110px;
  height: 210px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  margin-left: 110px;
  opacity: 0;
  transition: opacity 0.1s linear;
  background-color: rgba(59, 59, 59, 0.5);
`;

const ImageContainer = styled.div`
  display: flex;
  margin-bottom: 5px;
  position: relative;
  height: 210px;
  width: 200px;
  &:hover {
    ${Image} {
      opacity: 1;
    }
    ${InfoContainer} {
    }
  }
`;

const Title = styled.span`
  /* display: block; */
  margin-bottom: 3px;
  font-size: 15px;
  line-height: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  text-align: center;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.8);
`;

const Index = styled.div`
  position: relative;
  margin-top: -30px;
  letter-spacing: -50px;
  margin-left: -5px;
  font-size: 250px;
  font-weight: 600;
  -webkit-text-fill-color: black;
  -webkit-text-stroke-width: 5px;
  -webkit-text-stroke-color: #595959;
  pointer-events: none;
`;

const IndexOverTen = styled.div`
  position: relative;
  margin-top: -10px;
  margin-left: -15px;
  letter-spacing: -60px;
  font-size: 220px;
  font-weight: 600;
  pointer-events: none;
  -webkit-text-fill-color: black; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 5px;
  -webkit-text-stroke-color: #595959;
`;

const TrendingPoster = ({
  id,
  imageUrl,
  title,
  rating,
  year,
  isMovie = false,
  index,
}) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        {index < 10 ? (
          <Index>{index}</Index>
        ) : (
          <IndexOverTen>{index}</IndexOverTen>
        )}
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : require("../assets/noPosterSmall.png").default
          }
        />
      </ImageContainer>
    </Container>
  </Link>
);

TrendingPoster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default TrendingPoster;
