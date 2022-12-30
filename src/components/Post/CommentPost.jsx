import { useState } from 'react';
import { Comment } from '../Comment/Comment';
import styles from './CommentPost.module.css'

export function CommentPost({ comments }){
    const [commentsPost, setComments] = useState([...comments]);
    const [newCommentText, setNewCommentText] = useState('');

    function handleCreateNewComment() {
        event.preventDefault();      

        const coment = {
            id: 8,
            content: [{ type: 'paragraph', content: newCommentText}],
            author: {
              avatarUrl: 'https://github.com/diego3g.png',
              name: 'Diego Fernandes',
              role: 'CTO @Rocketseat'
            },
            publishedAt: new Date('2022-12-28 15:31:00')
          }

        setComments([...commentsPost, coment]);
        setNewCommentText('');
    }

    function handleNewCommentChange(){
       event.target.setCustomValidity('');
       setNewCommentText(event.target.value);  
    }

    function deleteComment(commnetToDelete){ 
        const commentListResult = commentsPost.filter(comment => {
           return  commnetToDelete.id != comment.id;
        });    
        setComments(commentListResult);    
    }

    function handleNewCommentValid(){
        event.target.setCustomValidity('Para adicionar um comentário precisa informar um texto');
    }

    const isCommentEmpty = newCommentText.length <= 0;

    return(
        <>
        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Comente!</strong>
            <textarea 
                placeholder="Deixe seu comentário..."                
                value={newCommentText}
                onChange={handleNewCommentChange}
                onInvalid={handleNewCommentValid}
                required
            /> 
            <button 
                type="submit"
                disabled={isCommentEmpty}
            >
            Comentar
            </button>
        </form>
        <div className={styles.commentList}>
           {commentsPost.map(comment => {                 
                return (
                    <Comment
                        key={comment.id}
                        author={comment.author}
                        comment={comment}                        
                        publishedAt={comment.publishedAt} 
                        onDeleteComment={deleteComment}
                    />
                );
            })
           }          
        </div>
        </>        
    );
}