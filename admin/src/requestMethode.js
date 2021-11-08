import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const base = JSON.parse( JSON.parse( localStorage.getItem( "persist:root" ) ).user ).currentUser;
const TOKEN = ( base!== null && base !== undefined ) ?
base.accessToken : " ";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});


export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});