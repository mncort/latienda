import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig)

const db  = firebase.firestore();

export const fire = {}


fire.setCollection = (collectionName, array, id,callback) => {
    let fr = db.collection(collectionName)
    array.forEach(item => 
      { item[id]? 
          fr.doc(item[id]).set(item)
            :
          fr.add(item)
  
        .then ( docRef => {
          console.log   ("Document written with ID: ", docRef.id) 
          callback(docRef.id)
        })
        .catch( error  => {
          console.error ("Error adding document: "   , error    ) 
        })
      }
    )
  }

  fire.updateCollectionDoc = (collectionName, doc, values) => {
    db.collection(collectionName)
      .doc(doc)
      .update(values)
      .catch( error  => {console.error ("Error updating document: "   , error    ) })
  }

  fire.getCollection = (callback,collection,opt={}) => {
    /*
    options = { 
              where:["category","==","pantalones"] 
              ws:[wh:["category","==","remeras"],wh:["precio","<=","150"]]
              let ws    =  opt.ws ? opt.ws.forEach(o => fireGet.where(o.wh[0],o.wh[1],o.wh[2])) : dc
                
              sort:{key:"orden",order:"asc"}
                
              doc:"id"
            }
    */
  let fireGet = db.collection(collection);
  
    let dc    =  opt.doc   ? fireGet.doc(opt.doc)                                     : fireGet
    let wh    =  opt.where ? fireGet.where(opt.where[0],opt.where[1],opt.where[2])    : dc
    let geter =  opt.sort  ? wh.orderBy(opt.sort.key,opt.sort.order)                  : wh
  
  
    geter.get()
    .then( querySnapshot  => {
    opt.doc && !querySnapshot.exists ? callback(null)
      :
        callback(opt.doc ?
                        [{...querySnapshot.data(),id:querySnapshot.id}]
                        :
                        querySnapshot.docs.map( i => {
                          return(  {...i.data(),id:i.id} )
                        })
                    )
     })
    .catch( error => {
      console.error("Error geting documents: ", error)
    })
  };
  
