import styled from 'styled-components';

const OtherInfoSection = styled.div`
  grid-row-start: ${(props) => props.gridrowstart || 7};
  grid-row-end: ${(props) => props.gridrowend || 7};
  grid-column-start: ${(props) => props.gridcolstart || 1};
  grid-column-end: ${(props) => props.gridcolstart || 'span 4'};
  margin-top: ${(props) => props.margintop || '2rem'};
  padding-top: ${(props) => props.paddingtop || '2rem'};
  margin-bottom: ${(props) => props.marginbottom || '1rem'};
  padding-bottom: ${(props) => props.paddingbottom || '2rem'};
  border-bottom: ${(props) => props.borderbottom || '1px solid #848a93'};
  border-top: ${(props) => props.bordertop || '1px solid #848a93'};
`;

export const ListStyle = styled.ul`
  list-style-type: none;
  margin: 0.5rem;
  padding: 0.5rem;
  line-height: 1.6;
`;

export default OtherInfoSection;
