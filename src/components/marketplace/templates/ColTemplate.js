import styled from 'styled-components';

const media = {
  xs: (styles) => `
    @media only screen and (max-width: 480px) {
      ${styles}
  }
  `,
};

const Col = styled.div`
  flex: ${(props) => props.size};
  ${(props) => props.collapse && media[props.collapse](`display: none;`)};
  color: ${(props) => props.color || '#000'};

  a {
    color: ${(props) => props.color || '#000'};
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 20%;
    text-decoration-color: #f5a622;
    cursor: pointer;
  }
`;

export default Col;
