import axios from "axios";

const API = axios.create({ baseURL : " https://moovicdev.com/data" })


export const getVendorDataById = (id) => API.get(`/vendor/${id}.json`)

