import React, { useState } from "react";
import PropTypes, { arrayOf } from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import ImdbLogo from "../../assets/imdb.png";
import StarRatings from "react-star-ratings";
import Tabs from "Components/Tabs";
import { collectionApi } from "api";

const Container = styled.div`
  height: calc(100vh - 60px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin: 20px 50px;
`;

const Title = styled.h3`
  font-size: 36px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span`
  font-size: 15px;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  opacity: 0.7;
  line-height: 1.5;
  margin-bottom: 30px;
`;

const ImdbLink = styled.img`
  height: 15px;
  &:hover {
    cursor: pointer;
  }
  vertical-align: middle;
`;

const FlagImg = styled.img`
  height: 20px;
  vertical-align: middle;
  padding-right: 7px;
`;

const DTabContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-rows: [DTabHeader] 1fr [DTabContent] 6fr;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  height: 300px;
`;

const DTabHeader = styled.div`
  border: solid 2px black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  &:hover {
    background: gray;
  }
`;

const DTabContent = styled.div`
  border: solid 2px black;
  grid-column: 1 / 4;
`;

const DetailPresenter = ({ result, loading, error, collection }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading.. | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | Nomflix
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.png")
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time} min
            </Item>
            <Divider>•</Divider>
            <Item>
              <StarRatings
                rating={result.vote_average / 2}
                starRatedColor="#ffd32a"
                starEmptyColor="#909497"
                starSpacing="0"
                starDimension="15px"
              />{" "}
              {result.vote_average} / 10
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
            <Divider>|</Divider>
            <Item>
              <ImdbLink
                onClick={() =>
                  window.open(
                    `https://www.imdb.com/title/${result.imdb_id}`,
                    "_blank"
                  )
                }
                src={ImdbLogo}
              />
            </Item>
            {result.production_countries.length > 0 ? <Divider>|</Divider> : ""}
            <Item>
              <FlagImg
                src={
                  result.production_countries.length > 0
                    ? `https://www.countryflags.io/${result.production_countries[0].iso_3166_1}/flat/64.png`
                    : ""
                }
                title={
                  result.production_countries.map((country) => country.name)[0]
                }
              />
              <FlagImg
                src={
                  result.production_countries.length > 1
                    ? `https://www.countryflags.io/${result.production_countries[1].iso_3166_1}/flat/64.png`
                    : ""
                }
                title={
                  result.production_countries.map((country) => country.name)[1]
                }
              />
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          <Tabs result={result} collection={collection} />
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
