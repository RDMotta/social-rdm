import styles from './ContentPost.module.css'

export function ContentPost({ content }){
    return(
        <div className={styles.content}>
            {content.map(line =>{
                if (line.type == 'paragraph'){
                  return <p key={line.content}>{line.content}</p>  
                }
                if (line.type == 'link'){
                    return (
                        <p key={line.content}>
                            <a href="#">{line.content}</a>
                        </p>
                    )
                  }
            })} 
            
            <div className={styles.hashtag}>
                {content.map(line =>{
                    if (line.type == 'hashtag'){
                        return <a key={line.content} href="#">{line.content}</a>
                    }
                })} 
            </div>
        </div>
    );
}