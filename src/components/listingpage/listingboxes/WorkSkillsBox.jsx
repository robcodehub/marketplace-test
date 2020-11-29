import React from 'react';
import PropTypes from 'prop-types';
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
          return <li key={skill}>{skill}</li>;
        })}
      </ListStyle>
    </WorkSkillsBoxLayout>
  );
}

WorkSkillsBox.propTypes = {
  listing: PropTypes.objectOf(PropTypes.any).isRequired,
};
