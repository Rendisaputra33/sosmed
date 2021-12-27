import { initializeApp } from 'firebase/app'
import {
	getStorage,
	uploadBytesResumable,
	ref,
	getDownloadURL,
	deleteObject,
} from '@firebase/storage'
import { configs } from '../bootstrap'

const firebaseInstance = initializeApp(configs.firebase)
const storage = getStorage(firebaseInstance)

export function uploadToFirebase(file: any) {
	return new Promise(async (resolve, reject) => {
		const storageRef = ref(storage, '/images/' + file.originalname)
		const taskUploading = await uploadBytesResumable(storageRef, file.buffer)
		resolve(await getDownloadURL(taskUploading.ref))
	})
}

export function deleteToFireBase() {}
