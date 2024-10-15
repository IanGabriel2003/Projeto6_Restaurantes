import { ContainerList, Infos, Principal, ProdutoLista, ProdutoNome, Produtos } from './styles';
import Button from "../Button";
import Tag from "../Tag";

type Props = {
  image: string;
  infos: string[]
  title: string;
  score: string;
  description: string;
}

const CasaProdutos = ({ image, title, score, description, infos }: Props) => (
  <ContainerList>
    <ProdutoLista>
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
        <Button type="link" to="/italiana" title="Veja os melhores restaurantes">Saiba Mais</Button>
      </Produtos>
    </ProdutoLista>
  </ContainerList>
)

export default CasaProdutos
