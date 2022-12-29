import styles from  './Header.module.css'

export function Header(){
    return (
        <header className={styles.header}>
            <strong>Social</strong>
            <p>RDM</p>
        </header>        
    );
}