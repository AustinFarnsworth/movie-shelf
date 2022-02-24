import axios from "axios";

axios
  .get("")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

// export default axios.create({
//   API_URL= "https://imdb8.p.rapidapi.com",
//   REQUEST_HEADERS = {
//     'x-rapidapi-host': 'imdb8.p.rapidapi.com',
//     'x-rapidapi-key': '
//   }
// });b
