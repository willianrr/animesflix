import firebase from 'firebase/app';
import 'firebase/firebase-firestore';

import firebaseConfig from './firebaseConfig';

export const db = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig).firestore()
  : firebase.app().firestore();

export const animesLists = [
  {
    link: 'one-piece',
    name: 'one piece',
    image: 'https://firebasestorage.googleapis.com/v0/b/animesflix-40649.appspot.com/o/thumbnail%2FBoruto.png?alt=media&token=0722c5d3-7a8f-43df-bfb9-cc3ac6c8d04c'
  },
  {
    link: 'one-piece',
    name: 'one piece',
    image: 'https://firebasestorage.googleapis.com/v0/b/animesflix-40649.appspot.com/o/thumbnail%2FBoruto.png?alt=media&token=0722c5d3-7a8f-43df-bfb9-cc3ac6c8d04c'
  },
  {
    link: 'one-piece',
    name: 'one piece',
    image: 'https://firebasestorage.googleapis.com/v0/b/animesflix-40649.appspot.com/o/thumbnail%2FBoruto.png?alt=media&token=0722c5d3-7a8f-43df-bfb9-cc3ac6c8d04c'
  },
  {
    link: 'one-piece',
    name: 'one piece',
    image: 'https://firebasestorage.googleapis.com/v0/b/animesflix-40649.appspot.com/o/thumbnail%2FBoruto.png?alt=media&token=0722c5d3-7a8f-43df-bfb9-cc3ac6c8d04c'
  },
  {
    link: 'one-piece',
    name: 'one piece',
    image: 'https://firebasestorage.googleapis.com/v0/b/animesflix-40649.appspot.com/o/thumbnail%2FBoruto.png?alt=media&token=0722c5d3-7a8f-43df-bfb9-cc3ac6c8d04c'
  },
  {
    link: 'one-piece',
    name: 'one piece',
    image: 'https://firebasestorage.googleapis.com/v0/b/animesflix-40649.appspot.com/o/thumbnail%2FBoruto.png?alt=media&token=0722c5d3-7a8f-43df-bfb9-cc3ac6c8d04c'
  },
  {
    link: 'one-piece',
    name: 'one piece',
    image: 'https://firebasestorage.googleapis.com/v0/b/animesflix-40649.appspot.com/o/thumbnail%2FBoruto.png?alt=media&token=0722c5d3-7a8f-43df-bfb9-cc3ac6c8d04c'
  },
  {
    link: 'one-piece',
    name: 'one piece',
    image: 'https://firebasestorage.googleapis.com/v0/b/animesflix-40649.appspot.com/o/thumbnail%2FBoruto.png?alt=media&token=0722c5d3-7a8f-43df-bfb9-cc3ac6c8d04c'
  },
  {
    link: 'one-piece',
    name: 'one piece',
    image: 'https://firebasestorage.googleapis.com/v0/b/animesflix-40649.appspot.com/o/thumbnail%2FBoruto.png?alt=media&token=0722c5d3-7a8f-43df-bfb9-cc3ac6c8d04c'
  },
  {
    link: 'one-piece',
    name: 'one piece',
    image: 'https://firebasestorage.googleapis.com/v0/b/animesflix-40649.appspot.com/o/thumbnail%2FBoruto.png?alt=media&token=0722c5d3-7a8f-43df-bfb9-cc3ac6c8d04c'
  },
  {
    link: 'one-piece',
    name: 'one piece',
    image: 'https://firebasestorage.googleapis.com/v0/b/animesflix-40649.appspot.com/o/thumbnail%2FBoruto.png?alt=media&token=0722c5d3-7a8f-43df-bfb9-cc3ac6c8d04c'
  }
]

