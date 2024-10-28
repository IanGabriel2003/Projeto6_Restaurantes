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
<<<<<<< HEAD
          <p>{descricao}</p>
=======
          <p>{getDescricao(descricao)}</p>
>>>>>>> 5b947323818306f8619664661d3a6e75246b7564
          <Button type="link" to="/cardapio/1" title="Veja os melhores restaurantes">Saiba Mais</Button>
        </Desc>
      </Produtos>
    </ProductLists>
)
}

export default Products
