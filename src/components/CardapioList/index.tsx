import { Game } from "../../pages/Home";
import Cardapio from "../Cardapio";

import { CardapioLists } from "../Cardapio/styles";
import { CdList } from "./styles";

export type Props = {
  games: Game[]
}

const CardapioList = ({ games }: Props) => {
    <div className="container">
      <CardapioLists>
        {games.map(game => (
          <CdList>
            <Cardapio
              key={game.cardapio.id}
              capa={game.capa}
              tipo={game.tipo}
              titulo={game.titulo}
              foto={game.cardapio.foto}
              preco={game.cardapio.preco}
              name={game.cardapio.nome}
              descricao={game.cardapio.descricao}
              porcao={game.cardapio.descricao}
            />
          </CdList>
        ))}
      </CardapioLists>
    </div>
}

export default CardapioList
