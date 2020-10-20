import firebaseApp from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from './config'
import 'firebase/firestore'

const firebaseInit = () => {
  firebaseApp.initializeApp(firebaseConfig)
  return firebaseApp.auth()
}

export default firebaseInit()

const db = firebaseApp.firestore()

export const taskRef = db.collection('Auftragsliste')
