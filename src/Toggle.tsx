import { FC, ReactNode, CSSProperties } from 'react'
import * as RadixToggle from '@radix-ui/react-toggle'
import 'twin.macro'

export type ToggleProps = {
  children?: ReactNode
  className?: string
  style?: CSSProperties
}
export const Toggle: FC<ToggleProps> = ({ children, className, style }) => {
  return (
    <RadixToggle.Root tw="bg-white rounded py-2 px-2 shadow" className={className} style={style}>
      {children}
    </RadixToggle.Root>
  )
}

export default Toggle
