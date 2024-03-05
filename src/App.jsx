import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom'
import Products from './pages/Products'
import Product from './pages/Product'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
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
    <div className='overflow-x-hidden'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
