import firebase from 'firebase/app'
import 'firebase/database'
import { createGlobalState } from '@vueuse/core'
import { useRTDB } from '@vueuse/firebase/useRTDB'

const db = firebase.initializeApp({ databaseURL: 'https://turboship-dev-default-rtdb.firebaseio.com' }).database()

const todos = useRTDB(db.ref('todos'), { autoDispose: false })

export const useTodos = createGlobalState(() => todos)
