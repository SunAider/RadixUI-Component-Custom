import { FC, ReactNode, CSSProperties } from 'react'
import * as RadixScrollArea from '@radix-ui/react-scroll-area'
import 'twin.macro'

type Styles = {
  root: CSSProperties
  viewport?: CSSProperties
  scrollbar: CSSProperties
}
type ClassNames = {
  root: string
  viewport?: string
  scrollbar: string
}
export type ScrollAreaProps = {
  title?: ReactNode
  children?: ReactNode
  footer?: ReactNode
  height?: number
  classNames?: ClassNames
  styles?: Styles
  variant?: 'horizontal' | 'vertical' | 'both'
}
export const ScrollArea: FC<ScrollAreaProps> = ({ title, children, footer, classNames, styles, variant }) => {
  return (
    <RadixScrollArea.Root
      tw="bg-white rounded p-2 overflow-hidden flex h-64"
      className={classNames?.root}
      style={styles?.root}
    >
      <RadixScrollArea.Viewport tw="w-full h-full" className={classNames?.viewport} style={styles?.viewport}>
        <header tw="font-bold">{title}</header>
        <main>{children}</main>
        <footer>{footer}</footer>
      </RadixScrollArea.Viewport>
      {variant == 'horizontal' ? (
        <RadixScrollArea.Scrollbar
          orientation="horizontal"
          tw="flex user-select['none'] touch-action['none'] p-2 bg-gray-main/30 h-full"
          className={classNames?.scrollbar}
          style={styles?.scrollbar}
        >
          <RadixScrollArea.Thumb tw="flex-1  relative h-32 rounded-2xl before:content[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:min-w-[10px] before:min-h-[24px] before:rounded-full before:bg-gray-main " />
        </RadixScrollArea.Scrollbar>
      ) : variant == 'vertical' ? (
        <RadixScrollArea.Scrollbar
          orientation="vertical"
          tw="flex user-select['none'] touch-action['none'] p-2 bg-gray-main/30 h-full"
          className={classNames?.scrollbar}
          style={styles?.scrollbar}
        >
          <RadixScrollArea.Thumb tw="flex-1  relative h-32 rounded-2xl before:content[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:min-w-[10px] before:min-h-[24px] before:rounded-full before:bg-gray-main " />
        </RadixScrollArea.Scrollbar>
      ) : (
        <div>
          <RadixScrollArea.Scrollbar
            orientation="horizontal"
            tw="flex user-select['none'] touch-action['none'] p-2 bg-gray-main/30 h-full"
            className={classNames?.scrollbar}
            style={styles?.scrollbar}
          >
            <RadixScrollArea.Thumb tw="flex-1  relative h-32 rounded-2xl before:content[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:min-w-[10px] before:min-h-[24px] before:rounded-full before:bg-gray-main " />
          </RadixScrollArea.Scrollbar>
          <RadixScrollArea.Scrollbar
            orientation="vertical"
            tw="flex user-select['none'] touch-action['none'] p-2 bg-gray-main/30 h-full"
            className={classNames?.scrollbar}
            style={styles?.scrollbar}
          >
            <RadixScrollArea.Thumb tw="flex-1  relative h-32 rounded-2xl before:content[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:min-w-[10px] before:min-h-[24px] before:rounded-full before:bg-gray-main " />
          </RadixScrollArea.Scrollbar>
        </div>
      )}
      {/* <RadixScrollArea.Scrollbar
        orientation="vertical"
        tw="flex user-select['none'] touch-action['none'] p-2 bg-gray-main/30 h-full"
        className={classNames?.scrollbar}
        style={styles?.scrollbar}
      >
        <RadixScrollArea.Thumb tw="flex-1  relative h-32 rounded-2xl before:content[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:min-w-[10px] before:min-h-[24px] before:rounded-full before:bg-gray-main " />
      </RadixScrollArea.Scrollbar> */}
      <RadixScrollArea.Corner tw="bg-black" />
    </RadixScrollArea.Root>
  )
}

export default ScrollArea
