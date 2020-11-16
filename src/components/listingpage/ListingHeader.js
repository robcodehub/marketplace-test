import React from 'react'
import styled from 'styled-components'

const ListingHeaderLayout = styled.div`
grid-row-start: 1;
grid-row-end: 1;
grid-column-start: 1;
grid-column-end: span 4;
background-color: #3c79cb;
color: #FFF;
`

export default function ListingHeader({listing}) {

  return (
    <ListingHeaderLayout>
        <h1>Niche: {listing.niches[0].niche}</h1>
        <h2>Monetization: {listing.monetizations[0].monetization}</h2>
      <h3>Home {'>'} Marketplace {'>'}  {listing.listing_number}</h3>
    </ListingHeaderLayout>
  )
}
