import { Container, Imagem } from "./styles";

import bannerImg from '../../assets/images/image2.png'

export const BannerItaliana = () => (
  <Container>
    <Imagem style={{ backgroundImage: `url(${bannerImg})`}}>
      <div className="container">
        <h2>Italiana</h2>
        <p>La Dolce Vita Trattoria</p>
      </div>
    </Imagem>
  </Container>

)

export default BannerItaliana
