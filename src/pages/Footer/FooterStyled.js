import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: rgba(29, 29, 28, 0.877);
  color: #ffffff;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

export const Text = styled.p`
  font-size: 0.875rem;
  margin: 0.5rem 0;
  font-weight: bold;
  text-align: center;
`;

export const Links = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0.5rem 0;
`;

export const Link = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 12px;

  &:hover {
    text-decoration: underline;
  }
`;