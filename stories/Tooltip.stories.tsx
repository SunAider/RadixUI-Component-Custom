import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component, { TooltipProps } from '~/Tooltip'
import 'twin.macro'

export default {
  component: Component,
} as ComponentMeta<typeof Component>

const defaultProps: TooltipProps = {
  children: 'tooltip',
}
const CustomProps: TooltipProps = {
  children: 'tooltip',
  styles: {
    arrow: { backgroundColor: 'red' },
    content: { backgroundColor: 'blue' },
  },
  classNames: {
    arrow: 'h-8',
    content: 'border-2',
  },
}
export const Default: ComponentStory<typeof Component> = (props) => {
  return (
    <div tw="mt-16">
      <Component {...defaultProps} {...props} />
    </div>
  )
}
export const Custom: ComponentStory<typeof Component> = (props) => {
  return <Component {...CustomProps} {...props} />
}
export const Bottom: ComponentStory<typeof Component> = (props) => {
  return <Component {...defaultProps} {...props} />
}
