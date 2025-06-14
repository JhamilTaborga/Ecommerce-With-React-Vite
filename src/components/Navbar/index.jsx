import { useContext, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { UserIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import ShoppingCart from '../../components/ShoppingCart'

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'

    // NavBar Account
    const [isNavOpen, setIsNavOpen] = useState(false)
    const popupRef = useRef(null)

    const toggleOpen = () => setIsNavOpen(!isNavOpen)
    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setIsNavOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
    }, [])

    // Sign Out
    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    const isUserSignOut = context.signOut || parsedSignOut

    // Account
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)
    // Has an Account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
    
    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true)
        localStorage.setItem('sign-out', stringifiedSignOut)
        context.setSignOut(true)
    }

    const renderView = () => {
        if (hasUserAnAccount && !isUserSignOut) {
            return  (
                <>
                    <li 
                    className='flex hover:cursor-pointer active:scale-110 duration-100'
                    onClick={toggleOpen}>
                        <ChevronDownIcon className='size-4 text-black'/>
                        <UserIcon className='size-6 text-black'/>
                    </li>
                    <li className='hidden md:block text-black/60'>
                        {parsedAccount?.email}
                    </li>

                    <div ref={popupRef} className={`fixed top-14 ${isNavOpen ? 'flex' : 'hidden'} flex-col  items-center min-w-28  bg-slate-50 right-10 md:right-36 min-h-24 rounded-lg justify-evenly border border-black`}>
                        <li className='text-center hover:scale-90'>
                            <NavLink 
                                to='/my-orders'
                                className={({ isActive }) => 
                                    isActive ? activeStyle : undefined
                                }
                            >
                                My Orders
                            </NavLink>
                        </li>
                        <li className='text-center hover:scale-90'>
                            <NavLink 
                                to='/my-account'
                                className={({ isActive }) => 
                                    isActive ? activeStyle : undefined
                                }
                            >
                                My Account
                            </NavLink>
                        </li>
                        <li className='text-center hover:scale-90'>
                            <NavLink
                                to='/sign-in'
                                className={({ isActive }) => 
                                    isActive ? activeStyle : undefined
                                } 
                                onClick={() => handleSignOut()}
                            >
                                Sign out
                            </NavLink>
                        </li>
                    </div>
                </>
            )
        } else {
            return (
                <li>
                    <NavLink
                        to={'/sign-in'}
                        className={({ isActive }) => isActive ? activeStyle : undefined }
                        onClick={() => handleSignOut()}>
                        Sign In
                    </NavLink>
                </li>
            )
        }
    }
    return (
        <nav className='w-full bg-slate-50 flex justify-between items-center fixed z-10 top-0 py-5 px-8 text-base font-light '>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-xl'>
                    <NavLink to={`${isUserSignOut ? 'sign-in' : '/'}`} 
                    onClick={() => context.setSearchByCategory()}>
                        Shopi
                    </NavLink>
                </li>
                <li className='hidden lg:block'>
                    <NavLink 
                        to='/'
                        onClick={() => context.setSearchByCategory()}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        All
                    </NavLink>
                </li>
                <li className='hidden lg:block'>
                    <NavLink 
                        to='/clothes'
                        onClick={() => context.setSearchByCategory('clothes')}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Clothes
                    </NavLink>
                </li>
                <li className='hidden lg:block'>
                    <NavLink 
                        to='/electronics'
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Electronics
                    </NavLink>
                </li>
                <li className='hidden lg:block'>
                    <NavLink 
                        to='/furnitures'
                        onClick={() => context.setSearchByCategory('furniture')}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li className='hidden lg:block'>
                    <NavLink 
                        to='/shoes'
                        onClick={() => context.setSearchByCategory('shoes')}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }    
                    >
                        Shoes
                    </NavLink>
                </li>
                <li className='hidden lg:block'>
                    <NavLink 
                        to='/others'
                        onClick={() => context.setSearchByCategory('miscellaneous')}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                
                {/* <li>
                    <NavLink 
                        to='/sign-in'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Sign In
                    </NavLink>
                </li> */}
                {renderView()}
                <ShoppingCart />
            </ul>
        </nav>
    )
}

export default Navbar