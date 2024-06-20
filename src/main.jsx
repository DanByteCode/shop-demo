import './style/index.css'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { CartProvider } from './CartListCont'
import router from './router'
import HeaderStore from './components/HeaderStore'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <CartProvider>
      <RouterProvider router={router}>
        <HeaderStore />
      </RouterProvider>
    </CartProvider>
  </>
)
