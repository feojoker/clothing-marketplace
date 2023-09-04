import { Outlet, Link } from "react-router-dom"
import { ReactComponent as Logo } from 'assets/crown.svg'
import './navigation.styles.scss'
import { signOutUser } from "utils/firebase/firebase.utils"
import CartIcon from "components/cart-icon/cart-icon.component"
import CartDropdown from "components/cart-dropdown/cart-dropdown.component"
import { useAppSelector } from "store/hooks"
import { selectCurrentUser } from "store/user/user.selector"

const Navigation = () => {
  const userData = useAppSelector(selectCurrentUser)

  const signOutHandler = async () => {
    await signOutUser();
  }

  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-link">
          <Logo className="logo-link__image" />
        </Link>
        <div className="nav-links">
          <Link to="/shop" className="nav-links__link">Shop</Link>
          {userData
            ? (
              <span className="nav-links__link" onClick={signOutHandler}>
                Sign Out
              </span>
            )
            : (
              <Link to="/auth" className="nav-links__link">
                Sign In
              </Link>
            )}
          <CartIcon />
        </div>
        <CartDropdown />
      </div>
      <Outlet />
    </>
  )
}

export default Navigation