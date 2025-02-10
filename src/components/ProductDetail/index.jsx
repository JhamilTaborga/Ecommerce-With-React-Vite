import './styles.css'

const ProductDetail = () => {
    return (
        <aside className='product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white'>
            <div className='flex justify-between itmes-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <svg 
                        className="size-6"
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M6 18 18 6M6 6l12 12" 
                        />
                    </svg>
                </div>


            </div>
        </aside>
    )
}

export default ProductDetail