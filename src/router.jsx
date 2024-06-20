import { createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Cart from './Cart.jsx'
import Error from './Error.jsx'
import ArticleInfo from './ArticleInfo.jsx'
import Layout from './components/Layout.jsx'

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <App />,
        errorElement: <Error />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/search',
        children: [
          {
            index: true,
            element: <App />
          },
          {
            path: ':item',
            element: <App />
          }
        ]
      },
      {
        path: '/item/:id',
        element: <ArticleInfo />
      }
    ]
  }])
export default router
