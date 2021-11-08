import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
 const TOKEN = JSON.parse( localStorage.getItem( "persist:root" )) !==null && JSON.parse( JSON.parse( localStorage.getItem( "persist:root" ) ).user ) !== (undefined || null)
  ? JSON.parse( JSON.parse( localStorage.getItem( "persist:root" ) ).user )?.currentUser?.accessToken : "";

//const TOKEN =  JSON.parse(JSON.parse( localStorage.getItem( "persist:root" ) ).currentUser ).accessToken || "";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});