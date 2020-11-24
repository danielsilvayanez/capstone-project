import { taskRef } from '../firebase/index'

export function updateTask(documentId, data) {
  return taskRef
    .doc(documentId)
    .update(data)
    .then(() => {
      return taskRef
        .doc(documentId)
        .get()
        .then((doc) => {
          if (doc.exists) {
            return doc.data()
          }
        })
    })
}
