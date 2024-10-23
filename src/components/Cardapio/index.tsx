import { useState } from "react";

import { Botao, SectionContainer, Prato, Pratos, Modal, BannerContainer, Imagem } from "./styles";

import close from '../../assets/images2/fechar.png'

interface GalleryItem {
  foto: string,
  descricao: string,
}


type Props = {
  capa: string
  tipo: string
  titulo: string
  foto: string
  preco: number
  name: string
  descricao: string
  porcao: string
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

export const Cardapio = ({ capa, tipo, titulo, foto, preco, name, descricao, porcao }:Props) => {

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    foto: '',
    descricao: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      foto: '',
      descricao: ''
    })
  }

  return (
    <>
      <BannerContainer>
        <Imagem >
          <div className="container">
            <h2>{tipo}</h2>
            <p>{titulo}</p>
          </div>
        </Imagem>
      </BannerContainer>
      <SectionContainer>
        <div className="container">
          <Pratos>
              <Prato>
                <img
                  src={foto}
                  alt={`Foto de ${name}`}
                  onClick={() => {
                    setModal({
                      isVisible: true,
                      foto: foto,
                      descricao: descricao
                    })
                  }}
                />
                <h2>{name}</h2>
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
              <h4>{name}</h4>
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
