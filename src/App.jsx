import { useState } from 'react'
import TwMenuItems from "./components/TwMenuItems"
import TwUserBox from './components/TwUserBox'
import TwPostCard from './components/TwPostCard'
import TwPost from './components/TwPost'

import home from "./img/home.png"
import hashtags from "./img/hashtags.png"
import msn from "./img/mail.png"
import './App.css'

function App() {
  const [viewPost, setviewPost] = useState(false)
  const [User,setUser] = useState({
    Tag: "Manuel",
    Username: "Manuel Hernandez"
  })
  const [Post,setPost] = useState([
    {
      Tag: "Manuel",
      Username: "Manuel Hernandez",
      msn: "Lorem Ipsum is sions of Lorem Ipsum."
    },
    {
      Tag: "Florian07",
      Username: "Esmerlin Florian",
      msn: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      Tag: "Hiji",
      Username: "Hiji Hernandez",
      msn: "Lorem Ipsumsoftware like Aldus PageMaker including versions of Lorem Ipsum."
    }
  ])

  const SwitchviewPost = () => {
    console.log("hola")
    setviewPost(!viewPost)
  }

  return (
    <>
      <div className='app'>
        <div className='tw-menu'>
          <TwMenuItems enunciado="Inicio" iconoURL={home} />
          <TwMenuItems enunciado="Explore" iconoURL={hashtags} />
          <TwMenuItems enunciado="Message" iconoURL={msn} />
          <div className='tw-menu-TwUserBox'>
            <TwUserBox Tag={User.Tag} Username={User.Username}/>
            <button className='btn btn-danger'>Cerrar Seccion</button>
          </div>
        </div>
        <div className='tw-index'>
          <h3>
            Home -
            {viewPost == false ? (
              <button className='btn btn-primary' onClick={SwitchviewPost}>Crear Post</button>
            ): (
              <button className='btn btn-secondary' onClick={SwitchviewPost}>No Postear</button>
            )}
          </h3>
          { 
            Post.map(function(element){
              return <TwPostCard Tag={element.Tag} Username={element.Username}  Msn={element.msn} />;
          })
          }

        </div>
        <div className='tw-novedad'>
          {viewPost ? (
            <TwPost Tag={User.Tag} Username={User.Username} />
          ): null}
        </div>
      </div>
    </>
  )
}

export default App
