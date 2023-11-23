// BookingList.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:3000/bookings/user/USER_ID'); // Replace USER_ID with the actual user ID
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        // Handle error, show a message, etc.
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="mt-4">
      <h2>Booking List</h2>
      <ul className="list-group">
        {bookings.map((booking) => (
          <li key={booking.id} className="list-group-item">
            Date: {booking.date}, Time: {booking.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingList;
