import { FC, ReactNode, CSSProperties } from 'react'
import * as RadixToggleGroup from '@radix-ui/react-toggle-group'
import 'twin.macro'

type Styles = {
  root?: CSSProperties
  item?: CSSProperties
}
type ClassNames = {
  root?: string
  item?: string
}
export type ToggleItemType = {
  content?: ReactNode
  value: string
  ariaLabel?: string
}

export type SingleProps = {
  type: 'single'
  defaultValue?: string
}
export type MultipleProps = {
  type: 'multiple'
  defaultValue?: string[]
}

export type ToggleGroupProps = (SingleProps | MultipleProps) & {
  items?: ToggleItemType[]
  onClickItem?: (item: string, index: number) => void
  styles?: Styles
  classNames?: ClassNames
}
export const ToggleGroup: FC<ToggleGroupProps> = ({ items = [], onClickItem, styles, classNames, ...props }) => {
  const onClickItemHandler = (item: ToggleItemType, index: number) => {
    onClickItem?.(item.value, index)
  }

  return (
    <RadixToggleGroup.Root
      {...props}
      tw="bg-gray-main rounded inline-flex border-gray-main gap-[1px]"
      className={classNames?.root}
      style={styles?.root}
    >
      {items.map((item, index) => (
        <RadixToggleGroup.Item
          value={item.value}
          aria-label={item.ariaLabel}
          key={item.value}
          onClick={() => onClickItemHandler(item, index)}
          tw="bg-white p-2 first:rounded-l last:rounded-r radix-state-on:bg-gray-main"
          className={classNames?.item}
          style={styles?.item}
        >
          {item.content}
        </RadixToggleGroup.Item>
      ))}
    </RadixToggleGroup.Root>
  )
}

export default ToggleGroup
