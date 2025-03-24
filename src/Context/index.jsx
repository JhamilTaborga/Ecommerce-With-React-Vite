import { createContext, useState, useEffect } from 'react'
import { apiUrl } from '../Api'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    // Shopping Cart · Increment quantity
    const [count, setCount] = useState(0)

    // Product Detail · Open/Close
    const [isProductDetailOpen, setIsproductDetailOpen] = useState(false)
    const openProductDetail = () => setIsproductDetailOpen(true)
    const closeProductDetail = () => setIsproductDetailOpen(false)

    // Checkout Side Menu · Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
    
    // Product Detail · Show product
    const [productToShow, setProductToShow] = useState({})

    // Shopping Cart · Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    // Shopping Cart · Order
    const [order, setOrder] = useState([])

    // Get items
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)
    
    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)

    useEffect( () => {
        const fetchData = async () => {
          try {
            const response = await fetch(`${apiUrl}/products`)
            const data = await response.json()
            setItems(data)
          } catch (error) {
            console.error(`Oh no, ocurrió un error: ${error}`)  
          }
        }
        fetchData()
      }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
      return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    
    useEffect( () => {
      if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }, [items, searchByTitle])
  console.log('filteredItems: ', filteredItems)

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}