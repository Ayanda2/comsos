const API_KEY = "4E09sP7t1fv6M3UFdTcIRdze0g9IU46aiN3DfXPf";

const request = {
  fetchMarsPhotos: `mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${API_KEY} `,
  fetchEarth: `EPIC/api/natural/images?api_key=${API_KEY}`,
};
export default request;
