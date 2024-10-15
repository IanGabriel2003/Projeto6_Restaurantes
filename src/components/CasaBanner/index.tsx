import { Headerbar, HeaderContainer } from '../HeaderCardapios/styles';
import { BemVindo } from './styles';

import logo from '../../assets/images/logo.png'

export const Casa = () => (
    <>
      <Headerbar>
        <HeaderContainer>
            <img src={logo} alt="Logo" />
        </HeaderContainer>
      </Headerbar>
      <BemVindo>
        <p>Viva experiências gastronômicas no conforto da sua casa</p>
      </BemVindo>
    </>
)

export default Casa
