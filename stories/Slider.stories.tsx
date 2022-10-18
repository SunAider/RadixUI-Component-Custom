import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component, { SliderProps } from '~/Slider'
import React, { useState } from 'react'
export default {
  component: Component,
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = (props) => {
  const [value, setValue] = useState(0)
  const [value2, setValue2] = useState(0)

  return (
    <div className={`my-8`}>
      <div className="bg-white p-4 mb-8">
        <Component {...props} value={value} onChange={(val) => setValue(val)} />
      </div>
      <div className="bg-white p-4">
        <Component {...props} className={`w-full`} value={value2} onChange={(val) => setValue2(val)} />
      </div>
    </div>
  )
}

export const Custom: ComponentStory<typeof Component> = (props) => {
  const [value, setValue] = useState(500)
  const ref = React.createRef<HTMLSpanElement>()
  return (
    <div className="bg-white p-8 w-full">
      <Component {...props} ref={ref} className={`w-full`} value={value} onChange={(val) => setValue(val)} />
    </div>
  )
}
Custom.args = {
  styles: {
    root: { backgroundColor: 'none' },
    track: { backgroundColor: 'none' },
    thumb: { backgroundColor: 'none' },
    range: { backgroundColor: 'none' },
  },
  classNames: {
    root: 'mt-16',
    track: 'border-0',
    thumb: 'border-0',
  },
  min: 30,
  max: 2000,
  step: 50,
}
