import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    // Shopping Cart · Increment quantity
    const [count, setCount] = useState(0)

    // Product Detail · Open/Close
    const [isProductDetailOpen, setIsproductDetailOpen] = useState(false)
    const openProductDetail = () => setIsproductDetailOpen(true)
    const closeProductDetail = () => setIsproductDetailOpen(false)
    
    // Product Detail · Show product
    const [productToShow, setProductToShow] = useState({})

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}