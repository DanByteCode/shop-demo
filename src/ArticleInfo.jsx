import { useParams } from 'react-router-dom'
import { useCart } from './hooks/useCart'
import ReturnButton from './components/ReturnButton'
import useArticles from './hooks/articles'
import { motion } from 'framer-motion'
import { useState } from 'react'
import ModalImage from './components/ModalImage'
import AddEdit from './components/AddEdit'

export default function ArticleInfo () {
  const [selected, setSelected] = useState(false)
  const { id } = useParams()
  const article = useArticles(`/${id}`)
  const { cartList, findItem } = useCart()
  const product = findItem(id) ?? article

  return (
    <div className="item-page">
      <div className='control-cart'><ReturnButton /></div>
      {product?.id && <motion.article
      initial={{ translateY: -10, opacity: 0.5 }}
      transition={{ type: 'spring', damping: 18 }}
      animate={{ translateY: 0, opacity: 1 }}>
        <div>
          <h2>{product.title}</h2>
          <span>Price: {product.price} $</span>
          <p>{product.description}</p>
          <span>In cart: {cartList?.find(i => i.id === product.id)?.amount ?? 0}</span>
          <AddEdit product={product}/>
        </div>
        <motion.img layoutId={product.id} src={product.image} width="400" onClick={() => setSelected(true)}/>
      </motion.article>}
      <ModalImage product={product} selected={selected} setSelected={setSelected}/>
    </div >
  )
}
