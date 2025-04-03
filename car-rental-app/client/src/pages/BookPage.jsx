import React, { useEffect, useState } from "react";
import { getToken, getUser } from "../utils/Tokens";
import { useNavigate, useParams } from "react-router-dom";
import { Instance } from "../utils/Instance";

function BookPage() {
  const token = getToken();
  const user = getUser();
  let navigate = useNavigate();
  console.log(user);
  const { id } = useParams();
  console.log(id);
  if (!token) {
    alert("Please login");
    navigate("/login");
  }

  const [car, setCar] = useState(null);
  const [isloading, setLoading] = useState(true);
  const date = new Date();
  useEffect(() => {
    Instance.get(`/cars/` + id)
      .then((res) => {
        console.log(res);
        setCar(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isloading) {
    return <div>Loading...</div>;
  }

  function handleSubmit() {
    // handle form submission
    const userId = user._id;
    const carId = id;
    const days = document.getElementById("reqDays").value;
    const price = car.rentPerDay;
    const totalPrice = days * price;
    const start_date = document.getElementById("bookingDate").value;
    const bookingObj = {
      userId: userId,
      carId: carId,
      days,
      totalPrice,
      start_date,
    };
    Instance.post("/bookings/bookcar", bookingObj)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <h1 className="bg-success p-2 text-white">Book your drive now!</h1>
      <div className="d-flex">
        <div className="p-3 m-3 border-right">
          <img
            src={`http://localhost:4000${car.image}`}
            style={{ height: "20rem" }}
            alt={`${car.name} image`}
          />
        </div>
        <div className="p-3 m-3">
          <h3>{car.name}</h3>
          <p>Car price: &#x20b9;{car.rentPerDay}</p>
          <p>{car.category}</p>
          <input
            type="text"
            placeholder="number of days required"
            id="reqDays"
            className="form-control"
          />{" "}
          <br />
          <input
            type="date"
            min="2018-12-31"
            max={`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`}
            className="form-control"
            id="bookingDate"
          />
          <button
            type="submit"
            className="btn btn-primary p-2 mt-1"
            onClick={handleSubmit}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookPage;
