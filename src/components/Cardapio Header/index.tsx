import { Headerbar, HeaderContainer, Linke } from "./styles"

import logo from '../../assets/images/logo.png'

const CardapioHeader = () => (
    <Headerbar>
      <HeaderContainer>
          <Linke to='/restaurantes'>Restaurantes</Linke>
          <img src={logo} alt="Logo" />
          <a href="a">0 produto(s) no carrinho</a>
      </HeaderContainer>
    </Headerbar>
)

export default CardapioHeader
