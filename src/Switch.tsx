import { FC, ReactNode, CSSProperties } from 'react'
import * as RadixSwitch from '@radix-ui/react-switch'
import 'twin.macro'

type Styles = {
  root?: CSSProperties
  thumb?: CSSProperties
}
type ClassNames = {
  root: string
  thumb: string
}
export type SwitchProps = {
  children?: ReactNode
  id?: string
  styles?: Styles
  classNames?: ClassNames
}
export const Switch: FC<SwitchProps> = ({ id, styles, classNames }) => {
  return (
    <RadixSwitch.Root
      id={id}
      tw=" radix-state-checked:bg-black radix-state-unchecked:bg-gray-main relative inline-flex h-[24px] w-[44px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200
    "
      className={classNames?.root}
      style={styles?.root}
    >
      <RadixSwitch.Thumb
        tw="radix-state-checked:translate-x-5  radix-state-unchecked:translate-x-0 pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white transition duration-200"
        className={classNames?.thumb}
        style={styles?.thumb}
      />
    </RadixSwitch.Root>
  )
}
export default Switch
