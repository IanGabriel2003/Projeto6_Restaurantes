import Game from '../../models/Game'
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
            image={game.image}
            infos={game.infos}
            title={game.title}
            score={game.score}
            description={game.description}
            />
        </List>
      ))}
    </ProductLists>
  </div>
)

export default ProductList
