import styled from "styled-components";
import { cores } from "../../styles";

export const Container = styled.section`
  background-color: ${cores.branco};
  padding: 40px 0;
  font-size: 14px;
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
