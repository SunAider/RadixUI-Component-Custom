import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component from '~/Button'

export default {
  component: Component,
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = (props) => {
  return <Component {...props}>ボタン</Component>
}
export const Custom: ComponentStory<typeof Component> = (props) => {
  return (
    <Component {...props} style={{ backgroundColor: 'red' }} className="text-2xl">
      ボタン
    </Component>
  )
}
