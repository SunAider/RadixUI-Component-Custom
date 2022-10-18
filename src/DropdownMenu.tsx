import { FC, ReactNode, CSSProperties } from 'react'
import * as RadixDropDownMenu from '@radix-ui/react-dropdown-menu'
import Button from './Button'
import 'twin.macro'

type DropdownMenuStyles = {
  content: CSSProperties
  item: CSSProperties
}
type DropdownMenuClassNames = {
  content: string
  item: string
}
export type DropDownMenuProps = {
  trigger?: ReactNode
  title: string[]
  classNames?: DropdownMenuClassNames
  styles?: DropdownMenuStyles
}

export const DropDownMenu: FC<DropDownMenuProps> = ({ trigger, title, classNames, styles }) => {
  return (
    <RadixDropDownMenu.Root>
      <RadixDropDownMenu.Trigger asChild>{trigger ?? <Button>Click</Button>}</RadixDropDownMenu.Trigger>

      <RadixDropDownMenu.Portal>
        <RadixDropDownMenu.Content tw="bg-white px-3 py-1 " className={classNames?.content} style={styles?.content}>
          {title.map((title) => (
            <RadixDropDownMenu.Item
              key={title}
              tw="flex cursor-default select-none  focus:bg-gray-main"
              className={classNames?.item}
              style={styles?.item}
            >
              {title}
            </RadixDropDownMenu.Item>
          ))}
          <RadixDropDownMenu.Label />
          <RadixDropDownMenu.Item />

          <RadixDropDownMenu.Group>
            <RadixDropDownMenu.Item />
          </RadixDropDownMenu.Group>

          <RadixDropDownMenu.CheckboxItem>
            <RadixDropDownMenu.ItemIndicator />
          </RadixDropDownMenu.CheckboxItem>

          <RadixDropDownMenu.RadioGroup>
            <RadixDropDownMenu.RadioItem value="">
              <RadixDropDownMenu.ItemIndicator />
            </RadixDropDownMenu.RadioItem>
          </RadixDropDownMenu.RadioGroup>

          <RadixDropDownMenu.Sub>
            <RadixDropDownMenu.SubTrigger />
            <RadixDropDownMenu.Portal>
              <RadixDropDownMenu.SubContent />
            </RadixDropDownMenu.Portal>
          </RadixDropDownMenu.Sub>

          <RadixDropDownMenu.Separator />
          <RadixDropDownMenu.Arrow />
        </RadixDropDownMenu.Content>
      </RadixDropDownMenu.Portal>
    </RadixDropDownMenu.Root>
  )
}

export default DropDownMenu
