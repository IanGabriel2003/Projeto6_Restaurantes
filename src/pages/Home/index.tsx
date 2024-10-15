import Casa from "../../components/CasaBanner"
import CasaProdutosLista from "../../components/CasaProdutosLista"
import Game from "../../models/Game"

import sushi from '../../assets/images/imagem.png'
import macarrao from '../../assets/images/image1.png'

const pratos: Game[] = [
  {
    id: 1,
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    score: '4.9⭐',
    description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 2,
    image: macarrao,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    score: '4.9⭐',
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 3,
    image: macarrao,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    score: '4.9⭐',
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 4,
    image: macarrao,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    score: '4.9⭐',
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 5,
    image: macarrao,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    score: '4.9⭐',
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 6,
    image: macarrao,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    score: '4.9⭐',
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const Home = () => (
  <>
    <Casa />
    <CasaProdutosLista games={pratos} />
  </>
)

export default Home
