import { faker } from '@faker-js/faker'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component, { ScrollAreaProps } from '~/ScrollArea'
import 'twin.macro'

export default {
  component: Component,
} as ComponentMeta<typeof Component>

const mainContentItems = [...Array(200)].map(() => faker.commerce.productName())

const defaultProps: ScrollAreaProps = {
  title: faker.lorem.words(3),
}
const CustomProps: ScrollAreaProps = {
  title: faker.lorem.words(3),
  styles: {
    root: { backgroundColor: 'red' },
    viewport: { backgroundColor: 'blue' },
    scrollbar: { padding: '16px' },
  },
  classNames: {
    root: 'border-2',
    viewport: 'border-2',
    scrollbar: 'border-2',
  },
}
export const Default: ComponentStory<typeof Component> = (props) => {
  return (
    <Component {...defaultProps} {...props}>
      {mainContentItems.map((item) => (
        <div tw="border-b border-gray-main py-2 text-gray-main">{item}</div>
      ))}
    </Component>
  )
}
export const Custom: ComponentStory<typeof Component> = (props) => {
  return (
    <Component {...CustomProps} {...props}>
      {mainContentItems.map((item) => (
        <div tw="border-b border-gray-main py-2 text-gray-main">{item}</div>
      ))}
    </Component>
  )
}
