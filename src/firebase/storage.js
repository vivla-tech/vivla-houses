import { storage } from "./config/firebase";
import { ref, uploadBytes, getDownloadURL, deleteObject, list } from "firebase/storage";

export const uploadFiletoStorage = async (files, homeName) => {
    return Promise.all(files.map(async (file) => {
        const storageRef = ref(storage, `images/${homeName}/${file.name}`);
        await uploadBytes(storageRef, file);
        return getDownloadURL(storageRef);
    }));
}

export const removeImageFromImagePicker = async (filePath, fileName) => {
    try {
        const fileRef = ref(storage, `images/${filePath}/${fileName}`);
        await deleteObject(fileRef)
        console.log('sucess delete image from storage', fileRef)
    } catch (error) {
        console.error('Error delete image from imagePicker', error)
    }



}

export const removeImageFromStorage = async (folderPath) => {
    try {
        const folderRef = ref(storage, `images/${folderPath}/`);

        const folderContents = await list(folderRef);

        await Promise.all(folderContents.items.map(async (item) => {
            await deleteObject(ref(storage, item.fullPath));
        }));

        await deleteObject(folderRef);

        console.log('Remove image correctly');
    } catch (error) {
        console.error('Error to remove image from Storage', error);
    }
};

