import { LogoVariant } from '../'
import DARTsColor from './DARTsColor'
import DARTsColorTextGray from './DARTsColorTextGray'
import DARTsColorTextGrayVertical from './DARTsColorTextGrayVertical'
import DARTsColorVertical from './DARTsColorVertical'
import DARTsWhite from './DARTsWhite'
import DARTsWhiteVertical from './DARTsWhiteVertical'

const dartsLogos: LogoVariant = {
  color: {
    horizontal: DARTsColor,
    vertical: DARTsColorVertical,
  },
  colorTextGray: {
    horizontal: DARTsColorTextGray,
    vertical: DARTsColorTextGrayVertical,
  },
  white: {
    horizontal: DARTsWhite,
    vertical: DARTsWhiteVertical,
  },
}

export default dartsLogos
