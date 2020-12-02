import React from 'react';

import styled from 'styled-components';

import ButtonTemplate from '../../templates/ButtonTemplate';

import { RightArrowIcon } from '../../../icons/Icons.jsx';

const UnlockLayout = styled.div`
  grid-row-start: 2;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: span 4;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #848a93;
`;

export default function UnlockListing() {
  return (
    <UnlockLayout id="unlock-listing">
      <h3>
        Unlock a listing for full access to the URL, Google Analytic, Profit and Loss Statement,
        etc.
        <ButtonTemplate>
          Buy Now <RightArrowIcon />
        </ButtonTemplate>{' '}
        <ButtonTemplate color="#f5a622">
          Unlock Listing <RightArrowIcon />
        </ButtonTemplate>
      </h3>
    </UnlockLayout>
  );
}
