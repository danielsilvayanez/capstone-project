import React from 'react'
import Header from '../components/Header'

export default {
  title: 'Components',
  component: Header,
}

export const ToStorybook = () => <Header />

ToStorybook.story = {
  name: 'Header',
}
