import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component from '~/Select'

export default {
  component: Component,
} as ComponentMeta<typeof Component>

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]
export const Default: ComponentStory<typeof Component> = ({ ...props }) => {
  return <Component {...props} options={options} />
}
