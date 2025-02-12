import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    console.log('PRODUCT TO SHOW: ', context.productToShow)

    return (
        <aside 
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <button>
                    <XMarkIcon 
                        className="size-6 text-black"
                        onClick={() => context.closeProductDetail()}
                    />
                </button>
            </div>
            <figure className='px-6 flex flex-col overflow-y-auto'>
                <img 
                    className='w-full rounded-lg'
                    src={context.productToShow.images?.[0]} 
                    alt={context.productToShow.title} 
                />
                <p className='flex flex-col p-6'>
                    <span className='font-medium text-2xl'>${context.productToShow.price}</span>
                    <span className='font-medium text-md'>${context.productToShow.title}</span>
                    <span className='font-medium text-sm'>${context.productToShow.description}</span>
                </p>
            </figure>
        </aside>
    )
}

export default ProductDetail