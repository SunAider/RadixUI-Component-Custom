import { faker } from '@faker-js/faker'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component, { PopoverProps } from '~/Popover'

export default {
  component: Component,
} as ComponentMeta<typeof Component>

const defaultProps: PopoverProps = {
  children: faker.lorem.words(5),
}
const CustomProps: PopoverProps = {
  children: faker.lorem.words(5),
  styles: {
    content: { backgroundColor: 'red' },
    arrow: { backgroundColor: 'red' },
    close: { color: 'white' },
  },
  classNames: {
    content: 'text-3xl',
    arrow: 'h-4',
    close: 'mt-4',
  },
}
export const Default: ComponentStory<typeof Component> = (props) => {
  return <Component {...defaultProps} {...props} />
}
export const Custom: ComponentStory<typeof Component> = (props) => {
  return <Component {...CustomProps} {...props} />
}
