import React from "react";
import ContentLoader from "react-content-loader";
import styled from "styled-components";

const LoaderContainer = styled.div`
  margin: 60px 40px 40px 40px;
`;

const Loader = (props) => (
  <LoaderContainer>
    <ContentLoader
      speed={1}
      width={1000}
      height={300}
      viewBox="0 0 1000 300"
      backgroundColor="#2C2C2C"
      foregroundColor="#4A4A4A"
      {...props}
    >
      <rect x="0" y="20" rx="4" ry="4" width="154" height="230" />
      <rect x="174" y="20" rx="4" ry="4" width="154" height="230" />
      <rect x="344" y="20" rx="4" ry="4" width="154" height="230" />
      <rect x="514" y="20" rx="4" ry="4" width="154" height="230" />
      <rect x="684" y="20" rx="4" ry="4" width="154" height="230" />
    </ContentLoader>
  </LoaderContainer>
);

export default Loader;
