import { Headerbar, HeaderContainer, Linke } from "./styles"

import logo from '../../assets/images/logo.png'

const HeaderCardapios = () => (
    <Headerbar>
      <HeaderContainer>
          <Linke to='/restaurantes'>Restaurantes</Linke>
          <img src={logo} alt="Logo" />
          <a href="#">0 produto(s) no carrinho</a>
      </HeaderContainer>
    </Headerbar>
)

export default HeaderCardapios
