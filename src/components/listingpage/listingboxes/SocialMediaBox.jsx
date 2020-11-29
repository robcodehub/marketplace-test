import React from 'react';
import styled from 'styled-components';

import { RightArrowIcon } from '../../icons/Icons.jsx';

import ButtonTemplate from '../templates/ButtonTemplate';

const SocialMediaBoxLayout = styled.div`
  grid-column-start: 3;
  grid-column-end: span 2;
`;

export default function SocialMediaBox() {
  return (
    <SocialMediaBoxLayout>
      <h2>Social Media Channels</h2>
      <ButtonTemplate>
        Unlock Listing
        <RightArrowIcon />
      </ButtonTemplate>
    </SocialMediaBoxLayout>
  );
}
