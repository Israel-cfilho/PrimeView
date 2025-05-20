import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FavoritoCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  background-color: #1c1c1c;
  padding: 12px;
  border-radius: 8px;
  height: 100%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

export const TituloFilme = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const DetalheLink = styled(Link)`
  text-decoration: none;
  color: #58d874;
  font-size: 13px;
  font-weight: bold;

  &:hover {
    border-bottom: 1px solid #58d874;
  }
`;

export const BotaoExcluir = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: rgb(145, 14, 14);
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  font-size: 10px;

  &:hover {
    background-color: rgba(194, 25, 25, 0.87);
  }
`;
