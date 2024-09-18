import axios from "axios";

const API_KEY = "AIzaSyBYCEwRoXhi9Pj8T-MEWXIFMPfiKi1IVPs";

async function authenticate(mode, email, pass) {
  const URL = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const res = await axios.post(URL, {
    email: email,
    password: pass,
    returnSecureToken: true,
  });

  const token = res.data.idToken;
  return token;
}

export async function createUser(email, pass) {
  return await authenticate("signUp", email, pass);
}

export async function login(email, pass) {
  return await authenticate("signInWithPassword", email, pass);
}
