import styles from './ProdutosRelacionados.module.css';

export default function ProdutosRelacionados({ produtosRelacionados }) {
  return (
    <>
      <h3>Produtos Relacionados</h3>
      <div className={styles.container_prod_relacinado}>
        {produtosRelacionados.map((prod, index) => (
          <div key={prod.id || index} className={styles.card}>
            <img src={prod.imagem} alt={prod.nome} className={styles.imagemProduto} />
            <p className={styles.cardInfo}>{prod.nome}</p>
            <p className={styles.cardpreco}>{prod.preco}</p>
            <p className={styles.pagamento}>{prod.pagamento}</p>

          </div>
      

        ))}
      </div>
    </>
  )
}