import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    // console.log('PRODUCT TO SHOW: ', context.productToShow)

    return (
        <aside 
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} flex-col top-[68px] w-screen sm:w-[350px] h-[calc(100vh-68px)]  fixed right-0 border border-black rounded-lg bg-white overflow-y-auto`}
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
            <figure className='px-6 flex flex-col items-center overflow-y-auto'>
                <img 
                    className='max-w-[300px] px-3 sm:px-1 sm:w-full rounded-lg'
                    src={context.productToShow.images?.[0]} 
                    alt={context.productToShow.title} 
                />
                <p className='flex flex-col max-w-[300px] py-6 px-3'>
                    <div className='flex justify-between items-center mb-4'>
                        <span className='font-medium text-md'>{context.productToShow.title}</span>
                        <span className='font-medium text-2xl ml-2'>${context.productToShow.price}</span>
                    </div>
                    <span className='font-light text-sm'>{context.productToShow.description}</span>
                </p>
            </figure>
        </aside>
    )
}

export default ProductDetail