import { faker } from '@faker-js/faker'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component, { LabelProps } from '~/Label'

export default {
  component: Component,
} as ComponentMeta<typeof Component>

const defaultProps: LabelProps = {
  children: faker.lorem.words(4),
}
const CustomProps: LabelProps = {
  children: faker.lorem.words(4),
  className: 'text-3xl',
  style: { color: 'red' },
}
export const Default: ComponentStory<typeof Component> = ({ ...props }) => {
  return <Component {...defaultProps} {...props} />
}
export const Custom: ComponentStory<typeof Component> = ({ ...props }) => {
  return <Component {...CustomProps} {...props} />
}
