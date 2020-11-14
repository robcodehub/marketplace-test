import React from 'react'
import styled from 'styled-components'

const NavBarStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
  color: white;
  padding: 1.5rem;
  font-size: 1.2rem;
`;

const MenuItems = styled.ul`

`;

const MenuList = styled.li`
  float: left;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  a:visited {
  color: white;
}
`

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
    <nav>

    </nav>
  )
}
