import { useState } from 'react'
import SVG from 'react-inlinesvg'
import { useCart } from '../hooks/useCart'
import addCart from '../assets/add_shopping_cart.svg'

export default function AddEdit ({ product }) {
  const [unitsForSend, setUnits] = useState(1)
  const { addArticle } = useCart()
  function send (e, item) {
    const units = Number.parseInt(unitsForSend)
    e.preventDefault()
    addArticle(item, units)
  }
  function handleInput (e) {
    const input = Number.parseInt(e.target.value)
    if (input > 1) {
      setUnits(input)
    } else {
      setUnits(1)
    }
  }
  return (
    <div className='mount-cel'>
      <div>
        <label htmlFor={`unit-${product.id}`}>Units: </label>
        <button type='button' onClick={() => { if (unitsForSend > 1) setUnits(unitsForSend - 1) }}>-</button>
        <input id={`unit-${product.id}`} type="text" inputMode="numeric" step="1" min="1" value={unitsForSend}
          onChange={(e) => { handleInput(e) }} />
        <button type='button' onClick={() => setUnits(unitsForSend + 1)}>+</button>
      </div>
      <button className='icon-btn' onClick={(e) => { send(e, product) }} title='Add units to Cart'><SVG src={addCart} />Add</button>
    </div>
  )
}
