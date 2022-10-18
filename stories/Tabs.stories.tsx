import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component, { TabsProps } from '~/Tabs'
import { faker } from '@faker-js/faker'
import { Tabs } from '@radix-ui/react-tabs'

export default {
  component: Component,
} as ComponentMeta<typeof Component>

const defaultProps: TabsProps = {
  items: [...Array(3)].map(() => ({
    title: faker.commerce.productName(),
    content: faker.commerce.productDescription(),
    value: faker.datatype.uuid(),
  })),
}
const CustomProps: TabsProps = {
  items: [...Array(3)].map(() => ({
    title: faker.commerce.productName(),
    content: faker.commerce.productDescription(),
    value: faker.datatype.uuid(),
  })),
  styles: {
    root: { color: 'white' },
    list: { backgroundColor: 'blue' },
    content: { color: 'red' },
  },
  classNames: {
    root: 'p-16',
    list: 'text-2xl',
    content: 'text-2xl',
  },
}

export const Default: ComponentStory<typeof Component> = (props) => {
  return <Component {...defaultProps} {...props} />
}
export const Custom: ComponentStory<typeof Component> = (props) => {
  return <Component {...CustomProps} {...props} />
}
