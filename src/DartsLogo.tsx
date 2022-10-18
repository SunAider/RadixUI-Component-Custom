import { FC } from 'react'
import 'twin.macro'
import logoVariants, { LogoColor, LogoDirection } from '~/logos'

export type DartsLogoProps = {
  variant: keyof typeof logoVariants
  color?: LogoColor
  direction?: LogoDirection
  width?: number
}

export const DartsLogo: FC<DartsLogoProps> = ({ variant, color = 'color', direction = 'horizontal', width = 100 }) => {
  return (
    <div tw="inline-block" style={{ width }}>
      {logoVariants[variant][color][direction]}
    </div>
  )
}

export default DartsLogo
