//function to set token
export function setToken(token) {
  localStorage.setItem("token", token);
}

//function to getToken
export function getToken() {
  return localStorage.getItem("token");
}

//function to setuser
export function setUser(user) {
  localStorage.setItem("user", user);
}

//function to getuser
export function getUser() {
  return localStorage.getItem("user");
}
