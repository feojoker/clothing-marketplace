import { Outlet, Link } from "react-router-dom"
import { ReactComponent as Logo } from 'assets/crown.svg'
import { useContext } from "react"
import { UserContext } from "contexts/user.context"
import { signOutUser } from "utils/firebase/firebase.utils"
import CartIcon from "components/cart-icon/cart-icon.component"
import CartDropdown from "components/cart-dropdown/cart-dropdown.component"
import { LogoLink, NavigationContainer, NavLink, NavLinks, NavSpan } from "./navigation.styles"

const Navigation = () => {
  const { userData } = useContext(UserContext)

  const signOutHandler = async () => {
    await signOutUser();
  }

  return (
    <>
      <NavigationContainer>
        <LogoLink to="/">
          <Logo />
        </LogoLink>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {userData
            ? (
              <NavSpan onClick={signOutHandler}>
                Sign Out
              </NavSpan>
            )
            : (
              <NavLink to="/auth">
                Sign In
              </NavLink>
            )}
          <CartIcon />
        </NavLinks>
        <CartDropdown />
      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation