import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { NavLink } from "react-router-dom"
import { useContext } from 'react'
import { ShopCartContext } from '../../Context'

const NavBar = () => {

    let activeStyle = 'underline underline-offset-4'
    const context = useContext(ShopCartContext)

    return(
        <nav className=" flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-md font-light bg-white rounded-b-lg">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink  to= '/'
                    onClick={() => context.setSearchItemsByCategory()} >
                        StellarCartel
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to= '/' 
                    onClick={() => context.setSearchItemsByCategory()}
                    className={( {isActive }) =>
                    isActive ? activeStyle: undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to= '/clothes' 
                    onClick={() => context.setSearchItemsByCategory('clothes')}
                    className={( {isActive }) =>
                    isActive ? activeStyle: undefined
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to= '/electronics'
                    onClick={() => context.setSearchItemsByCategory('electronics')}
                    className={( {isActive }) =>
                    isActive ? activeStyle: undefined
                    }>
                        ELectronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to= '/furnitures'
                    onClick={() => context.setSearchItemsByCategory('furnitures')}
                    className={( {isActive }) =>
                    isActive ? activeStyle: undefined
                    }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to= '/toys'
                    onClick={() => context.setSearchItemsByCategory('toys')}
                    className={( {isActive }) =>
                    isActive ? activeStyle: undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/others'
                    onClick={() => context.setSearchItemsByCategory('others')}
                    className={( {isActive }) =>
                    isActive ? activeStyle: undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li>
                    example@stellarcartel.com
                </li>
                <li>
                    <NavLink 
                    to= '/my-orders'
                    className={( {isActive }) =>
                    isActive ? activeStyle: undefined
                    }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to= '/my-account'
                    className={( {isActive }) =>
                    isActive ? activeStyle: undefined
                    }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to= '/sign-in'
                    className={( {isActive }) =>
                    isActive ? activeStyle: undefined
                    }>
                        Sign in
                    </NavLink>
                </li>
                <li className='flex items-center '>
                    <ShoppingCartIcon className='h-6 w-6 text-black f mr-1'></ShoppingCartIcon>
                    <div>{context.cartProducts.length}</div>
                </li>
            </ul>
        </nav>
    )
}


export default NavBar