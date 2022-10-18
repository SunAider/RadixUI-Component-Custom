import { CSSProperties, FC, ReactNode } from 'react'
import * as RadixDialog from '@radix-ui/react-dialog'
import { Cross1Icon } from '@radix-ui/react-icons'
import { Button } from './Button'
import { DartsLogo } from './DartsLogo'
import 'twin.macro'

export type IframeStyles = {
  overlay?: CSSProperties
  content?: CSSProperties
  iframe?: CSSProperties
}
export type IframeClassNames = {
  overlay?: string
  content?: string
  iframe?: string
}
export type IframeModalProps = {
  trigger?: ReactNode
  title?: ReactNode
  src?: string
  width?: number
  iframeHeight?: number
  variant?: 'darts-amber' | 'white' | 'black'
  classNames?: IframeClassNames
  styles?: IframeStyles
  defaultOpen?: boolean
}

const IframeModal: FC<IframeModalProps> = ({
  trigger,
  title,
  src,
  variant = 'darts-amber',
  width = 600,
  iframeHeight = 600,
  styles,
  classNames,
  defaultOpen = false,
}) => {
  const Close = (color = 'white') => (
    <RadixDialog.Close asChild tw="cursor-pointer hover:opacity-80 transition-opacity duration-500">
      <div tw="p-5 flex items-center justify-center">
        <Cross1Icon color={color} />
      </div>
    </RadixDialog.Close>
  )

  return (
    <RadixDialog.Root tw="overflow-auto" defaultOpen={defaultOpen}>
      <RadixDialog.Trigger asChild>{trigger ?? <Button>trigger</Button>}</RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay
          tw="bg-black/40 fixed w-screen h-screen left-0 top-0 z-40"
          style={styles?.overlay}
          className={classNames?.overlay}
        />
        <RadixDialog.Content
          tw="fixed bg-white z-50 rounded left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
          style={{ maxWidth: '80vw', width: `${width}px` }}
          className={classNames?.content}
        >
          {variant == 'darts-amber' && (
            <header tw="flex justify-between bg-[#CC3300] rounded-t">
              <div tw="p-5">
                <DartsLogo variant="darts" color="white" />
              </div>
              {Close()}
            </header>
          )}
          {variant == 'white' && (
            <header tw="flex justify-between rounded-t">
              <div tw="p-5">
                <DartsLogo variant="darts" color="color" />
              </div>
              {Close('black')}
            </header>
          )}
          {variant == 'black' && (
            <header tw="flex justify-between bg-black rounded-t">
              <div tw="p-5">
                <DartsLogo variant="darts" color="colorTextGray" />
              </div>
              {Close()}
            </header>
          )}
          <div tw="h-full items-center">
            {title && <div tw="text-3xl font-bold text-center py-4 flex-1">{title}</div>}
            {/* <RadixDialog.Description>{children}</RadixDialog.Description> */}
            <div tw="h-full p-1 pr-0">
              <iframe
                src={src}
                tw="w-full rounded max-h-[72vh]"
                height={iframeHeight}
                className={classNames?.iframe}
              ></iframe>
            </div>
          </div>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
}

export default IframeModal
