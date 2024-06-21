import { Form } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { motion } from 'framer-motion'

export default function FilterBar () {
  const { filter, setFilter, categories } = useCart()
  return (
    <div className="filter-bar">
      <Form>
        <label>
          Search:
          <input type="search"
            value={filter.search}
            onChange={(e) => setFilter({ ...filter, search: e.target.value })}
          />
        </label>
      </Form>
      <label>
        Max Price:
        <input type="range"
          value={filter.maxPrice}
          min="0" max="1000" step="10"
          onChange={(e) => setFilter({ ...filter, maxPrice: e.target.value })} />
       <span className='price'> {filter.maxPrice} $</span>
      </label>
      <label>
        Category:
        <motion.select className='category-selector' transition={{ type: 'spring' }}
          value={filter.category} onInput={(e) => setFilter({ ...filter, category: e.target.value })}>
          <motion.option value={''}>All</motion.option>
          {categories.map((category) => {
            return <motion.option key={category} value={category}>{category}</motion.option>
          })}
        </motion.select>
      </label>
    </div>
  )
}
