import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component, { DartsLogoProps } from '~/DartsLogo'
import logoVariants, { logoColors, logoDirections } from '~/logos'

export default {
  component: Component,
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = (props) => {
  return (
    <div className={`bg-gray-darken flex justify-center items-center p-4`}>
      <Component {...props} />
    </div>
  )
}
Default.args = {
  variant: 'darts',
  width: 200,
}

export const Catalog = () => {
  return (
    <div className={`flex justify-center items-center flex-col gap-8`}>
      {Object.keys(logoVariants).map((variant) => (
        <div key={variant} className={`flex justify-between items-center bg-gray-darken p-4 gap-4`}>
          {logoColors.map((color) =>
            logoDirections.map((direction) => (
              <Component
                key={`${variant}${color}${direction}`}
                variant={variant as DartsLogoProps['variant']}
                color={color}
                direction={direction}
                width={100}
              />
            )),
          )}
        </div>
      ))}
    </div>
  )
}
