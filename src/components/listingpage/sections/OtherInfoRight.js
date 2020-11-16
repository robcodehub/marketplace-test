import React from 'react'
import styled from 'styled-components'

import {NewIcon, TrademarkIcon, DealIcon, SaleIcon, HandshakeIcon, RightArrowIcon} from '../Icons';

import {ButtonTemplate} from '../ButtonTemplate';
import {currencyFormatter} from '../functions/convertCurrency'


const OtherInfoRightStyles = styled.div`
grid-row-start: 5;
grid-row-end: 5;
grid-column-start: 3;
grid-column-end: span 2;
margin-top: 2rem;
padding-top: 2rem;
margin-bottom: 2rem;
padding-bottom: 2rem;
`


const SpanWrapper = styled.div`
  border-top: 1px solid #848a93;
  margin: 2rem;
`

export const ListStyle = styled.ul`
  list-style-type: none;
  margin: 0.5rem;
  padding: 0.5rem;
  line-height:1.6;
`

export default function OtherInfoRight({listing}) {
  return (
    <OtherInfoRightStyles>
              <SpanWrapper>
          <h2>Risks</h2>
          <ListStyle>
          {listing.risks.map((risk) => {
          return <li>{risk}</li>
          })
          }
          </ListStyle>
          </SpanWrapper>
          <SpanWrapper>
          <div>
            <h2>Social Media Channels</h2>
            <ButtonTemplate>Unlock Listing<RightArrowIcon /></ButtonTemplate>
          </div>
          </SpanWrapper>
          <SpanWrapper>
          <h2>Reason for Sale</h2>
          <p>{listing.reason_for_sale}</p>
          </SpanWrapper>
          <SpanWrapper>
          <h2>Buyer Profiles</h2>
          <ListStyle>
          {listing.buyer_profiles.map((profile) => {
          return <li>{profile}</li>
          })
          }
          </ListStyle>
          </SpanWrapper>
          </OtherInfoRightStyles>
  )
}
