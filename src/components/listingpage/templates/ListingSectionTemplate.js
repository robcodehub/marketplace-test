import styled from 'styled-components';

const ListingSectionTemplate = styled.div`
  grid-row-start: ${(props) => props.gridrowstart || 10};
  grid-row-end: ${(props) => props.gridrowend || 10};
  grid-column-start: ${(props) => props.gridcolstart || 1};
  grid-column-end: ${(props) => props.gridcolstart || -1};
  display: grid;
  grid-template-columns: ${(props) => props.gridtemplatecolumns || 'repeat(4, 1fr)'};
  grid-auto-rows: ${(props) => props.gridautorows || 'minmax(10%, auto)'};
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #000;
`;

export default ListingSectionTemplate;
