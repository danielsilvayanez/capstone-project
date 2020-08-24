import Header from './Header'
import GlobalStyles from '../GlobalStyles'
import { addDecorator } from '@storybook/react'

export default {
  title: 'Header',
  component: Header,
}

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))

export const ToStorybook = () => <Header />

ToStorybook.story = {
  name: 'Header',
}
