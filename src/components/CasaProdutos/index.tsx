import { Principal, ProdutoLista, ProdutoNome, Produtos } from './styles';
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
    <Principal>
      <div className="container">
        <ProdutoLista>
          <Produtos>
            <img src={image} alt={title} />
            <div>
              {infos.map((info) => (
                <Tag key={info}>{info}</Tag>
              ))}
            </div>
            <ProdutoNome>
              <h2>{title}</h2>
              <p>{score}</p>
            </ProdutoNome>
            <p>{description}</p>
            <Button type="link" to="/restaurantes" title="Veja os melhores restaurantes">Saiba Mais</Button>
          </Produtos>
        </ProdutoLista>
      </div>
    </Principal>
)

export default CasaProdutos
