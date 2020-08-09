import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=",
});

export default instance;
