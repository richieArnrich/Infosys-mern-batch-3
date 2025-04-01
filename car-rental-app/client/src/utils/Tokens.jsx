//function to set token
export function setToken(token) {
  localStorage.setItem("token", JSON.stringify(token));
}

//function to getToken
export function getToken() {
  return JSON.parse(localStorage.getItem("token"));
}

//function to setuser
export function setUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

//function to getuser
export function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}
