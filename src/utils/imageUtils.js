import { storage } from '../firebase';

export async function uploadImage(setLoading, file) {
  setLoading(true);
  let storageRef = storage.ref();
  const filename = `${Date.now()}${file.name}`;
  const fileRef = storageRef.child('cardImages/' + filename);

  try {
    await fileRef.put(file);
    const fileUrl = await fileRef.getDownloadURL();
    setLoading(false);
    return { fileUrl, filename };
  } catch (error) {
    console.log(`Error while fetching `);
  }
}
