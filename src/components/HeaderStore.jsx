import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import shopIcon from '../assets/shopping_bag.svg'
import cartIcon from '../assets/shopping_cart.svg'
import SVG from 'react-inlinesvg'
import { motion } from 'framer-motion'
export default function HeaderStore () {
  const { cartList } = useCart()
  const path = useLocation()
  return (
    <>
      <header>
        <h1><Link>DanByteShop</Link></h1>
        <nav>
          <ul className="navigator">
            <motion.li whileHover="hover" transition={{ duration: 0.2 }}>
              <NavLink to="/" state={{ path }}>
                <motion.div variants={animation} transition={{ type: 'spring', stiffness: 300, damping: 12 }}>
                <SVG src={shopIcon}/>
                </motion.div> STORE</NavLink>
            </motion.li >
            <motion.li whileHover="hover" >
              <NavLink to="/cart" state={{ path }}>
                <motion.div variants={animation} transition={{ type: 'spring', stiffness: 300, damping: 12 }}>
                  <SVG src={cartIcon} />
                </motion.div> CART ({cartList.length})</NavLink>
            </motion.li>
           </ul>
        </nav>
      </header>
    </>
  )
}

const animation = {
  hover: {
    scale: 1.2,
    rotate: '-10deg'
  }
}
