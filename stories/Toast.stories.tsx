import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component, { ToastProps } from '~/Toast'

export default {
  component: Component,
} as ComponentMeta<typeof Component>

const defaultProps: ToastProps = {
  title: 'title',
  children: 'content',
}
const CustomProps: ToastProps = {
  title: 'title',
  children: 'content',
  styles: {
    root: { backgroundColor: 'red' },
    title: { backgroundColor: 'red' },
    description: { backgroundColor: 'red' },
  },
  classNames: {
    root: 'border-2',
    title: 'text-2xl',
    description: 'text-2xl',
  },
}
export const Default: ComponentStory<typeof Component> = ({ ...props }) => {
  return <Component {...defaultProps} {...props}></Component>
}
export const Custom: ComponentStory<typeof Component> = ({ ...props }) => {
  return <Component {...CustomProps} {...props}></Component>
}
