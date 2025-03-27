import React, { useEffect, useState } from "react";
import axios from "axios";
function Home() {
  //access api in a functional component
  const [cars, setCars] = useState(null);
  const [isloading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:4000/cars/")
      .then((res) => {
        setCars(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  if (isloading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  // return grid of cars
  return (
    <div className="container">
      {console.log(cars)}
      <div className="row">
        {cars.map((car) => {
          return (
            <div key={car.id} className="col-sm">
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src={`http://localhost:4000${car.image}`}
                  class="card-img-top"
                  alt={`${car.name} image`}
                />
                <div class="card-body">
                  <h5 class="card-title">{car.name}</h5>
                  <p class="card-text">
                    <div className="d-flex justify-content-around">
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-car-front-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z" />
                        </svg>
                        <span> {car.brand}</span>
                      </p>
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-bookmark-check-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"
                          />
                        </svg>{" "}
                        <span> {car.category}</span>
                      </p>
                    </div>
                    <div className="d-flex justify-content-around">
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-calendar-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5" />
                        </svg>{" "}
                        <span> {car.year}</span>
                      </p>
                      <p>
                        <b>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-currency-rupee"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                          </svg>
                        </b>
                        <span>
                          <b>{car.rentPerDay} </b>/Day
                        </span>
                      </p>
                    </div>
                  </p>
                  <a href="#" class="btn btn-primary">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
