import { useLocation } from 'react-router-dom'
import { useCart } from './hooks/useCart'
import { useMemo, useState } from 'react'
import ReturnButton from './components/ReturnButton'
import CartItem from './components/CartItem'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'

export default function Cart () {
  const [cheked, setCheked] = useState([])
  const { cartList, clearAll, clearSelected } = useCart()
  const path = useLocation()
  const total = useMemo(() => {
    return cartList.reduce((a, b) => {
      return (a += b.amount * b.price)
    }, 0)
  }, [cartList])
  function handleCheck (e, id) {
    const newCheck = [...cheked]
    if (e.target.checked) {
      newCheck.push(id)
    } else {
      newCheck.splice(newCheck.findIndex(i => i.id === id), 1)
    }
    setCheked(newCheck)
  }
  return (
    <>
      <div className='control-cart'>
        <ReturnButton />
        <div>
          <button onClick={() => {
            clearSelected(cheked)
            setCheked([])
          }} disabled={cheked.length === 0}>Clear Selected</button>
          <button onClick={clearAll}>Clear All</button>
        </div>
      </div>
      {cartList.length > 0
        ? <main className='cart'>
          <table>
        <thead>
          <tr>
            <th>Item</th>
            <th className='col-title'>Quantity</th>
            <th className='col-title'>Unit Price</th>
            <th className='col-title'>Total</th>
          </tr>
        </thead>
        <LayoutGroup>
          <motion.tbody>
            <AnimatePresence mode='sync' >
              {cartList.map((item, index) => {
                return <CartItem key={item.id}
                  item={item}
                  handleCheck={handleCheck}
                  path={path}
                  index={index}
                />
              })}
            </AnimatePresence>
          </motion.tbody>
          <motion.tfoot layout layoutId='1'>
            <tr>
              <td colSpan="3">TOTAL</td>
              <td>{total.toFixed(2)}</td>
            <td/>
                </tr>
          </motion.tfoot>
        </LayoutGroup>
          </table>
          <button className='order-btn'>MAKE ORDER</button>
        </main>
        : <h3>There are no items in the cart...</h3>}
    </>
  )
}
