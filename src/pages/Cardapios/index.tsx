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
  return (
    <>
      <CardapioHeader />
      <Cardapio capa={""} tipo={""} titulo={""} pratos={0} foto={""} nome={""} descricao={""} porcao={""} preco={0} />
    </>
  )
}

export default Cardapios
