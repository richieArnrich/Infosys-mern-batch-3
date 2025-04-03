import React, { useEffect, useState } from "react";
import { Instance } from "../utils/Instance";

function Bookings() {
  const [bookings, setBookings] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    Instance.get("/bookings/getallbookings")
      .then((res) => {
        console.log(res);
        setBookings(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1 className="bg-success p-2 text-light text-center">All Bookings</h1>
      {bookings.map((booking) => {
        return (
          <div key={booking.id} className="border-bottom">
            <div className="d-flex justify-content-around">
              <div>
                <p>{booking.user.name}</p>
                <p>{booking.user.phone}</p>
                <p>{booking.user.email}</p>
                <p>{booking.user.address}</p>
              </div>
              <div>
                <p>{booking.car.name}</p>
                <p>Days: {booking.Days}</p>
                <p>Start Date: {booking.start_date}</p>
                <p>
                  Total Payment: &#x20b9;
                  {booking.totalPrice}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Bookings;
