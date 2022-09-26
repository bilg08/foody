import { storage } from "./firebase";
import { getDownloadURL, ref as sRef, uploadBytes } from "firebase/storage";
import { setDocToFirebase } from "./setDoc";

export const uploadImageToFirebase = async (
  file,
  foodName,
) => {
  const storageRef = sRef(storage, `foods/${foodName}`);
  await uploadBytes(storageRef, file).then(async (snapshot) => {
      await getDownloadURL(snapshot.ref).then(async (url) => {
      await setDocToFirebase(`foods/${foodName}`, {
        img: url,
      })
    });
  });
};
