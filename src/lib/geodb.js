// src/lib/geodb.js
import axios from "axios";

const GEO_DB_API = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const geoDbClient = axios.create({
  baseURL: GEO_DB_API,
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
});
