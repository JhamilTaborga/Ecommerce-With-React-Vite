import { CalendarDaysIcon, ShoppingBagIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props

    return (
        <div className='flex justify-between items-center w-80 h-20 px-5 mb-4 border border-black border-opacity-70 rounded-lg shadow-lg'>
            <div>
                <span className='flex items-center'>
                    <CalendarDaysIcon className='size-4 text-black mr-3' />
                    <p className='font-light'>3.17.25</p>
                </span>
                <span className='flex items-center'>
                    <ShoppingBagIcon className='size-4 text-black mr-3' />
                    <p className='font-light'>{totalProducts}  articles</p>
                </span>
            </div>
            <div className='flex items-center gap-2'>
                <p className='font-medium text-2xl'>${totalPrice}</p>
                <ChevronRightIcon className='size-5 text-black'/>
            </div>
        </div>
    )
}

export default OrdersCard