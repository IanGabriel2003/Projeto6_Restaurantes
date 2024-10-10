import { Headerbar } from "./style"

import logo from '../../assets/images/logo.png'

const Header = () => (
    <Headerbar>
        <p>Restaurantes</p>
        <img src={logo} alt="Logo" />
        <p>0 produto(s) no carrinho</p>
    </Headerbar>
)

export default Header
