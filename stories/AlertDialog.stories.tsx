import { faker } from '@faker-js/faker'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component, { AlertDialogProps } from '~/AlertDialog'
import Button from '~/Button'

export default {
  component: Component,
} as ComponentMeta<typeof Component>

const defaultProps: AlertDialogProps = {
  trigger: <Button>Open Dialog</Button>,
  title: faker.commerce.product(),
  children: faker.lorem.words(10),
  actionText: 'Yes',
  cancelText: 'Cancel',
}
const CustomProps: AlertDialogProps = {
  trigger: <Button>Open Dialog</Button>,
  title: faker.commerce.product(),
  children: faker.lorem.words(10),
  actionText: 'Yes',
  cancelText: 'Cancel',
  styles: {
    content: { backgroundColor: 'red' },
    title: { color: 'white' },
    description: { fontSize: '48px' },
    cancel: { width: '200px' },
    action: { width: '200px' },
  },
  classNames: {
    content: 'mt-20',
    title: 'text-7xl',
    description: 'font-bold',
    cancel: 'h-12',
    action: 'h-12',
  },
}

export const Default: ComponentStory<typeof Component> = ({ ...props }) => {
  return <Component {...defaultProps} {...props} />
}

export const Custom: ComponentStory<typeof Component> = ({ ...props }) => {
  return <Component {...CustomProps} {...props} />
}
