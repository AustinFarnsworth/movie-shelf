import axios from "axios";

export default axios.create({
  API_URL= "https://imdb8.p.rapidapi.com",
  REQUEST_HEADERS = {
    'x-rapidapi-host': 'imdb8.p.rapidapi.com',
    'x-rapidapi-key': '801a51c2ebmsh970a5842f77b752p1976c0jsn36e74b13fe3f'
  }
});
