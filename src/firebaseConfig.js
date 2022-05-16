import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBXxSAm61j5NTPNWLIJMEME1rFGh2RmUmE',

  authDomain: 'next-firebase-17731.firebaseapp.com',

  projectId: 'next-firebase-17731',

  storageBucket: 'next-firebase-17731.appspot.com',

  messagingSenderId: '491573893302',

  appId: '1:491573893302:web:c5d0bc4924ac7f48456e17',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
window.app = app

export { app, auth }
