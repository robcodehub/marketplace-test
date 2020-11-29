import React from 'react';

import { RightArrowIcon } from '../../../icons/Icons.jsx';

import ButtonTemplate from '../../templates/ButtonTemplate';

import ListingSectionTemplate from '../../templates/ListingSectionTemplate';

export default function FaqSection() {
  return (
    <ListingSectionTemplate
      gridrowstart={9}
      gridrowend={9}
      gridautorows="minmax(5%, auto)"
      gridtemplatecolumns="1fr"
    >
      <h1>Frequently Answered Questions</h1>
      <h3>This content is only accessible by unlocking this listing</h3>
      <ButtonTemplate>
        Unlock Listing
        <RightArrowIcon />
      </ButtonTemplate>
    </ListingSectionTemplate>
  );
}
