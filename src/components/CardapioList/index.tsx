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

export default CardapioList
