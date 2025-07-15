import { useEffect, useState } from 'react'
import api from './api'
import Navbar from '../src/components/Navbar/Navbar'
import hamburger from '../src/assets/hamburger.jpg'

function App() {
  const [posts, setPosts] = useState([])

    async function showPosts(){
      try {

        const data = await api.get('/get-posts')

        setPosts(data.data)

        return posts
        
      } catch (error) {
        return alert(error)
      }
    }

    useEffect(() => {
      showPosts()
    }, [])

  return (
    <>
    <Navbar />
      <div className="max-md:mt-[360px] 
      mt-10
      max-md:mt-[450px]
      w-full h-screen items-center justify-center 
      flex flex-col flex-1 bg-amber-50 text-green-700">
        {posts.map(items => {
          return (
          <div  className="rounded-bl-lg 
         max-md:flex-col
          mb-9 flex w-[68%] h-auto
           text-white items-center
           justify-between
           max-md:w-[100%]
           max-md:h-auto
           
           
           max-md:justify-center  p-6 bg-gray-500" key={items.id}>

            <img src={hamburger} width="270" alt="imagem"/>

          <div className="flex-col max-md:justify-start max-md:items-start
           max-md:w-[200px] max-md:ml-[-150px]">

            <h1 className='text-[28px] max-md:w-[240px] max-md:ml-[40px]
             flex items-center justify-center'>{items.title}</h1>

          
            <br />
            <div  style={{textIndent: '20px', display: 'flex',  letterSpacing: '1px'}}
             className='flex max-md:p-3 max-md:w-[300px] ml-8 w-[90%] text-[15px]'>{items.text}</div>
            <br />
            <p className="ml-[80px] max-md:w-[300px]">Autor: {items.author}</p>
            <br />
            </div>
           
            </div>
            )
        })}
      
      </div>
    </>
  )
}

export default App
