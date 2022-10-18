import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component from '~/TextField'

export default {
  component: Component,
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = (props) => {
  return <Component {...props} placeHolder={'text'} />
}
