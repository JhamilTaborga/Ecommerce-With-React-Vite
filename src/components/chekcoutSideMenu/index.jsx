import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import OrderCard from '../../components/OrderCard'
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    console.log('CART: ', context.cartProducts)

    return (
        <aside 
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <button>
                    <XMarkIcon 
                        className="size-6 text-black"
                        onClick={() => context.closeCheckoutSideMenu()}
                    />
                </button>
            </div>
            <div className='px-6 overflow-y-auto'>
            {
                context.cartProducts.map(product => (
                    <OrderCard 
                        key={product.id}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                    />
                ))
            }
            </div>
        </aside>
    )
}

export default CheckoutSideMenu