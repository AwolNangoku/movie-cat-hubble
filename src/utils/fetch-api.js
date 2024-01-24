export const requestGET = async ({ url }) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_THE_MOVIE_API_HOST}${url}`, {
      method: 'get',
      headers: {
        accept: 'application/json',
        authorization: `Bearer ${process.env.REACT_APP_THE_MOVIE_API_TOKEN}`
      }
    })
    if (!response.ok) {
      return new TypeError("Get request failed");
    }
    return response.json();
  } catch (e) {
    throw new TypeError("Get request failed");
  }
}