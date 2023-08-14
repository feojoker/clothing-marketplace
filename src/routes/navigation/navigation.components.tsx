import { Outlet, Link } from "react-router-dom"
import { ReactComponent as Logo } from 'assets/crown.svg'
import './navigation.styles.scss'
import { useContext } from "react"
import { UserContext } from "contexts/user.context"
import { signOutUser } from "utils/firebase/firebase.utils"

const Navigation = () => {
  const { userData } = useContext(UserContext)

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
              <span className="nav-links__link" onClick={signOutHandler}>Sign Out</span>
            )
            : (
              <Link to="/auth" className="nav-links__link">Sign In</Link>
            )}
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation