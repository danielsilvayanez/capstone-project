import React from 'react'
import Login from './Login'
import GlobalStyles from '../GlobalStyles'
import { addDecorator } from '@storybook/react'

export default {
  title: 'LoginPage',
  component: Login,
}

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))

export const ToStorybook = () => <Login />

ToStorybook.story = {
  name: 'Login',
}
