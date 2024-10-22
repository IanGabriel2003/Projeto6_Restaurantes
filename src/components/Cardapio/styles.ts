import styled from "styled-components";
import { cores } from "../../styles";

export const Container = styled.section`
  background-color: ${cores.branco};
  padding: 40px 0;
  font-size: 14px;
`

export const Pratos = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 56px 0;
  gap: 32px;

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
`

export const Botao = styled.button`
  width: 304px;
  height: 24px;
  border: none;
  background-color: ${cores.branco};
  color: ${cores.rosaEscuro};
  cursor: pointer;
`
