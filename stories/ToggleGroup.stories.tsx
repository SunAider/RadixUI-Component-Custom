import { faker } from '@faker-js/faker'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component, { ToggleGroupProps } from '~/ToggleGroup'

export default {
  component: Component,
} as ComponentMeta<typeof Component>

const items = [...Array(3)].map(() => ({}))

export const Default: ComponentStory<typeof Component> = ({ ...props }) => {
  return <Component {...props} />
}
export const Custom: ComponentStory<typeof Component> = ({ ...props }) => {
  return <Component {...props} />
}

Default.args = {
  type: 'single',
  items: [...Array(3)].map(() => ({
    content: faker.commerce.productName(),
    value: faker.commerce.price(),
  })),
}

Custom.args = {
  type: 'single',
  items: [...Array(3)].map(() => ({
    content: faker.commerce.productName(),
    value: faker.commerce.price(),
  })),
  styles: {
    root: { backgroundColor: 'red' },
    item: { backgroundColor: 'blue' },
  },
  classNames: {
    root: 'h-16',
    item: 'border-2',
  },
}
