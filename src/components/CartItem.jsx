import { Link } from 'react-router-dom'
import NumberEdit from './NumberEdit'
import { motion } from 'framer-motion'
import { useCart } from '../hooks/useCart'

export default function CartItem ({ item, handleCheck, path, index }) {
  const { editMount } = useCart()
  return (
    <motion.tr
      className={item.amount > 0 ? 'count' : 'no-count'}
      layout
      initial={{ translateY: -10, opacity: 0 }}
      transition={{ type: 'tween', delay: index * 0.04 }}
      animate={{ translateY: 0, opacity: 1 }}
      exit={{ opacity: 0, backgroundColor: '#FF0000' }}>
      <td className='item-name'><Link to={`/item/${item.id}`} state={{ path }}>{item.title}</Link></td>
      <td>
        <NumberEdit item={item} min={0}
          decrement={() => editMount(item.id, item.amount - 1)}
          increment={() => editMount(item.id, item.amount + 1)}
        />
      </td>
      <td>{item.price.toFixed(2)}</td>
      <td>{(item.price * item.amount).toFixed(2)}</td>
      <td><input type='checkbox' onChange={(e) => handleCheck(e, item.id)} /></td>
    </motion.tr>)
}
