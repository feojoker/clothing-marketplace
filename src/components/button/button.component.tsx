import './button.styles.scss'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  buttonType?: "google" | "inverted",
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean,

}

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
}


const Button = ({ children, buttonType, ...otherProps }: Props) => {
  return (
    <button
      className={`btn-container ${buttonType ? BUTTON_TYPE_CLASSES[buttonType] : ''}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button