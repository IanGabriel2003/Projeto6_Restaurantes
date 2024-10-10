import CasaProdutos from '../CasaProdutos'
import Game from '../../models/Game'

import { ProdutoLista } from '../CasaProdutos/styles'
import { List } from './styles'

export type Props = {
  games: Game[]
}

const CasaProdutosLista = ({ games }: Props) => (
  <div className="container">
    <ProdutoLista>
      {games.map(game => (
        <List>
          <CasaProdutos
            key={game.id}
            image={game.image}
            infos={game.infos}
            title={game.title}
            score={game.score}
            description={game.description}
            />
        </List>
      ))}
    </ProdutoLista>
  </div>
)

export default CasaProdutosLista
