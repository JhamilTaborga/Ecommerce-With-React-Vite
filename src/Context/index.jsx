import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setIsproductDetailOpen] = useState(false)
    const openProductDetail = () => setIsproductDetailOpen(true)
    const closeProductDetail = () => setIsproductDetailOpen(false)
    
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}