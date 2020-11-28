import React from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

const NavBarStyle = styled.div`
  height: 2rem;
  width: 100%;

  position: fixed;
  top: 0;
  display: block;
  overflow: hidden;
  z-index: 5;

  background-color: #000;

  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 2rem;
`;

const MenuItems = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  color: #fff;

  li {
    color: #fff;
    font-size: 1.2em;
    font-family: 'Helvetica';
    font-weight: bold;

    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 20%;
      text-decoration-color: #f5a622;
      cursor: pointer;
    }

    a {
      color: #fff;

      &:visited {
        color: #fff;
      }
    }
  }
`;

// const MenuList = styled.li`
//   float: left;
//   padding-left: 1.2rem;
//   padding-right: 1.2rem;
//   a:visited {
//   color: white;
// }
// `

/*

.menu-items {
  list-style-type: none;
  display: inline;
}

.menu-items li {

}
.menu-items li

.menu-items li a:hover {
  text-decoration: underline;
  text-decoration-color: #f5a622;
}
*/

export default function NavBar() {
  return (
    <NavBarStyle>
      <MenuItems>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Marketplace</Link>
        </li>
        <li>
          <Link to="/newlistings">New Listings </Link>
        </li>
        <li>About Us</li>
        <li>Blog</li>
      </MenuItems>
    </NavBarStyle>
  );
}
