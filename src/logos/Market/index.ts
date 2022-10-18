import { LogoVariant } from '..'
import MarketColor from './MarketColor'
import MarketColorTextGray from './MarketColorTextGray'
import MarketColorTextGrayVertical from './MarketColorTextGrayVertical'
import MarketColorVertical from './MarketColorVertical'
import MarketWhite from './MarketWhite'
import MarketWhiteVertical from './MarketWhiteVertical'

const marketLogos: LogoVariant = {
  color: {
    horizontal: MarketColor,
    vertical: MarketColorVertical,
  },
  colorTextGray: {
    horizontal: MarketColorTextGray,
    vertical: MarketColorTextGrayVertical,
  },
  white: {
    horizontal: MarketWhite,
    vertical: MarketWhiteVertical,
  },
}

export default marketLogos
