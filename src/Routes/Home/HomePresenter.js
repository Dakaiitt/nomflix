import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Section from "Components/TrendingSection";
import Poster from "Components/TrendingPoster";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  padding: 40px;
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

const HomePresenter = ({ trendingMovie, trendingTVshow, error, loading }) => (
  <>
    <Helmet>
      <title>Home | Nomflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <Helmet>
          <title>Home | Nomflix</title>
        </Helmet>
        {trendingMovie && trendingMovie.length > 0 && (
          <Section title="Trending movies today">
            {trendingMovie.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
                index={trendingMovie.indexOf(movie) + 1}
              />
            ))}
          </Section>
        )}
        {trendingTVshow && trendingTVshow.length > 0 && (
          <Section title="Trending TV shows today">
            {trendingTVshow.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={
                  show.first_air_date && show.first_air_date.substring(0, 4)
                }
                index={trendingTVshow.indexOf(show) + 1}
              />
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    )}
  </>
);

HomePresenter.propTypes = {
  trendingMovie: PropTypes.array,
  trendingTVshow: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
