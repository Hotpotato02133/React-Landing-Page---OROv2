import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
    scrollbar-width: thin;
    scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
  }
  *::-webkit-scrollbar {
    width: 0.5px;
  }
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
    border: transparent;
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? 'linear-gradient(45deg, rgb(116, 109, 44), rgb(156, 145, 40))' : 'transparent')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: ${({ primary }) => (primary ? '#fff' : '#0467FB')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: ${({ primary }) => (primary ? 'none' : '1px solid #0467FB')};
  cursor: pointer;
  &:hover {
    background: ${({ primary }) =>
      primary
        ? 'linear-gradient(45deg, rgb(68, 62, 11), rgb(160, 147, 23))'
        : 'linear-gradient(45deg, rgb(75, 89, 247), rgb(4, 103, 251))'};
    transform: translateY(-2px);
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyles;
