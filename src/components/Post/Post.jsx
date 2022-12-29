import { HeaderPost } from './HeaderPost'
import { ContentPost } from './ContentPost';
import { CommentPost } from './CommentPost';

import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <HeaderPost/> 
            <ContentPost/> 
            <CommentPost/>            
        </article>
    );
}