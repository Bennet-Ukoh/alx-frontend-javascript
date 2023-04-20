export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // call an API here and handle the response
    const response = { status: 200, body: 'Success' };

    if (response.status === 200) {
      resolve(response);
    } else {
      reject(new Error('API Error'));
    }
  });
}
