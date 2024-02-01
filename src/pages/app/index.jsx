import { useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from '../Home'
import MyAccount from '../myAccount'
import MyOrder from '../myOrder'
import MyOrders from '../myOrders'
import NotFound from '../notFound'
import SignIn from '../signIn'
import NavBar from '../../components/NavBar'
import CheckOutSideMenu from '../../components/CheckOutSideMenu'
import {ShopCartProvider} from '../../Context/index'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/',  element: <Home /> },
    { path: '/clothes',  element: <Home /> },
    { path: '/electronics',  element: <Home /> },
    { path: '/furnitures',  element: <Home /> },
    { path: '/toys',  element: <Home /> },
    { path: '/others',  element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])
  return routes
}

const App = () => {
  return (
    <ShopCartProvider>
    <BrowserRouter>
      <AppRoutes />
      <NavBar />
      <CheckOutSideMenu />
    </BrowserRouter>
   </ShopCartProvider>
  )
}

export default App
