import { faker } from '@faker-js/faker'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component, { RadioGroupProps } from '~/RadioGroup'

export default {
  component: Component,
} as ComponentMeta<typeof Component>

const values = [...Array(4)].map(() => faker.commerce.productName())

const defaultProps: RadioGroupProps = {
  items: [...Array(4)].map((_, idx) => ({
    id: faker.datatype.uuid(),
    label: faker.lorem.words(4),
    value: values[idx],
  })),
}
const CustomProps: RadioGroupProps = {
  items: [...Array(4)].map((_, idx) => ({
    id: faker.datatype.uuid(),
    label: faker.lorem.words(4),
    value: values[idx],
  })),
  styles: {
    root: { backgroundColor: 'red' },
    item: { backgroundColor: 'blue' },
    selected: { marginTop: '20px' },
  },
  classNames: {
    root: 'h-16',
    item: 'border-2',
    selected: 'bg-white',
  },
}
export const Default: ComponentStory<typeof Component> = (props) => {
  return <Component {...defaultProps} defaultValue={values[1]} {...props} />
}
export const Custom: ComponentStory<typeof Component> = (props) => {
  return <Component {...CustomProps} defaultValue={values[1]} {...props} />
}
