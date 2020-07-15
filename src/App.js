import React from 'react'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import TaskPageDetails from './/pages/TaskPageDetails'
import NotFound from './pages/NotFound'
import { Route, Switch } from 'react-router-dom'

function App() {
  const driver = 'Will Smith'

  return (
    <>
      <Header name={driver} />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route
          path="/taskpagedetails/:callNumber"
          component={TaskPageDetails}
        />
        <Route exact path="/" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </>
  )
}

export default App
