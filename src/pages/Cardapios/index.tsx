import CardapioHeader from "../../components/Cardapio Header";
import Cardapio from "../../components/Cardapio";
import CardapioBanner from "../../components/Cardapio Banner";
import { useParams } from "react-router-dom";

export const Cardapios = () => {
  const { id } = useParams()

  return (
    <>
      <CardapioHeader />
      <CardapioBanner />
      <Cardapio name={'Teste'} />
    </>
  )
}

export default Cardapios
