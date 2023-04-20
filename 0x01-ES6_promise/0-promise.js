function uploadPhoto() {
  return {
    status: 200,
    body: 'photo-profile-1',
  };
}

function createUser() {
  return {
    firstName: 'Guillaume',
    lastName: 'Salva',
  };
}

function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const photo = uploadPhoto();
    const user = createUser();
    if (photo.status === 200 && user.firstName && user.lastName) {
      resolve({
        photo: photo.body,
        firstName: user.firstName,
        lastName: user.lastName,
      });
    } else {
      reject(new Error('Invalid response from API'));
    }
  });
}

export { uploadPhoto, createUser, getResponseFromAPI };
