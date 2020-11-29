import React from 'react';
import styled from 'styled-components';

import { Handshake, CommentsDollar, Trademark, HandHoldingUsd } from '@styled-icons/fa-solid';
import { RightArrowAlt } from '@styled-icons/boxicons-regular';
import { BurstSale, BurstNew } from '@styled-icons/foundation';

export const TrademarkIcon = styled(Trademark)`
  height: 4rem;
  width: 4rem;
  color: #3c79cb;
  padding: 1rem;
  border-radius: 50%;
  border: solid 4px #3c79cb;
`;

export const DealIcon = styled(CommentsDollar)`
  height: 2rem;
  width: 2rem;
`;

export const HandshakeIcon = styled(Handshake)`
  height: 2rem;
  width: 2rem;
`;

export const SaleIcon = styled(BurstSale)`
  height: 2rem;
  width: 2rem;
`;

export const NewIcon = styled(BurstNew)`
  color: green;
`;

export const RightArrowIcon = styled(RightArrowAlt)`
  color: ${(props) => props.color || '#FFF'};
  height: 2em;
  width: 2em;
`;

export const UsdHandIcon = styled(HandHoldingUsd)`
  height: 2rem;
  width: 2rem;
`;

export default function Icons() {
  return <></>;
}
