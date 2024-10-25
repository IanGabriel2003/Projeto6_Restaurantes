import styled from "styled-components";
import { cores } from "../../styles";

export const BemVindo = styled.div`
  max-width: 100%;
  padding-top: 100px;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
  background-color: ${cores.rosa};
  margin-bottom: 80px;

  p {
    text-align: center;
    width: 600px;
    color: ${cores.rosaEscuro};
    font-weight: 900;
    font-size: 36px;
  }
`


