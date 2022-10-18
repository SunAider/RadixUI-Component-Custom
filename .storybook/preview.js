import { GlobalStyles } from 'twin.macro'
import '../styles/globals.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      { name: 'darts-amber', value: '#CC3300' },
      { name: 'light', value: '#fafafa' },
      { name: 'dark', value: '#9d9d9d' },
    ],
  },
}

export const decorators = [
  (Story) => (
    <div>
      <GlobalStyles />
      <Story />
    </div>
  ),
]
