import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyClSKxGQ-yNYq1H-jlC36ClVagBXvg9iXc',
  authDomain: 'infoware-ecommerce.firebaseapp.com',
  projectId: 'infoware-ecommerce',
  storageBucket: 'infoware-ecommerce.appspot.com',
  messagingSenderId: '461028464756',
  appId: '1:461028464756:web:f376711431b06f3e199921',
  measurementId: 'G-VKVYBF526J',
})

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
