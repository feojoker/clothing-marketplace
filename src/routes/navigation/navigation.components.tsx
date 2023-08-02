import { Outlet, Link } from "react-router-dom"
import { ReactComponent as Logo } from 'assets/crown.svg'
import './navigation.styles.scss'

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-link">
          <Logo className="logo-link__image" />
        </Link>
        <div className="nav-links">
          <Link to="/shop" className="nav-links__link">Shop</Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation