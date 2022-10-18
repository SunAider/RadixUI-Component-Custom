import { CSSProperties, FC, ReactNode } from 'react'
import * as RadixAccordion from '@radix-ui/react-accordion'
import 'twin.macro'
import { ChevronDownIcon } from '@radix-ui/react-icons'

export type AccordionItem = {
  id: string
  header?: ReactNode
  content?: ReactNode
}
type AccordionStyles = {
  root?: CSSProperties
  header?: CSSProperties
  content?: CSSProperties
}
type AccordionClassNames = {
  root?: string
  header?: string
  content?: string
}

export type AccordionProps = {
  items?: AccordionItem[]
  classNames?: AccordionClassNames
  styles?: AccordionStyles
}
export const Accordion: FC<AccordionProps> = ({ items = [], styles, classNames }) => {
  return (
    <div>
      <RadixAccordion.Root
        type="single"
        tw="border border-grayline-dark bg-white rounded shadow"
        collapsible
        className={classNames?.root}
        style={styles?.root}
      >
        {items.map((item) => (
          <RadixAccordion.Item value={item.id} key={item.id}>
            <RadixAccordion.Header
              tw="py-2 px-4 border-b border-b-gray-main"
              style={styles?.header}
              className={classNames?.header}
            >
              <RadixAccordion.Trigger tw="w-full flex justify-between items-center">
                {item.header}
                <ChevronDownIcon />
              </RadixAccordion.Trigger>
            </RadixAccordion.Header>
            <RadixAccordion.Content
              tw="px-4 py-2 bg-white text-gray-main"
              className={classNames?.content}
              style={styles?.content}
            >
              {item.content}
            </RadixAccordion.Content>
          </RadixAccordion.Item>
        ))}
      </RadixAccordion.Root>
    </div>
  )
}

export default Accordion
