import styled from "styled-components";
import { cores } from "../../styles";
import { TagContainer } from "../Tag/styles";
import { ButtonLink } from "../Button/styles";

export const ContainerList = styled.div`
`

export const ProductLists = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px 40px;
  align-items: center;
`

export const Produtos = styled.li`
  height: 402px;
  border: 1px solid ${cores.rosaEscuro};

  h2, p {
    color: ${cores.rosaEscuro};
    margin: 0px 8px;
  }

  p {
    font-size: 14px;
    margin: 8px 8px;
  }

  ${TagContainer} {
    margin-right: 16px;
  }
`

export const Principal = styled.div`
  position: relative;

  img {
      display: block;
      margin: 0 auto;
      width: 472px;
      height: 217px;
    }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 0px;
`

export const ProdutoNome = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;

  h2, p {
    font-size: 18px;
  }
`

export const Desc = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`
