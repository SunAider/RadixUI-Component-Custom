import { ReactNode } from 'react'
import dartsLogos from './DARTs'
import marketLogos from './Market'
import nftLogos from './NFT'

export const logoColors = ['color', 'color', 'colorTextGray', 'white'] as const
export const logoDirections = ['horizontal', 'vertical'] as const

export type LogoColor = typeof logoColors[number]
export type LogoDirection = typeof logoDirections[number]

export type LogoVariant = {
  [key in LogoColor]: {
    [key in LogoDirection]: ReactNode
  }
}

const logoVariants = {
  darts: dartsLogos,
  nft: nftLogos,
  market: marketLogos,
}

export default logoVariants
