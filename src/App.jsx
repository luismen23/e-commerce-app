import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom'
import Products from './pages/Products'
import Product from './pages/Product'
import Home from './pages/Home'
import Header from './components/Header'

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/product/:id',
        element: <Product />
      }
    ]
  }
])

function App () {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
