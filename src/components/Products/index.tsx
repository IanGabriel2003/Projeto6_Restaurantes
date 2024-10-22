import { ContainerList, Infos, Principal, ProductLists, ProdutoNome, Produtos } from './styles';
import Button from "../Button";
import Tag from "../Tag";

type Props = {
  image: string;
  infos: string[]
  title: string;
  score: string;
  description: string;
}

const Products = ({ image, title, score, description, infos }: Props) => (
  <ContainerList>
    <ProductLists>
      <Produtos>
        <Principal>
            <img src={image} alt={title} />
            <Infos>
              {infos.map((info) => (
                <Tag key={info}>{info}</Tag>
              ))}
            </Infos>
        </Principal>
        <ProdutoNome>
          <h2>{title}</h2>
          <p>{score}</p>
        </ProdutoNome>
        <p>{description}</p>
        <Button type="link" to="/pratos" title="Veja os melhores restaurantes">Saiba Mais</Button>
      </Produtos>
    </ProductLists>
  </ContainerList>
)

export default Products
