import React from 'react';
import styled from 'styled-components';

import WorkSkillsBox from '../../listingboxes/WorkSkillsBox.jsx';
import SocialMediaBox from '../../listingboxes/SocialMediaBox.jsx';

import ListingSectionTemplate from '../../templates/ListingSectionTemplate';

export default function ListingSectionFour({ listing }) {
  return (
    <ListingSectionTemplate gridrowstart={6} gridrowend={6}>
      <WorkSkillsBox listing={listing} />
      <SocialMediaBox />
    </ListingSectionTemplate>
  );
}
