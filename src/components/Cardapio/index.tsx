import { useState } from "react";

import { Botao, SectionContainer, Prato, Pratos, Modal, BannerContainer, Imagem } from "./styles";

import close from '../../assets/images2/fechar.png'

type Props = {
<<<<<<< HEAD
  capa: string;
  tipo: string;
  titulo: string;
  pratos: number;
  foto: string;
  nome: string;
  descricao: string;
  porcao: string;
  preco: number;
}

interface ModalState {
  isVisible: boolean
}

export const Cardapio = ({ capa, tipo, titulo, pratos, foto, nome, descricao, porcao, preco }: Props) => {
  const [modal, setModal] = useState<ModalState>({
=======
  capa: string
  tipo: string
  titulo: string
  foto: string
  preco: number
  name: string
  descricao: string
  porcao: string
}

interface GalleryItem {
  isVisible: boolean
}

export const Cardapio = ({ capa, tipo, titulo, foto, preco, name, descricao, porcao }:Props) => {
  const [modal, setModal] = useState<GalleryItem>({
>>>>>>> 5b947323818306f8619664661d3a6e75246b7564
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  return (
    <>
      <BannerContainer>
<<<<<<< HEAD
        <Imagem style={{ backgroundImage: `url(${capa})`}}>
=======
        <Imagem >
>>>>>>> 5b947323818306f8619664661d3a6e75246b7564
          <div className="container">
            <h2>{tipo}</h2>
            <p>{titulo}</p>
          </div>
        </Imagem>
      </BannerContainer>
      <SectionContainer>
        <div className="container">
          <Pratos>
<<<<<<< HEAD
              <Prato key={foto}>
                <img
                  src={foto}
                  alt={`Foto de `}
=======
              <Prato>
                <img
                  src={foto}
                  alt={`Foto de ${name}`}
>>>>>>> 5b947323818306f8619664661d3a6e75246b7564
                  onClick={() => {
                    setModal({
                      isVisible: true
                    })
                  }}
                />
<<<<<<< HEAD
                <h2>{nome}</h2>
=======
                <h2>{name}</h2>
>>>>>>> 5b947323818306f8619664661d3a6e75246b7564
                <p>{descricao}</p>
                <Botao>Adicionar ao carrinho</Botao>
              </Prato>
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
            <img src={foto} alt="" />
            <div>
              <h4>{nome}</h4>
              <br />
              <p>{descricao}</p>
              <br />
              <p>{porcao}</p>
              <br />
              <button>{preco}</button>
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
