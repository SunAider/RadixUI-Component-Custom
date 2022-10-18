import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component, { IconButtonProps } from '~/IconButton'
import { MixerHorizontalIcon } from '@radix-ui/react-icons'

export default {
  component: Component,
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = ({ ...props }) => {
  return <Component {...props} icon={<MixerHorizontalIcon />} />
}
export const Custom: ComponentStory<typeof Component> = ({ ...props }) => {
  return <Component {...props} icon={<MixerHorizontalIcon />} style={{ backgroundColor: 'red' }} className="border-2" />
}
