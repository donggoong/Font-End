import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, listAll } from "firebase/storage";
export const storage = getStorage();
/* -------------------파일 업로드------------------- */
export const fnUploadFile = function(uid,file){
  return new Promise((resolve) => {
    const storageRef = ref(storage, `${uid}/${Date.now()}+${file.name}`);
    uploadBytes(storageRef,file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((outputUrl)=>{
        resolve({
          outputUrl:outputUrl,
          orgUrl:file.name,
          storageUrl: `${uid}/${Date.now()}+${file.name}`
        })
      }).catch((error)=>{
        console.log('url확인중 오류')
      })//getDownloadURL  then catch
    }).catch((error)=>{
      console.log('업로드중 오류')
    })//uploadBytes then catch
  })
}

export const fnDeleteDirectory = function(directoryName){
  return new Promise((resolve) => {
    const directoryRef = ref(storage, directoryName);
    listAll(directoryRef)
      .then((dir) => {
        dir.items.forEach((v) => {
          const fileRef = ref(storage, `${directoryRef.fullPath}/${v.name}`);
          deleteObject(fileRef)
        })
        resolve()
      }).catch((error) => {
        alert(error.message)
      })
  })
}

export const fnDeleteObject = function(directoryName){
  return new Promise((resolve) => {
    const storageRef= ref(storage, '폴더명/파일명');
    deleteObject(storageRef).then(() => {
      resolve()// 삭제완료
    })
  })
}


