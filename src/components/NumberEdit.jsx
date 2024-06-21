import { useCart } from '../hooks/useCart'

export default function NumberEdit ({ min = 0, item, decrement, increment }) {
  const { editMount } = useCart()

  return (
    <div className='mount-cel'>
      <button onClick={() => decrement()}>-</button>
      <input type="text" inputMode="numeric"
        value={item.amount ?? 0}
        onChange={(e) => { editMount(item.id, Number.parseInt(e.target.value)) }}
        onFocus={(e) => e.target.select()}
        step="1" min={min} max={1000} pattern="/\d+$/g"
      />
      <button onClick={() => increment()}>+</button>
    </div>
  )
}
