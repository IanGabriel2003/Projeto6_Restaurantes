import styled from "styled-components";
import { cores } from "../../styles";
import { TagContainer } from "../Tag/styles";

export const ContainerList = styled.div`
  margin: 40px
`

export const ProductLists = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

`

export const Produtos = styled.li`
  width: 472px;
  height: 398px;
  border: 1px solid ${cores.rosaEscuro};

  img {
  display: block;
  margin: 0 auto;
  width: 472px;
  height: 217px;
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

  ${TagContainer} {
  margin-right: 16px;
  }
`

export const Infos = styled.div`
position: absolute;
top: 16px;
right: 0px;
`

export const Principal = styled.div`
  position: relative;
`

export const ProdutoNome = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 18px;
`
