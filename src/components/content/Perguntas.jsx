import styles from './Perguntas.module.css';

export default function Perguntas({ perguntas }) {
  return (
    <>
      <h3>Perguntas</h3>
      { perguntas.map((perg, index) => (
        <div key={index} className={styles.card}>
          <p className={styles.cardInfo}>{perg.pergunta}</p>    
          <p className={styles.carddetails}>Pergunta feita por {perg.nome} em {perg.dataPublicacao}</p>
    
          <p>{perg.resposta ?? "Sem resposta."}</p>
        </div>
      ))}
    </>
  )
}