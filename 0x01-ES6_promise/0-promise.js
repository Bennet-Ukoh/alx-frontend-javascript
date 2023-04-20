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
    const photoPromise = new Promise((resolve, reject) => {
      const photo = uploadPhoto();
      if (photo && photo.status === 200) {
        resolve(photo.body);
      } else {
        reject(new Error('Invalid photo response'));
      }
    });

    const userPromise = new Promise((resolve, reject) => {
      const user = createUser();
      if (user && user.firstName && user.lastName) {
        resolve(user);
      } else {
        reject(new Error('Invalid user response'));
      }
    });

    Promise.all([photoPromise, userPromise])
      .then((results) => {
        const [photo, user] = results;
        resolve({
          photo,
          firstName: user.firstName,
          lastName: user.lastName,
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export { uploadPhoto, createUser, getResponseFromAPI };
