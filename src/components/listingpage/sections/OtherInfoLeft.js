import React from 'react'
import styled from 'styled-components'

import {currencyFormatter} from '../functions/convertCurrency'


const OtherInfoLeftStyles = styled.div`
grid-row-start: 5;
grid-row-end: 5;
grid-column-start: 1;
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

export default function OtherInfoLeft({listing}) {
  return (
    <OtherInfoLeftStyles>
    <SpanWrapper>
          <h2>Opportunities</h2>
          <ListStyle>
          {listing.opportunities.map((opp) => {
          return <li>{opp}</li>
          })
          }
          </ListStyle>
          </SpanWrapper>
          <SpanWrapper>
        <h2>Work {'&'} Skills Required</h2>
          <ListStyle>
          {listing.work_required.map((skill) => {
          return <li>{skill}</li>
          })
          }
          </ListStyle>
          </SpanWrapper>
          <SpanWrapper>
          <h2>Seller Support</h2>
        <p>{listing.seller_support}</p>
        </SpanWrapper>
        <SpanWrapper>
          <h2>Other Information</h2>
          <ListStyle>


        <li>Work Required Per Week: {listing.hours_worked_per_week} Hours</li>
        <li>Private Blog Network(PBN): {listing.uses_pbn ? "Yes": "No"}</li>
        <li>Domain Type:{' '}
          {listing.sites.map((site) => {
          return <>.{site.domain_type}</>
          })
          }

          </li>
        <li>Platform:{' '}
          {listing.sites.map((site) => {
          return <>{site.platform}</>
          })
          }

        </li>
          </ListStyle>
          </SpanWrapper>
        </OtherInfoLeftStyles>
  )
}
