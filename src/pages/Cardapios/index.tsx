import { useEffect, useState } from "react";

import CardapioHeader from "../../components/Cardapio Header";
import Cardapio from "../../components/Cardapio";

export type Comidas = {
  id: number
  titulo: string
  destacado: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

export const Cardapios = () => {
  const [cardapios, setCardapios] = useState<Comidas[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
    .then(res => res.json())
    .then(res => setCardapios(res))
  }, [])

  return (
    <>
      <CardapioHeader />
      <Cardapio comer={cardapios} />
    </>
  )
}

export default Cardapios
