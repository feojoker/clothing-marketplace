import { ReactNode } from 'react'
import { BaseButton, GoogleSignInButton, InvertedButton } from './button.styles';

type Props = {
  children: ReactNode
  buttonType?: "base" | "google" | "inverted",
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean,

}

const getButton = (buttonType: "base" | "google" | "inverted") => {
  switch (buttonType) {
    case 'google':
      return GoogleSignInButton

    case 'inverted':
      return InvertedButton

    default:
      return BaseButton
  }
}


const Button = ({ children, buttonType = 'base', ...otherProps }: Props) => {

  const CustomButton = getButton(buttonType)
  return (
    <CustomButton {...otherProps}>
      {children}
    </CustomButton>
  )
}

export default Button