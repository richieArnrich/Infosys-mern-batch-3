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
    const bookObject = {
      userName: user.name,
      contact: user.phone,
      email: user.email,
      address: user.address,
      carId: id,
      Days: daysReqd,
      totalPrice: bookPrice,
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
          <h3>Car name: {car.name}</h3>
          <p>Car brand: {car.brand}</p>
          <p>Car price: {car.rentPerDay}</p>
          <input
            type="text"
            placeholder="number of days required"
            id="reqDays"
          />{" "}
          <br />
          <input
            type="submit"
            className="btn btn-primary m-2"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default BookPage;
