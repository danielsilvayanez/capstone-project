import React from 'react'
import Header from './Header'
import GlobalStyles from './GlobalStyles'

export default {
  title: 'Header',
  component: Header,
}

export const ToStorybook = () => (
  <>
    <GlobalStyles />
    <Header />
  </>
)

ToStorybook.story = {
  name: 'Header',
}
