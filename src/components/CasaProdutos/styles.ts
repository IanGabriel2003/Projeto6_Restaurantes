import styled from "styled-components";
import { cores } from "../../styles";
import { TagContainer } from "../Tag/styles";

export const Principal = styled.main`
  background-color: ${cores.branco};

  .container {
  position: relative;
}
`

export const ProdutoLista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 80px 0;
  gap: 80px;
`

export const Produtos = styled.li`
  width: 473px;
  height: 398px;
  border: 1px solid ${cores.rosaEscuro};

${TagContainer} {
position: absolute;
top: 22px;
}

  h2, p {
    color: ${cores.rosaEscuro};
    margin: 8px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 16px;
  }
`

export const ProdutoNome = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 18px;
`
