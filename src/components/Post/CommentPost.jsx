import { Comment } from '../Comment/Comment';
import styles from './CommentPost.module.css'

export function CommentPost(){
    return(
        <>
        <form className={styles.commentForm}>
            <strong>Comente!</strong>
            <textarea placeholder="Deixe seu comentário..."/> 
            <button type="submit">Comentar</button>
        </form>
        <div className={styles.commentList}>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
        </>        
    );
}