import { getFirestore, Timestamp, collection, doc, addDoc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, writeBatch, query, where, orderBy, limit, onSnapshot,  arrayUnion, arrayRemove, startAt, startAfter, endAt, endBefore, getCountFromServer} from "firebase/firestore";
export const db = getFirestore();
/* -------------------단일 문서 추가------------------- */
export const fnAddDoc = function(collectionName,data){
  return new Promise((resolve) => {
    addDoc(collection(db,collectionName),data).then((doc)=>{
      resolve()
    })
  })
}
/* -------------------컬렉션 전체 삭제------------------- */
export const fnDeleteCollection = function(collectionName){
  return new Promise((resolve) => {
    const batch = writeBatch(db);
    getDocs(collection(db, collectionName)).then((querySnapshot)=>{
      querySnapshot.forEach((v) => {
        const docRef = doc(db, collectionName, v.id);
        batch.delete(docRef);
      })//forEach
      batch.commit().then(()=>{
        resolve()
      })//batch then
    })//getDoc then
  })
}
/* -------------------페이지 네이션------------------- */
export const fnGetDocs = function(collectionName,limitCnt, nextDoc=null,){
  return new Promise((resolve) => {
    const queryString=(nextDoc)?query(collection(db, collectionName), orderBy('timestamp', 'desc'), startAfter(nextDoc), limit(limitCnt)):query(collection(db, collectionName), orderBy('timestamp', 'desc'), limit(limitCnt))
    getDocs(queryString)
    .then((querySnapshot) => {
      resolve({
        docsArr: querySnapshot.docs,
        nextDoc: querySnapshot.docs[querySnapshot.docs.length - 1]
      })
    })//getDocs
  })
}
/* -------------------컬렉션 문서 전체 길이 알아오기------------------- */
export const fnGetDocCount = function(collectionName){
  return new Promise((resolve) => {
    getCountFromServer(collection(db, collectionName)).then((snapshot)=>{
      resolve(snapshot.data().count)
    })
  })
}
/* -------------------단일 문서 가져오기------------------- */
export const fnGetDoc = function(collectionName,docid){
  return new Promise((resolve) => {
    const docRef = doc(db, collectionName, docid);
    getDoc(docRef).then((doc) => {
        resolve(doc.data())
    })
  })
}
/* -------------------문서 업데이트------------------- */
export const fnUpdateDoc = function(collectionName,docid,data){
  return new Promise((resolve) => {
    const docRef = doc(db, collectionName, docid);
    updateDoc(docRef, data).then((doc)=>{
      resolve()
    })//updateDoc then
  })
}
/* -------------------문서 지우기------------------- */
export const fnDeleteObject = function(collectionName,docid,data){
  return new Promise((resolve) => {
    deleteDoc(doc(db, "컬렉션이름", "문서id")).then(()=>{
      console.log ('문서삭제완료')
    })//deleteDoc then
  })
}
