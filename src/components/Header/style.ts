import styled from "styled-components";
import { cores } from '../../styles'

export const Headerbar = styled.header`
    background-color: ${cores.rosa};
    padding: 64px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;

    p {
        color: ${cores.rosaEscuro};
        text-decoration: none;
        font-weight: bold;
    }
`
