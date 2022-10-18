import { ComponentStory, ComponentMeta } from '@storybook/react'
import { faker } from '@faker-js/faker'
import Component, { HoverCardProps } from '~/HoverCard'
import Button from '~/Button'

export default {
  component: Component,
} as ComponentMeta<typeof Component>

const defaultProps: HoverCardProps = {
  trigger: <Button>Hover</Button>,
  children: faker.lorem.words(10),
}
const CustomProps: HoverCardProps = {
  trigger: <Button>Hover</Button>,
  children: faker.lorem.words(10),
  styles: {
    content: { backgroundColor: 'red' },
    arrow: { backgroundColor: 'red' },
  },
  classNames: {
    content: 'h-32',
    arrow: 'h-6',
  },
}

export const Default: ComponentStory<typeof Component> = (props) => {
  return <Component {...defaultProps} {...props} />
}
export const Custom: ComponentStory<typeof Component> = (props) => {
  return <Component {...CustomProps} {...props} />
}
