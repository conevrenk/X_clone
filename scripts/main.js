import { API } from "./api.js";
const api = new API();
const data = await api.getUser("elonmusk");
console.log(data);
