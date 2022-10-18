import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component, { AvatarProps } from '~/Avatar'
import 'tailwindcss/tailwind.css'

export default {
  component: Component,
} as ComponentMeta<typeof Component>

const defaultProps: AvatarProps = {
  variant: 'Circle',
}

const CustomProps: AvatarProps = {
  src: 'https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  variant: 'Circle',
  styles: {
    root: { backgroundColor: 'red' },
    image: { width: '50%', height: '50%' },
    alt: { backgroundColor: 'blue' },
  },
  classNames: {
    root: 'm-20',
    image: 'border-2',
    alt: 'rounded-full',
  },
}
export const Default: ComponentStory<typeof Component> = (props) => {
  return <Component {...defaultProps} {...props} />
}

export const Custom: ComponentStory<typeof Component> = (props) => {
  return <Component {...CustomProps} {...props} />
}

Default.args = {}
