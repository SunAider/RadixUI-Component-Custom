import { FC, ReactNode, CSSProperties } from 'react'
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons'
import * as RadixPopover from '@radix-ui/react-popover'
import Button from './Button'
import IconButton from './IconButton'
import 'twin.macro'

type Styles = {
  content?: CSSProperties
  arrow?: CSSProperties
  close?: CSSProperties
}
type ClassNames = {
  content?: string
  arrow?: string
  close?: string
}
export type PopoverProps = {
  trigger?: ReactNode
  children?: ReactNode
  classNames?: ClassNames
  styles?: Styles
}
export const Popover: FC<PopoverProps> = ({ trigger, children, classNames, styles }) => {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger asChild>{trigger ?? <IconButton icon={<MixerHorizontalIcon />} />}</RadixPopover.Trigger>
      <RadixPopover.Anchor />
      <RadixPopover.Portal>
        <RadixPopover.Content
          sideOffset={5}
          tw="bg-white z-50 p-4 rounded shadow pt-6"
          className={classNames?.content}
          style={styles?.content}
        >
          <RadixPopover.Arrow tw="fill[white]" className={classNames?.arrow} style={styles?.arrow} />
          <RadixPopover.Close
            asChild
            aria-label="Close"
            tw="absolute right-2 top-2 "
            className={classNames?.close}
            style={styles?.close}
          >
            <Cross2Icon />
          </RadixPopover.Close>
          {children}
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  )
}

export default Popover
