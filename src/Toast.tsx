import { FC, useState, ReactNode, CSSProperties } from 'react'
import * as RadixToast from '@radix-ui/react-toast'
import Button from './Button'
import 'twin.macro'
type Styles = {
  root?: CSSProperties
  title?: CSSProperties
  description?: CSSProperties
}
type ClassNames = {
  root?: string
  title?: string
  description?: string
}
export type ToastProps = {
  title?: string
  trigger?: ReactNode
  children?: ReactNode
  classNames?: ClassNames
  styles?: Styles
  altText?: string
}
export const Toast: FC<ToastProps> = ({ title, children, trigger, classNames, styles, altText = '' }) => {
  const [open, setOpen] = useState(false)
  const onClickHandler = () => {
    if (open) {
      setOpen(false)
      setTimeout(() => {
        setOpen(true)
      }, 700)
    } else {
      setOpen(true)
    }
  }
  return (
    <RadixToast.Provider>
      {trigger ?? <Button onClick={onClickHandler}>trigger</Button>}
      <RadixToast.Root
        defaultOpen
        open={open}
        onOpenChange={setOpen}
        tw=" bg-white z-50 fixed bottom-4 inset-x-4 w-auto "
        className={classNames?.root}
        style={styles?.root}
      >
        <RadixToast.Title asChild className={classNames?.title} style={styles?.title}>
          <p className="font-medium">{title}</p>
        </RadixToast.Title>
        <RadixToast.Description asChild tw="text-black" className={classNames?.description} style={styles?.description}>
          <p>{children}</p>
        </RadixToast.Description>
        {/* defaultでtriggerを設定する */}
        <RadixToast.Action altText={altText} />
        <RadixToast.Close />
      </RadixToast.Root>
      <RadixToast.Viewport />
    </RadixToast.Provider>
  )
}

export default Toast
