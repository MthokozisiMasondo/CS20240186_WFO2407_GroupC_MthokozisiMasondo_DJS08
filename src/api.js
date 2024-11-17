import { initializeApp } from "firebase/app"
import { getFirestore,
         collection,
         doc,
         getDocs,
         query,
         where,
         documentId
 } from "firebase/firestore"

 const firebaseConfig = {
    apiKey: "AIzaSyA8-xBihKKByCQUC39CPN-pHeOSHs-Wk-w",
    authDomain: "van-life-742da.firebaseapp.com",
    projectId: "van-life-742da",
    storageBucket: "van-life-742da.firebasestorage.app",
    messagingSenderId: "341513239502",
    appId: "1:341513239502:web:fefa5bb6acb38da9ddc99f"
  };



const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef)
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}