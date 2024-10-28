import styled from "styled-components";
import { cores } from "../../styles";

export const BannerContainer = styled.section`
  background-color: ${cores.branco};
  padding: 40px 0;
  font-size: 14px;
`

export const CardapioLists = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const Imagem = styled.div`
    width: 100%;
    height: 270px;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: -40px;

    h2 {
      padding-top: 16px;
      padding-bottom: 160px;
      font-weight: 200;
      font-size: 32px;
    }

    p {
      padding-bottom: 16px;
      font-weight: 900;
      font-size: 32px;
    }
`


export const SectionContainer = styled.section`
  background-color: ${cores.branco};
  padding: 40px 0;
  font-size: 14px;
`

export const Pratos = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  img {
    cursor: pointer;
    transition: ease-in .2s;

  &:hover {
    opacity: 0.5;
    transition: ease-out .2s;
  }
  }

  h2 {
    padding-top: 8px;
    font-weight: 900;
    font-size: 16px;
    line-height: 18.75px;
  }

  p {
    padding: 8px 0;
    font-weight: 300;
    font-size: 14px;
    line-height: 22px;
  }
`

export const Prato = styled.li`
  list-style: none;
  padding: 8px;
  max-width: 320px;
  width: 100%;
  background-color: ${cores.rosaEscuro};

  img {
    width: 304px;
    height: 167px;
  }
`

export const Botao = styled.button`
  width: 304px;
  height: 24px;
  border: none;
  background-color: ${cores.branco};
  color: ${cores.rosaEscuro};
  cursor: pointer;
  font-weight: bold;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .container {
    display: flex;
    flex-direction: column;
    background-color: ${cores.rosaEscuro};
    position: relative;
    z-index: 1;

    header {
      display: flex;
      justify-content: end;

      img {
        margin: 8px;
        cursor: pointer;
      }
    }

    > div {
      display: flex;
      padding: 0px 32px 32px 32px;
      gap: 24px;

      img {
        width: 280px;
        height: 280px;
        object-fit: cover;
      }

      button {
        color: ${cores.rosaEscuro};
        border: none;
        font-weight: bold;
        width: 218px;
        height: 24px;
        cursor: pointer;
      }
    }
  }
`
