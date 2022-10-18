import { CSSProperties, FC, ReactNode } from 'react'
import * as RadixAlertDialog from '@radix-ui/react-alert-dialog'
import 'twin.macro'
import Button from './Button'

type AlertStyles = {
  content?: CSSProperties
  title?: CSSProperties
  description?: CSSProperties
}
type AlertClassNames = {
  content?: string
  title?: string
  description?: string
}
export type AlertDialogProps = {
  trigger?: ReactNode
  children?: ReactNode
  title?: ReactNode
  cancelTrigger?: ReactNode
  actionTrigger?: ReactNode
  classNames?: AlertClassNames
  styles?: AlertStyles
}
export const AlertDialog: FC<AlertDialogProps> = ({
  trigger,
  title,
  cancelTrigger,
  actionTrigger,
  children,
  classNames,
  styles,
}) => {
  return (
    <RadixAlertDialog.Root>
      <RadixAlertDialog.Trigger asChild>{trigger}</RadixAlertDialog.Trigger>
      <RadixAlertDialog.Portal>
        <RadixAlertDialog.Overlay
          tw="bg-black/40 fixed w-screen h-screen left-0 top-0"
          className={classNames?.description}
          style={styles?.description}
        />
        <RadixAlertDialog.Content
          tw="fixed w-1/2 bg-white z-50 rounded left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow"
          className={classNames?.content}
          style={styles?.content}
        >
          <RadixAlertDialog.Title className={classNames?.title} style={styles?.title}>
            {title}
          </RadixAlertDialog.Title>
          <RadixAlertDialog.Description
            tw="pt-2 text-gray-main"
            className={classNames?.description}
            style={styles?.description}
          >
            {children}
          </RadixAlertDialog.Description>
          <div tw="flex justify-end gap-2 pt-2">
            <RadixAlertDialog.Cancel asChild>{cancelTrigger ?? <Button>cancel</Button>}</RadixAlertDialog.Cancel>
            <RadixAlertDialog.Action asChild>{actionTrigger ?? <Button>action</Button>}</RadixAlertDialog.Action>
          </div>
        </RadixAlertDialog.Content>
      </RadixAlertDialog.Portal>
    </RadixAlertDialog.Root>
  )
}

export default AlertDialog
