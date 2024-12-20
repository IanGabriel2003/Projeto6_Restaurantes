import { useState } from "react";

import { Botao, SectionContainer, Prato, Pratos, Modal, BannerContainer, Imagem } from "./styles";

import close from '../../assets/images2/fechar.png'

type Props = {
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
        <Imagem style={{ backgroundImage: `url(${capa})`}}>
          <div className="container">
            <h2>{tipo}</h2>
            <p>{titulo}</p>
          </div>
        </Imagem>
      </BannerContainer>
      <SectionContainer>
        <div className="container">
          <Pratos>
              <Prato key={foto}>
                <img
                  src={foto}
                  alt={`Foto de `}
                  onClick={() => {
                    setModal({
                      isVisible: true
                    })
                  }}
                />
                <h2>{nome}</h2>
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
