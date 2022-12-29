import styles from './ContentPost.module.css'

export function ContentPost(){
    return(
        <div className={styles.content}>
            <p>Post relacionado ao treinamento</p>
            <p>
                <a href="#">localhost:3200</a>
            </p>
            <div className={styles.hashtag}>
                <a href="#">#hashtag</a>
                <a href="#">#hashtag2</a>
            </div>
        </div>
    );
}