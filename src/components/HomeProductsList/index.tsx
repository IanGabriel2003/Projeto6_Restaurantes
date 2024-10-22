import Game from '../../models/Game'
import HomeProducts from '../HomeProducts'

import { ProductList } from '../HomeProducts/styles'
import { List } from './styles'

export type Props = {
  games: Game[]
}

const HomeProductList = ({ games }: Props) => (
  <div className="container">
    <ProductList>
      {games.map(game => (
        <List>
          <HomeProducts
            key={game.id}
            image={game.image}
            infos={game.infos}
            title={game.title}
            score={game.score}
            description={game.description}
            />
        </List>
      ))}
    </ProductList>
  </div>
)

export default HomeProductList
