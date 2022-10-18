import { LogoVariant } from '..'
import NFTColor from './NFTColor'
import NFTColorTextGray from './NFTColorTextGray'
import NFTColorTextGrayVertical from './NFTColorTextGrayVertical'
import NFTColorVertical from './NFTColorVertical'
import NFTWhite from './NFTWhite'
import NFTWhiteVertical from './NFTWhiteVertical'

const nftLogos: LogoVariant = {
  color: {
    horizontal: NFTColor,
    vertical: NFTColorVertical,
  },
  colorTextGray: {
    horizontal: NFTColorTextGray,
    vertical: NFTColorTextGrayVertical,
  },
  white: {
    horizontal: NFTWhite,
    vertical: NFTWhiteVertical,
  },
}

export default nftLogos
