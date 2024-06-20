import { motion, AnimatePresence } from 'framer-motion'
import SVG from 'react-inlinesvg'
import closeBtn from '../assets/close.svg'
export default function ModalImage ({ product, selected, setSelected }) {
  return (
    <AnimatePresence >
        {selected &&
        <motion.div className='modal' open onClick={() => setSelected(false)}
          initial={{ backgroundColor: '#00000000' }}
          animate={{ backgroundColor: '#00000088', transition: { duration: 0.4 } }}
          exit={{ backgroundColor: '#00000000' }}
        >
            <motion.img src={product.image} alt="" className='modal-img' layoutId={product.id} exit={{ objectFit: 'scale-down' }}/>
          <motion.button className='close-button' title='close' exit={{ scale: 0, opacity: 0 }}><SVG src={closeBtn} /></motion.button>
          </motion.div>}
        </AnimatePresence>
  )
}
