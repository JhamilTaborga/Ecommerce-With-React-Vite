import { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import { apiUrl } from '../../Api'

function Home() {
  const [items, setItems] = useState(null)

  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/products`)
        const data = await response.json()
        setItems(data)
      } catch (error) {
        console.error(`Oh no, ocurrió un error: ${error}`)  
      }
    }
    fetchData()
  }, [])

    return (
      <Layout> 
        Home
        <section className='grid grid-cols-4 gap-4 w-full max-w-screen-lg'>
        {
          items?.map((item) => (
            <Card 
              key={item.id} 
              data={item} 
            />
          ))
        }
        </section>
      </Layout>
    )
  }
  
  export default Home