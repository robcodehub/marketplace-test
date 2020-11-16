import React from 'react'
import styled from 'styled-components'

const ListingSummaryLayout = styled.div`
grid-row-start: 4;
grid-row-end: 4;
grid-column-start: 1;
grid-column-end: span 4;
margin-top: 2rem;
margin: 2rem;
padding-top: 2rem;
padding-bottom: 2rem;
`

export default function ListingSummary({listing}) {
  return (
        <ListingSummaryLayout>
          <h2>Listing Summary</h2>
      {listing.summary.split('\n').map(string => <p>{string}</p>) }
        </ListingSummaryLayout>

  )
}
