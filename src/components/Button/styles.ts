import styled from "styled-components";
import { Link } from 'react-router-dom'

import { cores } from "../../styles";

export const ButtonContainer = styled.button`
  background: none;
  border: none;
  color: ${cores.rosaEscuro};
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  padding: 4px 8px;
  margin-left: 8px;
  font-size: 14px;
  color: ${cores.branco};
  background-color: ${cores.rosaEscuro};
  cursor: pointer;
  text-decoration: none;
`
