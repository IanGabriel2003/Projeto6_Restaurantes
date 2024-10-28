import { useEffect, useState } from "react";

import CardapioHeader from "../../components/Cardapio Header";
import Cardapio from "../../components/Cardapio";
import { Game } from "../Home";

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
<<<<<<< HEAD
  return (
    <>
      <CardapioHeader />
      <Cardapio capa={""} tipo={""} titulo={""} pratos={0} foto={""} nome={""} descricao={""} porcao={""} preco={0} />
=======
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
>>>>>>> 5b947323818306f8619664661d3a6e75246b7564
    </>
  )
}

export default Cardapios
