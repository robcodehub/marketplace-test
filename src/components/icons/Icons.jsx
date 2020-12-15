// import React from 'react';
import styled from 'styled-components';

import { Handshake, CommentsDollar, Trademark, HandHoldingUsd } from '@styled-icons/fa-solid';
import { RightArrowAlt, UpArrow, DownArrow } from '@styled-icons/boxicons-regular';
import { BurstSale, BurstNew } from '@styled-icons/foundation';

export const StyledIcon = (icon) => styled(icon)`
  height: ${(props) => props.height || '2rem'};
  width: ${(props) => props.width || '2rem'};
  color: ${(props) => props.color || '#000'};
`;

// Arrow icons for sorting listings and buttons
export const SortUpIcon = StyledIcon(UpArrow);
export const SortDownIcon = StyledIcon(DownArrow);
export const RightArrowIcon = StyledIcon(RightArrowAlt);

// Icons for listing status
export const DealIcon = StyledIcon(CommentsDollar);
export const HandshakeIcon = StyledIcon(Handshake);
export const SaleIcon = StyledIcon(BurstSale);
export const NewIcon = StyledIcon(BurstNew);
export const UsdHandIcon = StyledIcon(HandHoldingUsd);

// Trademark icon on individual listing pages
export const TrademarkIcon = styled(Trademark)`
  height: 4rem;
  width: 4rem;
  color: #3c79cb;
  padding: 1rem;
  border-radius: 50%;
  border: solid 4px #3c79cb;
`;

// // Default fragment export
// export default function Icons() {
//   return <></>;
// }

export default StyledIcon;
