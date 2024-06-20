import { useLocation, Link } from 'react-router-dom'
import SVG from 'react-inlinesvg'
import back from '../assets/back.svg'
export default function ReturnButton () {
  const status = useLocation()
  const direction = status.state?.path?.pathname ?? '/'
  return <Link className='return-btn' to={direction}><SVG src={back}/> Return</Link>
}
