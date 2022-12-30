import { HeaderPost } from './HeaderPost'
import { ContentPost } from './ContentPost';
import { CommentPost } from './CommentPost';

import styles from './Post.module.css'

export function Post({ author, content, publishedAt, comments }){
 
    return(
        <article className={styles.post}>
            <HeaderPost
               avatarUrl={author.avatarUrl}
               name={author.name}
               role={author.role}
               publishedAt={publishedAt}
            /> 
            <ContentPost
                content={content}                 
            />
            <CommentPost
                comments={comments}
            />   
        </article>
    );
}