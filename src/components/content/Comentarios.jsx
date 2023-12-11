import styles from './Comentarios.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HalfRating, { TextRating } from '../assets/TextRating';
import GroupAvatars from '../assets/GroupAvatars';

export default function Comentarios({ comentarios }) {

  return (
    <>
      <h3>Comentários</h3>
      { comentarios.map((coment, index) => (
        <div key={coment.id || index} className={styles.card}>
          <div className={styles.cardHeader}>
            <GroupAvatars index={index} />
            <p className={styles.cardInfo}>{coment.nome}</p>
            <TextRating value={coment.nota}/>
          </div>
          <p className={styles.cardInfo}>{coment.mensagem}</p>
          <div className={styles.cardFooter}>
            <p className={styles.cardInfo}>{coment.dataPublicacao}</p>
          </div>
        </div>
      )) }
      <div className={styles.container_seu_comentario}>
        <h3>Faça seu comentário sobre o produto:</h3>
        <HalfRating />
        <div>
          <input></input>
          <button>Comentar</button>
        </div>
      </div>
    </>
  )
}