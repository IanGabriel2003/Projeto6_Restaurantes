import { ContainerList, Infos, Principal, ProductLists, ProdutoNome, Produtos } from './styles';
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

const Products = ({ titulo, destacado, tipo, avaliacao, descricao, capa }: Props) => (
  <ContainerList>
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
          <p>{avaliacao}</p>
        </ProdutoNome>
        <p>{descricao}</p>
        <Button type="link" to="/cardapio" title="Veja os melhores restaurantes">Saiba Mais</Button>
      </Produtos>
    </ProductLists>
  </ContainerList>
)

export default Products
