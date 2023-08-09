import './form-input.styles.scss'


type Props = {
  label: string,
  errorMessage?: string,
  inputOptions: {
    name: string,
    type: string,
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    onBlur: React.FocusEventHandler<HTMLInputElement>,
    required?: boolean,
    minLength?: number,
  }
}


const FormInput = ({ label, errorMessage, inputOptions }: Props) => {
  return (
    <div className="form-input-group">
      <input className="form-input-group__input" {...inputOptions} />
      {label && (
        <label
          className={`${inputOptions.value.length ? 'shrink' : ''
            } form-input-group__label`
          }>
          {label}
        </label>
      )}
      {errorMessage && (
        <span className='err'>{errorMessage}</span>
      )}
    </div>
  )
}

export default FormInput