import { storage } from "./config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadFiletoStorage = async (files, homeName) => {
    return Promise.all(files.map(async (file) => {
        const storageRef = ref(storage, `images/${homeName}/${file.name}`);
        await uploadBytes(storageRef, file);
        return getDownloadURL(storageRef);
    }));
}

