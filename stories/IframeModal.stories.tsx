import { faker } from '@faker-js/faker'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '~/Button'
import Component from '~/IframeModal'

export default {
  component: Component,
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = ({ ...props }) => {
  return <Component {...props} />
}
export const Black: ComponentStory<typeof Component> = ({ ...props }) => {
  return <Component {...props} />
}
export const White: ComponentStory<typeof Component> = ({ ...props }) => {
  return <Component {...props} />
}
export const UnOptional: ComponentStory<typeof Component> = ({ ...props }) => {
  return <Component {...props} />
}

export const CustomTrigger: ComponentStory<typeof Component> = ({ ...props }) => {
  return <Component {...props} />
}
export const LargeWidthSmallHeight: ComponentStory<typeof Component> = ({ ...props }) => {
  return <Component {...props} />
}
export const SmallWidthLargeHeight: ComponentStory<typeof Component> = ({ ...props }) => {
  return <Component {...props} />
}

Default.args = {
  title: faker.commerce.product(),
  src: 'https://darts.ne.jp/',
  variant: 'darts-amber',
  defaultOpen: true,
}
Black.args = {
  title: faker.commerce.product(),
  src: 'https://darts.ne.jp/',
  variant: 'black',
  defaultOpen: true,
}

White.args = {
  title: faker.commerce.product(),
  src: 'https://darts.ne.jp/',
  variant: 'white',
  defaultOpen: true,
}

UnOptional.args = {
  src: 'https://darts.ne.jp/',
}

CustomTrigger.args = {
  trigger: <Button style={{ backgroundColor: '#aaaaff', border: '2px solid #666' }}>Open</Button>,
  title: faker.commerce.product(),
  src: 'https://darts.ne.jp/',
}

LargeWidthSmallHeight.args = {
  title: faker.commerce.product(),
  src: 'https://darts.ne.jp/',
  width: 1000,
  iframeHeight: 200,
}

SmallWidthLargeHeight.args = {
  title: faker.commerce.product(),
  src: 'https://darts.ne.jp/',
  width: 200,
  iframeHeight: 1000,
}
