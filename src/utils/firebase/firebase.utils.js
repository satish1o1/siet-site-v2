// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    query,
    getDocs,
    addDoc,
    updateDoc,
    arrayUnion
    
} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "",
  authDomain: "bot-to-esite.firebaseapp.com",
  projectId: "bot-to-esite",
  storageBucket: "bot-to-esite.appspot.com",
  messagingSenderId: "109862623780",
  appId: "1:109862623780:web:9898e47b9670837bd716b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const addUserDoc = async () => {
  // Object.keys(MyData).map(async id=>{
  //   console.log(id)
  //   const userRef = doc(db, 'usersData',id)
  //   const userSnap = await getDoc(userRef)
  //   await setDoc(userRef, MyData[id])
  console.log('nothing')

  // const userRef = doc(db, 'usersData','19EM10503')
  // const userSnap = await getDoc(userRef)
  // await setDoc(userRef, MyData['19EM1A0503'])
  // if (!userSnap.exists()) 
  //    try {
  //       await setDoc(userRef, MyData['19EM1A0502'])
  //    } catch (error) {
  //       console.log(error.message)
  //    }

  }

  export const getMarks  = async () =>  {
    const collectionRef = collection(db, 'usersData');
    const q = query(collectionRef);
    const querySnapShot = await getDocs(q)

    const Category = querySnapShot.docs.reduce((acc, snapShot) => {
        const id = snapShot.data()['details']['id']
        acc[id] = snapShot.data()
        return acc
       
    },{}) 
    return Category

  }

  export const Update_Marks = async(CurrentUser,Original_obj) => {
    const UserRef = doc(db,'usersData',CurrentUser)
    const UserSnap  = await getDoc(UserRef)
    if(UserSnap.exists()){
        await setDoc(UserRef,Original_obj)
    }
    UserActivities(CurrentUser,'UPDATED-MARKS')
  }  


  export const UserActivities = async(userE,Action)=>{
    const ActRef = doc(db,'actions','YbJ4XIWJl0v54yunijG1')
    const createdAt = new Date()
    await updateDoc(ActRef, {
      ACTIONS: arrayUnion(userE+'<< '+Action+' >>'+ createdAt)
  });
  

  }
  
