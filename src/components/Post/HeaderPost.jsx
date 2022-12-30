import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Avatar } from '../Avatar/Avatar';
import styles from './HeaderPost.module.css';

export function HeaderPost({avatarUrl, name, role, publishedAt}){
    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", { 
        locale: ptBR, 
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })
    
    return(
        <header className={styles.header}>
            <div className={styles.author}>
                <Avatar src={avatarUrl} />
                <div className={styles.authorInfo}>
                    <strong>{name}</strong>
                    <span>{role}</span>
                </div> 
            </div>
            <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
        </header>
    );
}