import { useEffect, useState } from "react"

import Banner from "../../components/Banner"
import Products from "../../components/ProductsList"

import sushi from '../../assets/images/imagem.png'
import macarrao from '../../assets/images/image1.png'

export type Game = {
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

const Home = () => {
  const [pratos, setPratos] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
    .then(res => res.json())
    .then(res => setPratos(res))
  }, [])

  return (
    <>
      <Banner />
      <Products games={pratos} />
    </>
  )
}

export default Home
