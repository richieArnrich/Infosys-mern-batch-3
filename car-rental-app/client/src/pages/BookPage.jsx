import React, { useEffect, useState } from "react";
import { getToken, getUser } from "../utils/Tokens";
import { useParams } from "react-router-dom";
import { Instance } from "../utils/Instance";

function BookPage() {
  const token = getToken();
  const user = getUser();
  const { id } = useParams();
  console.log(id);
  if (!token) {
    alert("Please login");
    return <Redirect to="/login" />;
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
    const daysReqd = document.getElementById("reqDays").value;
    const bookPrice = car.rentPerDay * daysReqd;
    alert(bookPrice);
    let bookingDate = document.getElementById("bookingDate").value;
    const bookObject = {
      userName: user.name,
      contact: user.phone,
      email: user.email,
      address: user.address,
      carId: id,
      Days: daysReqd,
      totalPrice: bookPrice,
      bookingDate: bookingDate,
      car: car,
    };
    console.log(bookObject);
  }
  return (
    <div>
      <h1>Booking page</h1>
      <div className="d-flex">
        <div className="p-3 m-3">
          <img
            src={`http://localhost:4000${car.image}`}
            style={{ height: "20rem" }}
            alt={`${car.name} image`}
          />
        </div>
        <div className="p-3 m-3">
          <h3>{car.name}</h3>
          <p>Car price: {car.rentPerDay}</p>
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
