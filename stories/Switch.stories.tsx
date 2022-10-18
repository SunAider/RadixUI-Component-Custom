import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component, { SwitchProps } from '~/Switch'

export default {
  component: Component,
} as ComponentMeta<typeof Component>

const CustomProps: SwitchProps = {
  styles: {
    root: { backgroundColor: 'red' },
    thumb: { backgroundColor: 'blue' },
  },
  classNames: {
    root: 'mt-8',
    thumb: 'border-2',
  },
}

export const Default: ComponentStory<typeof Component> = (props) => {
  return <Component {...props} />
}
export const Custom: ComponentStory<typeof Component> = (props) => {
  return <Component {...CustomProps} {...props} />
}
