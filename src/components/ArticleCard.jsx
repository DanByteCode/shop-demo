import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import ModalImage from './ModalImage'
import { useState } from 'react'
import AddEdit from './AddEdit'

export default function ArticleCard ({ product, quantity }) {
  const path = useLocation()
  const [selected, setSelected] = useState(false)

  return (<>
    <motion.article layout
      id={product.id}
      initial={{ translateX: -10, opacity: 0 }}
      transition={{ duration: 0.2, type: 'tween' }}
      animate={{ translateX: 0, opacity: 1 }}>
      <motion.img layoutId={product.id} src={product.image} alt={product.title ?? 'item'} onClick={() => setSelected(true)}/>
      <footer>
        <Link to={`/item/${product.id}`} title={product.title} state={{ path }}>
          {product.title}
        </Link>
        <span>Price: {product.price} $</span>
        <span>In cart: {quantity}</span>
        <AddEdit product={product}/>
      </footer>
    </motion.article>
      <ModalImage product={product} selected={selected} setSelected={setSelected}/>
  </>)
}
