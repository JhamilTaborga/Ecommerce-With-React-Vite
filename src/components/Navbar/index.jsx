import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import ShoppingCart from '../../components/ShoppingCart'

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'

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
                    <li className='text-black/60'>
                        jhamil@dev.com
                    </li>
                    <li>
                        <NavLink 
                            to='/my-orders'
                            className={({ isActive }) => 
                                isActive ? activeStyle : undefined
                            }
                        >
                            My Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/my-account'
                            className={({ isActive }) => 
                                isActive ? activeStyle : undefined
                            }
                        >
                            My Account
                        </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to='/sign-in'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        } 
                        onClick={() => handleSignOut()}>
                        Sign out
                    </NavLink>
                </li>
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
        <nav className='w-full flex justify-between items-center fixed z-10 top-0 py-5 px-8 text-base font-light '>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-xl'>
                    <NavLink to={`${isUserSignOut ? 'sign-in' : '/'}`} 
                    onClick={() => context.setSearchByCategory()}>
                        Shopi
                    </NavLink>
                </li>
                <li>
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
                <li>
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
                <li>
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
                <li>
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
                <li>
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
                <li>
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