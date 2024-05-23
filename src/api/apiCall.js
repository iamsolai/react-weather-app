import axios from "axios";

async function getWeather(url) {
  try {
    const response = await axios.get(url);
    return response.data;

  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
}

export default getWeather;
