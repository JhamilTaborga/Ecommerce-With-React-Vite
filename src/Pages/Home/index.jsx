import { useContext } from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import ProductDetail from '../../components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map((item) => (
            <Card 
              key={item.id} 
              data={item} 
            />
          ))
        )
      } else {
        return (
          <div>We don't have anything :(</div>
        )
      }
    }

    return (
      <Layout> 
        <div className='flex items-center justify-center relative w-80 mb-6'>
          <h1 className='font-medium text-xl mb-4'>Exclusibe Products</h1>
        </div>
        <input 
          type="text" 
          placeholder='Search a product'
          className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
          onChange={event => context.setSearchByTitle(event.target.value)}
          />
        <section className='grid grid-cols-4 gap-4 w-full max-w-screen-lg'>
        {renderView()}
        </section>
        <ProductDetail />
      </Layout>
    )
  }
  
  export default Home