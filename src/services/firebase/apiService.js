import firebase from 'firebase/app'
import 'firebase/firestore'
import { firebaseConfig } from './config'

class apiService {
  constructor(){
    this.fb = firebase
    // Initialize Firebase
    this.fb.initializeApp(firebaseConfig)
  }

  async getQuize(category){
    const snapshot = await this.fb.firestore().collection('quizzes').get().then((res) => {
      return res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    }).then(data => data)
    return snapshot
  }
  
  async getQuizeCategories(){
    const snapshot = await this.fb.firestore().collection('quizCategory').get().then((res) => {
      return res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    }).then(data => data)
    return snapshot
  }

  addQuize(data){
    this.fb.firestore().collection('quizzes').add(data)
  }

  addQuizeCategory(data){
    this.fb.firestore().collection('quizCategory').add(data)
  }


/*   const snapshot = await firebase.firestore().collection('events').get()
  return snapshot.docs.map(doc => doc.data()); */

}


export default new apiService();
// export const db = firebase.firestore();