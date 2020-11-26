import React from 'react';
import styled from 'styled-components';

import { RightArrowIcon } from '../../icons/Icons.jsx';

import { ButtonTemplate } from '../ButtonTemplate';

const FaqSectionStyles = styled.div`
  grid-row-start: 9;
  grid-row-end: 9;
  grid-column-start: 1;
  grid-column-end: -1;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(5%, auto);
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #000;
`;

export default function FaqSection() {
  return (
    <FaqSectionStyles>
      <h1>Frequently Answered Questions</h1>
      <h3>This content is only accessible by unlocking this listing</h3>
      <ButtonTemplate>
        Unlock Listing
        <RightArrowIcon />
      </ButtonTemplate>
    </FaqSectionStyles>
  );
}
