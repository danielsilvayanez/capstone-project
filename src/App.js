import React, { useState } from 'react'
import Header from './components/Header/Header'
import Dashboard from './pages/Dashboard'
import TaskPageDetails from './/pages/TaskPageDetails'
import NotFound from './pages/NotFound'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import defaultTasks from './tasks.json'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import useAuth from './components/auth/useAuth'
import dayjs from 'dayjs'
import LoginContext from './components/auth/loginContext'
import firebaseApp from './firebase'
import Logout from './components/auth/Logout'
import UserBar from './components/auth/UserBar'
import CalendarOverview from './components/Calendar/CalendarOverview'

function App() {
  const user = useAuth()
  const currentDate = dayjs().format('DD.MM.YYYY')

  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem('tasklist')) || defaultTasks
  )

  function updateTaskList(task, callNumber) {
    if (task) {
      let list = [...taskList]
      const index = taskList.findIndex(
        (task) => task.call_number === callNumber
      )
      list[index] = task
      setTaskList(list)
      localStorage.setItem('tasklist', JSON.stringify(list))
    }
  }

  return (
    <LoginContext.Provider value={{ user, firebaseApp }}>
      <AppGrid>
        <Header />
        <StyledMain>
          <Switch>
            <Route
              path="/dashboard"
              component={() => (
                <Dashboard
                  user={user}
                  tasks={taskList}
                  currentDate={currentDate}
                />
              )}
            />
            <Route path="/register" component={() => <Register />} />
            <Route path="/login" component={() => <Login />} />
            <Route path="/logout" component={() => <Logout />} />
            <Route path="/calendar" component={() => <CalendarOverview />} />
            <Route
              path="/taskpagedetails/:callNumber"
              component={() => (
                <TaskPageDetails
                  updateTaskList={updateTaskList}
                  tasks={taskList}
                />
              )}
            />
            <Route
              exact
              path="/"
              component={() => <Dashboard user={user} tasks={taskList} />}
            />
            <Route component={NotFound} />
          </Switch>
          <UserBar />
        </StyledMain>
      </AppGrid>
    </LoginContext.Provider>
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
