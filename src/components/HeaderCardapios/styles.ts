import styled from "styled-components";
import { cores } from '../../styles'
import { Link } from "react-router-dom";

export const Headerbar = styled.header`
  background-color: ${cores.rosa};
  padding: 64px;

  a {
        color: ${cores.rosaEscuro};
        text-decoration: none;
        font-weight: bold;
    }
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Linke = styled(Link)`
  color: ${cores.rosaEscuro};
  text-decoration: none;
  font-weight: bold;
  margin-left: 40px;
`
