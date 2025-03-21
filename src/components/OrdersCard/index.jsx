import { XMarkIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props

    return (
        <div className='flex justify-center items-center w-60 h-24 mb-6 border border-black border-opacity-45 rounded-xl shadow-lg'>
            <p className='flex flex-col text-left justify-between'>
                <span>Date: 3.17.25</span>
                <span>Products: {totalProducts}</span>
                <span>Price: {totalPrice}</span>
            </p>
        </div>
    )
}

export default OrdersCard