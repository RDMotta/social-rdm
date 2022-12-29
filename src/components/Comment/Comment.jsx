import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css';

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/RDMotta.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Robson da Motta</strong>
                            <time title="28 de Dezembro às 13:31" dateTime="2022-12-28 13:31:00">Publicado há um tempo</time>
                        </div>
                        <button title="Deletar Comentário">
                            <Trash size={20}/>
                        </button>
                    </header> 
                    <p>Parabéns pelo bom trabalho</p>               
                </div>
                <footer>
                    <button >
                        <ThumbsUp size={20}/>
                        Reconhecer <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}