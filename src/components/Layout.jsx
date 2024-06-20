import { Outlet } from 'react-router-dom'
import HeaderStore from './HeaderStore'

export default function Layout () {
  return (
    <>
      <HeaderStore />
      <Outlet />
      <footer className="credits">@DanByteCode</footer>
    </>
  )
}
