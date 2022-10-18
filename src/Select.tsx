import { FC } from 'react'
import ReactSelect, { Props } from 'react-select'
import 'twin.macro'

export const Select: FC<Props> = ({ ...props }) => {
  return <ReactSelect {...props} />
}
export default Select
