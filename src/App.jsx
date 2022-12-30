import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Post } from './components/Post/Post';

import styles from './App.module.css';
import './global.css';

const mockPost = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/RDMotta.png',
      name: 'Robson da Motta',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Post relacionado ao treinamento'},
      { type: 'link', content: 'localhost:3200'},
      { type: 'hashtag', content: '#hashtag'},
      { type: 'hashtag', content: '#hashtag2'},
    ],
    comments: [],
    publishedAt: new Date('2022-12-28 13:31:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/RDMotta.png',
      name: 'Robson da Motta',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Post relacionado ao treinamento'},
      { type: 'link', content: 'localhost:3200'},
      { type: 'hashtag', content: '#hashtag'},
      { type: 'hashtag', content: '#hashtag2'},
    ],
    comments: [
      {
        id: 1,
        content: [{ type: 'paragraph', content: 'Bacana seu post rapaz'}],
        author: {
          avatarUrl: 'https://github.com/diego3g.png',
          name: 'Diego Fernandes',
          role: 'CTO @Rocketseat'
        },
        publishedAt: new Date('2022-12-28 15:31:00')
      }
    ],
    publishedAt: new Date('2022-12-28 13:31:00')
  }
]

export function App() { 
  return (
    <>
    <Header/>
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        {mockPost.map( post =>{
          return(
            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              comments={post.comments}
            />
          )
        })}         
      </main>
    </div>
    
    </>
  )
}
