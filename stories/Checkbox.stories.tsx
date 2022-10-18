import { faker } from '@faker-js/faker'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component, { CheckBoxProps } from '~/CheckBox'

export default {
  component: Component,
} as ComponentMeta<typeof Component>

const defaultProps: CheckBoxProps = {
  label: faker.lorem.words(4),
}
const CustomProps: CheckBoxProps = {
  label: faker.lorem.words(4),
  styles: {
    root: { backgroundColor: 'red' },
    selected: { marginTop: '50px' },
  },
}
export const Default: ComponentStory<typeof Component> = ({ ...props }) => {
  return <Component {...defaultProps} {...props} />
}
export const Custom: ComponentStory<typeof Component> = ({ ...props }) => {
  return <Component {...CustomProps} {...props} />
}
