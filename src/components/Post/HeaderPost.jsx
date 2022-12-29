import { Avatar } from '../Avatar/Avatar';
import styles from './HeaderPost.module.css'

export function HeaderPost(){
    return(
        <header className={styles.header}>
            <div className={styles.author}>
                <Avatar src="https://github.com/RDMotta.png" />
                <div className={styles.authorInfo}>
                    <strong>Robson da Motta</strong>
                    <span>Web Developer</span>
                </div> 
            </div>
            <time title="28 de Dezembro às 13:31" dateTime="2022-12-28 13:31:00">Publicado há um tempo</time>
        </header>
    );
}