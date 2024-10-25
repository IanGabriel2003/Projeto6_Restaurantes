import { useState } from "react";

import { Botao, SectionContainer, Prato, Pratos, Modal, BannerContainer, Imagem } from "./styles";

import close from '../../assets/images2/fechar.png'

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

interface GalleryItem {
  isVisible: boolean
}

export const Cardapio = ({ capa, tipo, titulo, foto, preco, name, descricao, porcao }:Props) => {
  const [modal, setModal] = useState<GalleryItem>({
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
                      isVisible: true
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
