import CardapioHeader from "../../components/Cardapio Header";
import Cardapio from "../../components/Cardapio";

import { Game } from "../Home";
import { useEffect, useState } from "react";

export const Cardapios = () => {
  const [cardapios, setCardapios] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
    .then(res => res.json())
    .then(res => setCardapios(res))
  }, [])

  return (
    <>
      <CardapioHeader />
      <Cardapio games={cardapios} />
    </>
  )
}

export default Cardapios
