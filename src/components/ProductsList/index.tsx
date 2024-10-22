import { Game } from '../../pages/Home'
import Products from '../Products'

import { ProductLists } from '../Products/styles'
import { List } from './styles'

export type Props = {
  games: Game[]
}

const ProductList = ({ games }: Props) => (
  <div className="container">
    <ProductLists>
      {games.map(game => (
        <List>
          <Products
            key={game.id}
            titulo={game.titulo}
            destacado={game.destacado}
            tipo={game.tipo}
            avaliacao={game.avaliacao}
            descricao={game.descricao}
            capa={game.capa}
            />
        </List>
      ))}
    </ProductLists>
  </div>
)

export default ProductList
