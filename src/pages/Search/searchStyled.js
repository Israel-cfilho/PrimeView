import styled from 'styled-components';

export const ResultadosContainer = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  max-width: 1024px;
  margin: 26px auto;



    @media (max-width: 870px) {
    grid-template-columns: repeat(2, 1fr);
  }

    @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;


export const FilmeItem = styled.div`
  background-color: #116feb;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.02);
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }

  img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  span {
    padding: 10px;
    text-align: center;
    font-weight: bold;
    margin-top: 15px;
    font-size: 12px;
    color: #fff;
  }

    @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

`;
