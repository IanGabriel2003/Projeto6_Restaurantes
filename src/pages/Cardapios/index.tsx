import CardapioHeader from "../../components/Cardapio Header";
import Cardapio from "../../components/Cardapio";
import CardapioBanner from "../../components/Cardapio Banner";

export const Cardapios = () => {

  return (
    <>
      <CardapioHeader />
      <CardapioBanner />
      <Cardapio name={'Teste'} />
    </>
  )
}

export default Cardapios
