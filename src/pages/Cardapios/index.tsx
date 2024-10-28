import CardapioHeader from "../../components/Cardapio Header";
import Cardapio from "../../components/Cardapio";
import { Game } from "../Home";

export const Cardapios = () => {
  return (
    <>
      <CardapioHeader />
      <Cardapio capa={""} tipo={""} titulo={""} pratos={0} foto={""} nome={""} descricao={""} porcao={""} preco={0} />
    </>
  )
}

export default Cardapios
