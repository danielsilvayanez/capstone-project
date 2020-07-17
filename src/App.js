import React, { useState } from 'react'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import TaskPageDetails from './/pages/TaskPageDetails'
import NotFound from './pages/NotFound'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import defaultTasks from './tasks.json'

function App() {
  const driver = 'Will Smith'
  const [taskList, setTasklist] = useState(
    JSON.parse(localStorage.getItem('tasklist')) || defaultTasks
  )

  return (
    <AppGrid>
      <Header name={driver} />
      <StyledMain>
        <Switch>
          <Route
            path="/dashboard"
            component={() => <Dashboard tasks={taskList} />}
          />
          <Route
            path="/taskpagedetails/:callNumber"
            component={() => <TaskPageDetails tasks={taskList} />}
          />
          <Route
            exact
            path="/"
            component={() => <Dashboard tasks={taskList} />}
          />
          <Route component={NotFound} />
        </Switch>
      </StyledMain>
    </AppGrid>
  )
}

export default App

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: 100px auto;
  height: 100vh;
`
const StyledMain = styled.main`
  overflow: scroll;
`
