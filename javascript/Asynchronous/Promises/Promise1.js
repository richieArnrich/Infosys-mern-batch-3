function pMaker(request) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      reject(request);
    }, 2000);
  });
}

let seeker = pMaker("Teach Javascript");
seeker
  .then((req) => {
    console.log("Request successful:", req);
  })
  .catch((err) => {
    console.log("Request failed:", err);
  });
