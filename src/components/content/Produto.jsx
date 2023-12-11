import styles from './Produto.module.css';
import Galeria from './Galeria';
import { BaseButton } from '../assets/Componentes';
import TextRating from '../assets/TextRating';

export default function Produto(props) {

  const nome = props.produto.nome;
  const descricao = props.produto.descricao;
  const preco = props.produto.preco;
  const nota = props.produto.nota;
  const imagens = props.produto.imagens;
  

  const precoInvisivel = false;
  let estiloPreco =
    precoInvisivel
      ? styles.precoInvisivel
      : styles.precoProduto;

  return (
    <>
      <div>
        <h2 className={styles.cabecalhoProduto} >{nome}</h2>

        <Galeria imagens={imagens} />

        <h3 className='cabecalho_descricao'>Descrição do Produto:</h3>
        <p className={styles.descricaoProduto}>{descricao}</p>

        <div className={styles.painelCompra}>
          <p className={estiloPreco}>R$ {preco}</p>
          <TextRating value={nota}/><p>{nota}/5 </p>
          <BaseButton className={styles.button_compra} type='sucesso'>Comprar</BaseButton>
        </div>
      </div>
    </>
  )
}