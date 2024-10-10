import styled from "styled-components";
import { cores } from "../../styles";

export const ContainerFooter = styled.footer`
  background-color: ${cores.rosa};
  padding: 40px 0;
  font-size: 14px;
`

export const Textos = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  color: ${cores.rosaEscuro};
`

export const FooterSection = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 32px;
`

export const Link = styled.li`
  list-style: none;
  margin: 8px;
  cursor: pointer;
`
