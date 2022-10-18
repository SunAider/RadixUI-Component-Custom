import { ComponentProps, forwardRef, ReactNode, CSSProperties } from 'react'
import 'twin.macro'

export type ButtonBaseProps = ComponentProps<'button'> & {
  className?: string
  style?: CSSProperties
}
export const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  ({ className, style, children, ...props }, ref) => {
    return (
      <button {...props} ref={ref} tw="bg-white rounded py-1 px-2 shadow" className={className} style={style}>
        {children}
      </button>
    )
  },
)
ButtonBase.displayName = 'ButtonBase'

type ButtonProps = ButtonBaseProps & {
  variant?: 'text' | 'filled' | 'outlined'
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
  return (
    <ButtonBase {...props} ref={ref}>
      {children}
    </ButtonBase>
  )
})
Button.displayName = 'Button'

export default Button
