import  { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1667143139219-93ee3b53395c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
                alt="imagem topo"
            />
            <div className={styles.profile}>
                <Avatar src="https://github.com/RDMotta.png" />
                <strong>Robson da Motta</strong>
                <span>Web Developer</span>
            </div>

            <footer className={styles.footer}>                
                <a href="#">
                <PencilLine size={20}/>
                Editar perfil
                </a>
            </footer>
        </aside>
    );
}