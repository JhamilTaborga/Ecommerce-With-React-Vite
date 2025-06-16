import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../components/Layout'
import OrderCard from '../../components/OrderCard'

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') +1)
  if (index === 'last') index = context.order?.length - 1
  
    return (
      <Layout>
        <div className='flex items-center justify-center relative w-72 md:w-80 mb-6'>
          <Link to='/my-orders' className='absolute left-0'>
            <ChevronLeftIcon className='size-6 text-black cursor-pointer' />
          </Link>
          <h1 className='font-medium text-xl'>My Order</h1>

        </div>
        <div className='flex flex-col gap-3 w-72 md:w-80 border border-slate-400 mb-5 p-4 md:p-8 rounded-2xl'>
          {
            context.order?.[index]?.products.map(product => (
              <OrderCard 
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.images}
                price={product.price}
              />
            ))
          }
        </div>
      </Layout>
    )
  }

export default MyOrder