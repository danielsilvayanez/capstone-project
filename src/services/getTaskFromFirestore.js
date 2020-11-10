import { taskRef } from '../firebase/index'

export default function fetchTasks() {
  taskRef.get().then((data) => {
    let TasksData = []
    data.forEach((doc) => {
      TasksData.push(doc.data())
    })
    console.log('aus der funktion' + TasksData)
    return TasksData
  })
}