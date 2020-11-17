import { taskRef } from '../firebase/index'

export default async function fetchTasks() {
  const dbResult = await taskRef.get().then((data) => {
    const TasksData = []
    data.forEach((doc) => {
      TasksData.push(doc.data())
    })
       return TasksData
  })
  return dbResult;
}