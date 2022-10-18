import { forwardRef, ComponentProps, CSSProperties, ReactNode, ChangeEventHandler } from 'react'
import 'twin.macro'

export type TextFieldProps = ComponentProps<'input'> & {
  classNames?: string
  style?: CSSProperties
  value: ReactNode
  type: string
  placeHolder?: string
  onChange?: () => void
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, style, value, placeHolder, type, onChange, ...props }, ref) => {
    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = () => {
      onChange?.()
    }
    return (
      <input
        {...props}
        ref={ref}
        tw="bg-white rounded py-1 px-2 shadow"
        className={className}
        style={style}
        type={type}
        value={value}
        placeholder={placeHolder}
        onChange={onChangeHandler}
      />
    )
  },
)
TextField.displayName = 'TextField'

export default TextField
