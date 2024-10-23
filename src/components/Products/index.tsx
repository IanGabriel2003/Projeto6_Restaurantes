import { Desc, Infos, Principal, ProductLists, ProdutoNome, Produtos } from './styles';
import Button from "../Button";
import Tag from "../Tag";

type Props = {
  titulo: string;
  destacado: string;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
}

const Products = ({ titulo, destacado, tipo, avaliacao, descricao, capa }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 314) {
      return descricao.slice(0, 314) + '...'
    }
    return descricao
  }

  return (
    <ProductLists>
      <Produtos>
        <Principal>
            <img src={capa} alt={titulo} />
            <Infos>
              <Tag>{destacado}</Tag>
              <Tag>{tipo}</Tag>
            </Infos>
        </Principal>
          <ProdutoNome>
            <h2>{titulo}</h2>
            <p>{avaliacao}⭐</p>
          </ProdutoNome>
        <Desc>
          <p>{getDescricao(descricao)}</p>
          <Button type="link" to="/cardapio" title="Veja os melhores restaurantes">Saiba Mais</Button>
        </Desc>
      </Produtos>
    </ProductLists>
)
}

export default Products
