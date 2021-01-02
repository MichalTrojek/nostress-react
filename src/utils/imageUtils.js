import { storage } from '../firebase';
import imageCompression from 'browser-image-compression';

export async function uploadImage(setLoading, file) {
  setLoading(true);
  let storageRef = storage.ref();
  const filename = `${Date.now()}${file.name}`;
  const fileRef = storageRef.child('cardImages/' + filename);

  try {
    const compressedImage = await compressImage(file);

    await fileRef.put(compressedImage);
    const fileUrl = await fileRef.getDownloadURL();
    setLoading(false);
    return { fileUrl, filename };
  } catch (error) {
    console.error(
      `Error while uploading image to firebase storage. ${error.name} + ${error.message}`
    );
  } finally {
    setLoading(false);
  }
}

async function compressImage(file) {
  const options = {
    maxSizeMB: 0.5,
    useWebWorker: true,
    maxWidthOrHeight: 480,
  };

  try {
    const compressedFile = await imageCompression(file, options);
    console.log('returning compressed file');
    return compressedFile;
  } catch (error) {
    console.log(`Error while compressing file ${error}`);
    return file;
  }
}
