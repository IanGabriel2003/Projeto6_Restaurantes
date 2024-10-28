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
