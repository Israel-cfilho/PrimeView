
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListaFilmes = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  max-width: 1024px;
  margin: 0 auto;
`;


export const FilmeCard = styled.article`
  width: 100%;
  background-color: #f0eeee;
  padding: 15px;
  border-radius: 4px;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.02);
  }
`;

export const FilmeImagem = styled.img`
  width: 400px;
  max-width: 100%;
  max-height: 340px;
  object-fit: cover;
  display: block;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const BotaoAcessar = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  font-size: 24px;
  background-color: #116feb;
  text-decoration: none;
  color: #fff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;