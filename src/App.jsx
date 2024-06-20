import { useContext } from 'react'
import { cartContext } from './CartListCont'
import FilterBar from './components/FilterBar'
import ArticleCard from './components/ArticleCard'
export default function App () {
  const { cartList, articles, filter } = useContext(cartContext)

  function isValid (product) {
    return product.price <= filter.maxPrice &&
      product.title.toLowerCase().includes(filter.search.toLowerCase()) &&
      (filter.category === '' || product.category === filter.category)
  }

  return (
    <>
      <FilterBar />
      <main className='store'>
        {articles.length > 0
          ? articles.map((product) => {
            return isValid(product)
              ? <ArticleCard key={product.id} product={product}
                quantity={cartList?.find(i => i.id === product.id)?.amount ?? 0} />
              : null
          })
          : <h3 className='loading'>Loading...</h3>}
      </main>
    </>
  )
}
