import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto('my-photo.jpg');
    const user = await createUser('John', 'Doe');
    return { photo, user };
  } catch (error) {
    console.error(error);
    return { photo: null, user: null };
  }
}
