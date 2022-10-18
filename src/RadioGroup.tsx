import { FC, ReactNode, CSSProperties } from 'react'
import * as RadixRadioGroup from '@radix-ui/react-radio-group'
import 'twin.macro'
import Label from './Label'

export type RadioItem = {
  id: string
  label?: string
  value: string
}
type Styles = {
  root: CSSProperties
  item: CSSProperties
  selected: CSSProperties
}
type ClassNames = {
  root: string
  item: string
  selected: string
}

export type RadioGroupProps = {
  items: RadioItem[]
  defaultValue?: string
  classNames?: ClassNames
  styles?: Styles
}

export const RadioGroup: FC<RadioGroupProps> = ({ items = [], defaultValue, classNames, styles }) => {
  return (
    <RadixRadioGroup.Root
      defaultValue={defaultValue}
      tw="flex flex-col gap-2"
      className={classNames?.root}
      style={styles?.root}
    >
      {items.map((item) => (
        <div tw="flex items-center gap-2" key={item.id}>
          <RadixRadioGroup.Item
            value={item.value}
            tw="w-6 h-6 bg-white rounded-full"
            id={item.id}
            className={classNames?.item}
            style={styles?.item}
          >
            <RadixRadioGroup.Indicator
              tw="after:bg-black after:content[''] after:w-3 after:h-3 relative after:block after:rounded-full flex items-center justify-center"
              className={classNames?.selected}
              style={styles?.selected}
            />
          </RadixRadioGroup.Item>
          <Label htmlFor={item.id}>{item.label}</Label>
        </div>
      ))}
    </RadixRadioGroup.Root>
  )
}

export default RadioGroup
