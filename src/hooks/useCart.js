import { useContext } from 'react'
import { cartContext } from '../CartListCont'

export function useCart () {
  const context = useContext(cartContext)
  return context
}
