import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css';

export function Comment({ author, comment, publishedAt, onDeleteComment }){
    const [likeCount, setLikeCount] = useState(0);

    const commentDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", { 
        locale: ptBR, 
    });

    const commentDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleDeleteComment(){
        onDeleteComment(comment);
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1;
        });
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={author.avatarUrl} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{author.name}</strong>
                            <time 
                                title={commentDateFormatted} 
                                dateTime={publishedAt.toISOString()}
                            >
                            {commentDateRelativeToNow}
                            </time>
                        </div>
                        <button 
                            onClick={handleDeleteComment} 
                            title="Deletar Comentário"
                        >
                            <Trash size={20}/>
                        </button>
                    </header> 
                    {comment.content.map(line =>{
                       if (line.type =='paragraph') {
                          return <p key={comment.id}>{line.content}</p>                
                       }
                    })}                 
                </div>
                <footer>
                    <button onClick={handleLikeComment} >
                        <ThumbsUp size={20}/>
                        Reconhecer <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}