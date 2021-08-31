import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "../assets/nomflix.png";
import SearchImg from "../assets/search.png";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 100px 100px 100px 1fr;
  justify-content: space-between;
`;

const Item = styled.div`
  height: 60px;
  border-bottom: 5px solid
    ${(props) => (props.current ? "#e50914" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.7;
    transition: 0.2s ease-in-out;
  }
`;

const Logo = styled.img`
  display: absolute;
  height: 25px;
  justify-content: center;
  margin-left: 50px;
  margin-right: 40px;
  margin-top: 5px;
  align-items: center;
`;

const Search = styled.div`
  margin-right: 50px;
`;

const SearchIcon = styled.img`
  height: 20px;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Link to="/">
      <Logo src={LogoImg} />
    </Link>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Home</SLink>
      </Item>
      <Item current={pathname === "/movies"}>
        <SLink to="/movies">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
    </List>
    <Search current={pathname === "/search"}>
      <SLink to="/search">
        <SearchIcon src={SearchImg} />
      </SLink>
    </Search>
  </Header>
));
