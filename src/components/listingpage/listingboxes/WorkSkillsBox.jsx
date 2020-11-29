import React from 'react';
import styled from 'styled-components';

import { ListStyle } from '../templates/ListStyles.js';

const WorkSkillsBoxLayout = styled.div`
  grid-column-start: 1;
  grid-column-end: span 2;
  border-right: 1px solid #000;
`;

export default function WorkSkillsBox({ listing }) {
  return (
    <WorkSkillsBoxLayout>
      <h2>Work {'& '} Skills Required</h2>
      <ListStyle>
        {listing.work_required.map((skill) => {
          return <li>{skill}</li>;
        })}
      </ListStyle>
    </WorkSkillsBoxLayout>
  );
}
