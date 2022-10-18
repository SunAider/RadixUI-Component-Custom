import { FC, ReactNode, useId, CSSProperties } from 'react'
import * as RadixCheckBox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import Label from './Label'
import 'twin.macro'

type CheckBoxStyles = {
  root?: CSSProperties
  selected?: CSSProperties
}
type CheckBoxClassNames = {
  root: string
  selected: string
}
export type CheckBoxProps = {
  children?: ReactNode
  label?: string
  icon?: ReactNode
  classNames?: CheckBoxClassNames
  styles?: CheckBoxStyles
}
export const CheckBox: FC<CheckBoxProps> = ({ label, icon, classNames, styles }) => {
  const id = useId()

  return (
    <div tw="inline-block">
      <div tw="flex gap-2 items-center cursor-pointer">
        <RadixCheckBox.Root
          tw="bg-white w-6 h-6 rounded flex items-center justify-center"
          id={id}
          className={classNames?.root}
          style={styles?.root}
        >
          <RadixCheckBox.Indicator className={classNames?.selected} style={styles?.selected}>
            {icon ?? <CheckIcon />}
          </RadixCheckBox.Indicator>
        </RadixCheckBox.Root>
        <Label htmlFor={id}>{label}</Label>
      </div>
    </div>
  )
}

export default CheckBox
