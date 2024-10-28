<<<<<<< HEAD
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
=======
import { Comidas } from "../../pages/Cardapios";
import Cardapio from "../Cardapio";

import { CardapioLists } from "../Cardapio/styles";
import { CdList } from "./styles";

export type Props = {
  comer: Comidas[]
}

const CardapioList = ({ comer }: Props) => {
  <div className="container">
    <CardapioLists>
      {comer.map(come => (
        <CdList>
          <Cardapio
            key={come.cardapio.id}
            capa={come.capa}
            tipo={come.tipo}
            titulo={come.titulo}
            foto={come.cardapio.foto}
            preco={come.cardapio.preco}
            name={come.cardapio.nome}
            descricao={come.cardapio.descricao}
            porcao={come.cardapio.descricao}
          />
        </CdList>
      ))}
    </CardapioLists>
  </div>
}
>>>>>>> 5b947323818306f8619664661d3a6e75246b7564

export default CardapioList
