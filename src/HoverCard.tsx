import { FC, ReactNode, CSSProperties } from 'react'
import * as RadixHoverCard from '@radix-ui/react-hover-card'
import 'twin.macro'

type Styles = {
  content: CSSProperties
  arrow: CSSProperties
}
type ClassNames = {
  content: string
  arrow: string
}
export type HoverCardProps = {
  trigger?: ReactNode
  children?: ReactNode
  classNames?: ClassNames
  styles?: Styles
}
export const HoverCard: FC<HoverCardProps> = ({ children, trigger, classNames, styles }) => {
  return (
    <RadixHoverCard.Root>
      <RadixHoverCard.Trigger asChild>{trigger}</RadixHoverCard.Trigger>
      <RadixHoverCard.Portal>
        <RadixHoverCard.Content
          tw="w-full max-w-xs p-6 transition-all bg-white rounded-md shadow-md"
          className={classNames?.content}
          style={styles?.content}
        >
          <RadixHoverCard.Arrow className={classNames?.arrow} style={styles?.arrow} />
          {children}
        </RadixHoverCard.Content>
      </RadixHoverCard.Portal>
    </RadixHoverCard.Root>
  )
}

export default HoverCard
