import { FC, ReactNode, CSSProperties } from 'react'
import * as RadixToolbar from '@radix-ui/react-toolbar'
import 'twin.macro'

type Styles = {
  content: CSSProperties
}
type ClassNames = {
  content: string
}
export type ToolbarProps = {
  children?: ReactNode
  classNames?: ClassNames
  styles?: Styles
}
export const Toolbar: FC<ToolbarProps> = ({ children, classNames, styles }) => {
  return (
    <RadixToolbar.Root>
      <RadixToolbar.Button />
      <RadixToolbar.Separator />
      <RadixToolbar.Link />
      <RadixToolbar.ToggleGroup
        type="single"
        tw="min-w-min min-h-0"
        className={classNames?.content}
        style={styles?.content}
      >
        {children}
      </RadixToolbar.ToggleGroup>
    </RadixToolbar.Root>
  )
}

export default Toolbar
