import { Game } from "../../pages/Home"
import Cardapio from "../Cardapio"

import { CardapioLists } from "../Cardapio/styles"
import { CList } from "./styles"

export type Props = {
  gam: Game[]
}

const CardapioList = ({ gam }: Props) => (
  <div className="container">
    <CardapioLists>
      {gam.map(game => (
        <CList>
          <Cardapio
            key={game.id}
            capa={game.capa}
            tipo={game.tipo}
            titulo={game.titulo}
            pratos={game.cardapio.id}
            foto={game.cardapio.foto}
            nome={game.cardapio.nome}
            descricao={game.cardapio.descricao}
            porcao={game.cardapio.porcao}
            preco={game.cardapio.preco}
            />
        </CList>
      ))}
    </CardapioLists>
  </div>
)

export default CardapioList
