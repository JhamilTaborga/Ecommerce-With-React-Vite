import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import { ShoppingCartContext } from '../../Context'
import OrdersCard from '../../components/OrdersCard'

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <h1 className='font-medium text-xl mb-4'>My Orders</h1>
       </div>
      {
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard 
             totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))
      }
    </Layout>
  )
  }
  
  export default MyOrders