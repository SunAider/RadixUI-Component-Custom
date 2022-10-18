import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component, { AccordionProps } from '~/Accordion'
import { faker } from '@faker-js/faker'

export default {
  component: Component,
} as ComponentMeta<typeof Component>

const defaultItems: AccordionProps['items'] = [...Array(5)].map(() => ({
  id: faker.datatype.uuid(),
  header: faker.commerce.product(),
  content: faker.lorem.words(4),
}))

const defaultStyles: AccordionProps['styles'] = {
  root: { borderColor: '#6666ff', borderWidth: '2px' },
  header: { backgroundColor: '#eeeeff' },
  content: { backgroundColor: '#ddddff' },
}

export const Default: ComponentStory<typeof Component> = ({ items = defaultItems, ...props }) => {
  return <Component {...props} items={items} />
}

export const CustomStyles: ComponentStory<typeof Component> = ({
  items = defaultItems,
  styles = defaultStyles,
  ...props
}) => {
  return <Component {...props} items={items} styles={styles} />
}
