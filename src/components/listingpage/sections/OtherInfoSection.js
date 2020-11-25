import styled from 'styled-components';

const OtherInfoSection = styled.div`
  grid-row-start: ${(props) => props.gridstart || 7};
  grid-row-end: ${(props) => props.gridend || 7};
  grid-column-start: 1;
  grid-column-end: span 4;
  margin-top: 1rem;
  padding-top: 2rem;
  margin-bottom: 1rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #848a93;
  border-top: 1px solid #848a93;
`;

export default OtherInfoSection;
