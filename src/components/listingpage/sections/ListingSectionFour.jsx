import React from 'react';
import styled from 'styled-components';

import WorkSkillsBox from './listingboxes/WorkSkillsBox.jsx';
import SocialMediaBox from './listingboxes/SocialMediaBox.jsx';

const ListingSectionFourStyles = styled.div`
  grid-row-start: 6;
  grid-row-end: 6;
  grid-column-start: 1;
  grid-column-end: -1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(10%, auto);
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #000;
`;

export default function ListingSectionFour({ listing }) {
  return (
    <ListingSectionFourStyles>
      <WorkSkillsBox listing={listing} />
      <SocialMediaBox />
    </ListingSectionFourStyles>
  );
}
