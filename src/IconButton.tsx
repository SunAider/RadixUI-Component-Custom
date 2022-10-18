import { ComponentProps, forwardRef, ReactNode, CSSProperties } from 'react'
import 'twin.macro'
import { ButtonBase, ButtonBaseProps } from '~/Button'

export type IconButtonProps = ButtonBaseProps & {
  icon?: ReactNode
  className?: string
  style?: CSSProperties
}
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, className, style, ...props }, ref) => {
    return (
      <ButtonBase {...props} ref={ref} tw="rounded-full p-2" className={className} style={style}>
        {icon}
      </ButtonBase>
    )
  },
)
IconButton.displayName = 'IconButton'

export default IconButton
