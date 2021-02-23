import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const BUCKET = "RqyRuHjZX8Z87JhBMhZZu6";
const BASE_URL = "https://kvdb.io/";

export const itemsService = {
  query,
  save,
  getRandomId,
};

async function query(userId) {
  const URL = `${BASE_URL + BUCKET}/${userId}`;
  console.log("url", URL);
  const res = await axios.get(URL);
  console.log(res);
  return res.data;
}

async function save(userId, items) {
  const res = await axios.post(BASE_URL + BUCKET + "/" + userId, items);
  return res;
}

function getRandomId() {
  return uuidv4();
}
