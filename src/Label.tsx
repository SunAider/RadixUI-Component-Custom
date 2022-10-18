import { ComponentProps, FC, CSSProperties } from 'react'
import * as RadixLabel from '@radix-ui/react-label'

export type LabelProps = ComponentProps<typeof RadixLabel.Root> & {
  className?: string
  style?: CSSProperties
}
export const Label: FC<LabelProps> = ({ className, style, ...props }) => {
  return <RadixLabel.Root {...props} className={className} style={style} />
}

export default Label
