import { CSSProperties, FC, ReactNode } from 'react'
import { PlusIcon } from '@radix-ui/react-icons'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import 'twin.macro'
import IconButton from './IconButton'

type Styles = {
  content?: CSSProperties
  arrow?: CSSProperties
}
type ClassNames = {
  arrow?: string
  content?: string
}

export type TooltipProps = {
  trigger?: ReactNode
  children?: ReactNode
  classNames?: ClassNames
  styles?: Styles
}
export const Tooltip: FC<TooltipProps> = ({ trigger, children, classNames, styles }) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          <div tw="flex justify-center">{trigger ?? <IconButton icon={<PlusIcon />} tw="cursor-default" />}</div>
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            tw="bg-white rounded p-2"
            sideOffset={5}
            className={classNames?.content}
            style={styles?.content}
          >
            {children}
            <RadixTooltip.Arrow tw="fill[white]" className={classNames?.arrow} style={styles?.arrow} />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

export default Tooltip
