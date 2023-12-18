import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {
  getDownloadURL,
  getStorage,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC0vu--7lzMRbmc7SsN50Ld8-AK7Q8sh6Q",
  authDomain: "galeryimage-67404.firebaseapp.com",
  projectId: "galeryimage-67404",
  storageBucket: "galeryimage-67404.appspot.com",
  messagingSenderId: "367388402184",
  appId: "1:367388402184:web:46f0f9b3db8762e93427bd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const storage = getStorage(app);

export const upLoadFile = async (file, name) => {
  const storageRef = ref(storage, name);
  await uploadBytes(storageRef, file);

  const url = await getDownloadURL(storageRef);

  return url;
};

export const getAllImages = async () => {
  const storageRef = ref(storage);

  try {
    const result = await listAll(storageRef);

    const downloadURLs = await Promise.all(
      result.items.map(async (item) => {
        const url = await getDownloadURL(item);
        return url;
      })
    );

    return downloadURLs;
  } catch (error) {
    console.error("Error al obtener las imágenes:", error);
    throw error;
  }
};

export { auth };
