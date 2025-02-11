import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)

    return (
        <aside 
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
        >
            <div className='flex justify-between itmes-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <button>
                    <XMarkIcon 
                        className="size-6 text-black"
                        onClick={() => context.closeProductDetail()}
                    />
                </button>
            </div>
        </aside>
    )
}

export default ProductDetail