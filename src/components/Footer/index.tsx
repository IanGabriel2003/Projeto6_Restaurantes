import { ContainerFooter, FooterSection, Link, Links, Textos } from './styles'

import logo from '../../assets/images/logo.png'
import insta from '../../assets/images/instagram-round-svgrepo-com1.png'
import face from '../../assets/images/facebook-round-svgrepo-com1.png'
import twitter from '../../assets/images/twitter-2-svgrepo-com1.png'

const Footer = () => (
  <ContainerFooter>
    <div className='container'>
      <FooterSection>
        <img src={logo} alt="Logo" />
        <Links>
          <Link>
            <img src={insta} alt="Instagram" />
          </Link>
          <Link>
            <img src={face} alt="Facebook" />
          </Link>
          <Link>
            <img src={twitter} alt="Twitter" />
          </Link>
        </Links>
      </FooterSection>
      <Textos>
        <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade </p>
        <p>dos produtos é toda do estabelecimento contratado. </p>
      </Textos>
    </div>
  </ContainerFooter>
)

export default Footer
