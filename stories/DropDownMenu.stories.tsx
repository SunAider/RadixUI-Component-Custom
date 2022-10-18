import { faker } from '@faker-js/faker'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component, { DropDownMenuProps } from '~/DropdownMenu'

export default {
  component: Component,
} as ComponentMeta<typeof Component>

const defaultProps: DropDownMenuProps = {
  title: ['a', 'b', 'c'],
}
const CustomProps: DropDownMenuProps = {
  title: ['a', 'b', 'c'],
  styles: {
    content: { backgroundColor: 'red' },
    item: { color: 'white' },
  },
  classNames: {
    content: 'w-32',
    item: 'text-6xl',
  },
}

export const Default: ComponentStory<typeof Component> = ({ ...props }) => {
  return <Component {...defaultProps} {...props} />
}
export const Custom: ComponentStory<typeof Component> = ({ ...props }) => {
  return <Component {...CustomProps} {...props} />
}
