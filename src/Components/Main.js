import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  height: 500px;
  margin-bottom: 20px;
`;

const Item = styled.div`
  height: 100px;
  background-color: oranges;
`;

const Name = styled.div`
  color: white;
`;

const Main = ({ popular }) => (
  <>
    <Container>
      {popular ? (
        <Item>
          {popular.map((movie) => (
            <Name>{`${movie.id}`}</Name>
          ))}
        </Item>
      ) : (
        "no"
      )}
    </Container>
  </>
);

Main.propTypes = {
  popular: PropTypes.array,
};

export default Main;
