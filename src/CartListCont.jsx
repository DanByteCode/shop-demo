import { useState, createContext, useEffect } from 'react'
import useArticles from './hooks/articles'
import { useParams } from 'react-router-dom'
import { cartListUtils } from './utils/cartList'

// eslint-disable-next-line react-refresh/only-export-components
export const cartContext = createContext()

export function CartProvider ({ children }) {
  const { item } = useParams()
  const articles = useArticles()
  const categories = [...new Set(articles.map(a => a.category))]
  const [cartList, setList] = useState(JSON.parse(localStorage.getItem('cart')) ?? [])
  const [filter, setFilter] = useState({ search: item ?? '', maxPrice: 1000, category: '' })
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartList))
  }, [cartList])
  function addArticle (item, amount) {
    setList(cartListUtils().addArticle(item, amount, cartList))
  }
  function editMount (itemId, value) {
    setList(cartListUtils().editMount(itemId, value, cartList))
  }
  function clearSelected (list) {
    setList(cartListUtils().clearSelected(list, cartList))
  }
  function clearAll () {
    setList([])
  }
  function findItem (item) {
    return articles.find(i => i.id === Number.parseInt(item))
  }
  return (
    <cartContext.Provider value={{
      articles,
      categories,
      cartList,
      addArticle,
      editMount,
      clearAll,
      clearSelected,
      filter,
      setFilter,
      findItem
    }}>
      {children}
    </cartContext.Provider>
  )
}
