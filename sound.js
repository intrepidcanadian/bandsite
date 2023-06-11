const BASE_URL = "https://newsapi.org/";
const API_KEY = "c4ca425d2d1141be8dba919669c234ae";

axios
.get(`${BASE_URL}/v2/top-headlines?country=ca&category=${category}&apiKey=${API_KEY}`)
