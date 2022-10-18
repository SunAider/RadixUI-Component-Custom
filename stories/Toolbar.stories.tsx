import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component from '~/Toolbar'

export default {
  component: Component,
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = (props) => {
  return <Component {...props}>toolbar</Component>
}
