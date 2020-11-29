import React from 'react';
import PropTypes from 'prop-types';

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

ListingSectionFour.propTypes = {
  listing: PropTypes.objectOf(PropTypes.any).isRequired,
};
