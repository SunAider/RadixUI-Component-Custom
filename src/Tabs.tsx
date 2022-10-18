import { FC, ReactNode, CSSProperties } from 'react'
import * as RadixTabs from '@radix-ui/react-tabs'
import 'twin.macro'

export type TabsItem = {
  title?: string
  content?: ReactNode
  value: string
}

type Styles = {
  root?: CSSProperties
  list?: CSSProperties
  content?: CSSProperties
}
type ClassNames = {
  root?: string
  list?: string
  content?: string
}
export type TabsProps = {
  defaultValue?: string
  items?: TabsItem[]
  classNames?: ClassNames
  styles?: Styles
}

export const Tabs: FC<TabsProps> = ({ items = [], defaultValue, classNames, styles }) => {
  return (
    <RadixTabs.Root defaultValue={defaultValue} className={classNames?.root} style={styles?.root}>
      <RadixTabs.List tw="flex-1 px-3 py-2.5 w-full  bg-white " className={classNames?.list} style={styles?.list}>
        {items.map((item) => (
          <RadixTabs.Trigger key={item.value} value={item.value}>
            <span>{item.title}</span>
          </RadixTabs.Trigger>
        ))}
      </RadixTabs.List>
      {items.map((item) => (
        <RadixTabs.Content
          key={item.value}
          value={item.value}
          tw="bg-white px-6 py-4"
          className={classNames?.content}
          style={styles?.content}
        >
          {item.content}
        </RadixTabs.Content>
      ))}
    </RadixTabs.Root>
  )
}

export default Tabs
