import { FC, ReactNode, CSSProperties } from 'react'
import * as RadixDialog from '@radix-ui/react-dialog'
import 'twin.macro'
import Button from './Button'

type DialogStyles = {
  content: CSSProperties
  title: CSSProperties
  description: CSSProperties
  cancel: CSSProperties
  action: CSSProperties
}
type DialogClassNames = {
  content: string
  title: string
  description: string
  cancel: string
  action: string
}

export type DialogProps = {
  trigger?: ReactNode
  children?: ReactNode
  title?: ReactNode
  actionText?: string
  classNames?: DialogClassNames
  styles?: DialogStyles
}
export const Dialog: FC<DialogProps> = ({ trigger, title, actionText, children, classNames, styles }) => {
  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay tw="bg-black/40 fixed w-screen h-screen left-0 top-0 z-40" />
        <RadixDialog.Content
          tw="fixed w-1/2 bg-white z-50 rounded left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow"
          className={classNames?.content}
          style={styles?.content}
        >
          <RadixDialog.Title className={classNames?.title} style={styles?.title}>
            {title}
          </RadixDialog.Title>
          <RadixDialog.Description
            tw="pt-2 text-gray-main"
            className={classNames?.description}
            style={styles?.description}
          >
            {children}
          </RadixDialog.Description>
          <div tw="flex justify-end gap-2 pt-2">
            <RadixDialog.Close asChild>
              <Button>{actionText}</Button>
            </RadixDialog.Close>
          </div>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
}

export default Dialog
