import axios from "axios";

// require("dotenv").config();

// const KEY = process.env.REACT_API_KEY;
const KEY = "42fafab1d67d95a1993da7575e94ff60";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: KEY,
    include_adult: false,
  },
});
