import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import OrderCard from '../../components/OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '02.20.25',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.closeCheckoutSideMenu()
    }

    return (
        <aside 
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <button>
                    <XMarkIcon 
                        className='size-6 text-black'
                        onClick={() => context.closeCheckoutSideMenu()}
                    />
                </button>
            </div>
            <div className='px-6 overflow-y-auto flex-1'>
            {
                context.cartProducts.map(product => (
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.images}
                        price={product.price}
                        handleDelete={handleDelete}
                    />
                ))
            }
            </div>
            <div className='px-6 mb-6'>
                <p className='mb-2 flex justify-between items-center'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last' >
                <button className='w-full py-3 bg-black text-white rounded-lg ' onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu