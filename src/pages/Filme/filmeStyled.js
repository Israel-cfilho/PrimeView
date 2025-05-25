import styled from "styled-components";

export const FilmeInfo = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 0 8px;
  width: 100%;
  box-sizing: border-box;

  h1 {
    margin: 14px 0;
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
  }

  strong {
    color: #fff;
  }

  img {
    border-radius: 8px;
    width: 50%;
    height: 100%;
    object-fit: cover;
  }

  h3 {
    margin-top: 14px;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
  }

  span {
    margin: 8px 0;
    color: #fff;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    padding: 0 15px;

    h1 {
      font-size: 1.8rem;
    }

    h3 {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 1.3rem;
    }

    h3 {
      font-size: 1.1rem;
    }
  }
`;

export const BackgroundFilme = styled.div`
  position: relative;
  color: white;
  padding: 40px 20px;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

export const FilmeConteudo = styled.div`
  display: flex !important;
  align-items: flex-start;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 816px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FilmeCapa = styled.div`
  img {
    width: 300px;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 816px) {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;

    img {
      width: 60%;
      max-width: 300px;
    }
  }
`;

export const CapaEBotoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const AreaButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 300px;

  button {
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    flex: 1;
    text-align: center;
  }

  button:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  a {
    color: white;
    text-decoration: none;
  }

  @media (max-width: 400px) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;

export const FilmeTexto = styled.div`
  max-width: 700px;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  @media (max-width: 816px) {
    width: 100%;
  }
`;

export const Generos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

export const GeneroTag = styled.span`
  padding: 5px 15px;
  border: 1px solid white;
  border-radius: 999px;
  font-size: 0.9rem;
`;

export const Sinopse = styled.div`
  p {
    line-height: 1.5;
  }
`;

export const ElencoContainer = styled.div`
  margin-top: 30px;
  padding: 15px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 12px;
  overflow-x: auto;
  width: 100%;

  h3 {
    margin-bottom: 25px;
  }
`;

export const ElencoSlider = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const ElencoTrack = styled.div`
  display: flex;
  gap: 15px;
  padding: 10px 0;
  width: max-content;
  animation: scroll-elenco 40s linear infinite;

  @keyframes scroll-elenco {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @media (max-width: 816px) {
    animation: scroll-elenco 40s linear infinite;
  }

  @media (min-width: 1024px) {
    animation: scroll-elenco 40s linear infinite;
  }
`;

export const Ator = styled.div`
  flex: 0 0 auto;
  text-align: center;
  min-width: 110px;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  p {
    font-size: 0.95rem;
    margin-top: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 816px) {
    min-width: 95px;

    img {
      width: 80px;
      height: 80px;
    }
  }

  @media (max-width: 768px) {
    margin: 0 10px;
  }

  @media (max-width: 576px) {
    margin: 0 8px;

    img {
      width: 45px;
      height: 45px;
    }

    p {
      font-size: 10px;
    }
  }

  @media (max-width: 400px) {
    margin: 0 6px;

    img {
      width: 40px;
      height: 40px;
    }
  }
`;

export const Avaliacao = styled.div`
  margin-top: 30px;
  text-align: center;

  h3 {
    color: white;
  }
`;

export const Estrelas = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;

  .star {
    cursor: pointer;
    transition: color 200ms;
  }

  input[type="radio"] {
    display: none;
  }
`;

export const BtnAvaliacao = styled.button`
  margin-top: 15px;
  border: 0;
  padding: 8px 12px;
  background: linear-gradient(90deg, #ffd700, #ff8c00, #ff4500);
  color: #fff;
  font-weight: bold;
  border-radius: 4px;
  width: 100%;
  max-width: 200px;
  margin-bottom: 18px;
`;
