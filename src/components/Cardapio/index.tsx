import { useState } from "react";

import { Botao, SectionContainer, Prato, Pratos, Modal, BannerContainer, Imagem } from "./styles";

import esfiha from '../../assets/images/image3.png'
import close from '../../assets/images2/fechar.png'
import bannerImg from '../../assets/images/image2.png'

interface GalleryItem {
  foto: string,
  nome: string,
  descricao: string,
}

const mockCardapio: GalleryItem[] = [
  {
    foto: esfiha,
    nome: 'Pizza Marguerita',
    descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
]

type Props = {
  name: string
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

export const Cardapio = ({ name }:Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    foto: '',
    nome: '',
    descricao: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      foto: '',
      nome: '',
      descricao: ''
    })
  }

  return (
    <>
      <BannerContainer>
        <Imagem style={{ backgroundImage: `url(${bannerImg})`}}>
          <div className="container">
            <h2>Italiana</h2>
            <p>La Dolce Vita Trattoria</p>
          </div>
        </Imagem>
      </BannerContainer>
      <SectionContainer>
        <div className="container">
          <Pratos>
            {mockCardapio.map((media, index) => (
              <Prato key={media.foto}>
                <img
                  src={media.foto}
                  alt={`Foto ${index + 1} de ${name}`}
                  onClick={() => {
                    setModal({
                      isVisible: true,
                      foto: media.foto,
                      nome: media.nome,
                      descricao: media.descricao
                    })
                  }}
                />
                <h2>{media.nome}</h2>
                <p>{media.descricao}</p>
                <Botao>Adicionar ao carrinho</Botao>
              </Prato>
            ))}
          </Pratos>
        </div>
      </SectionContainer>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <div className="container">
          <header>
            <img
              src={close}
              alt="Fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          <div>
            <img src={modal.foto} alt="" />
            <div>
              <h4>{name}</h4>
              <br />
              <p>A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.</p>
              <br />
              <p>Serve: de 2 a 3 pessoas</p>
              <br />
              <button>Adicionar ao carrinho - R$ 60,90</button>
            </div>
          </div>
        </div>
        <div className="overlay"
          onClick={() => {
            closeModal()
          }}
        />
      </Modal>
    </>
  )
}

export default Cardapio
