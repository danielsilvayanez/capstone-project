import { taskRef } from '../firebase/index'

export function fetchTasks() {
  return taskRef.get().then((data) => {
    let TasksData = []
    data.forEach((doc) => {
      TasksData.push(doc.data())
    })
    // console.log(TasksData)
    return TasksData
  })
}
