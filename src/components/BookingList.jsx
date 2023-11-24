import { useState, useEffect } from 'react';
import axios from 'axios';
import BookingItem from './BookingItem';

function BookingList() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async (userId) => {
    try {
      
      
      const response = await axios.get(`https://booking-system-api-shaunteoh1.sigma-school-full-stack.repl.co/bookings/user/${userId}`);
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  useEffect(() => {
    
    fetchBookings('1');
  }, []);

  return (
    <div className="mt-4">
      <h2>Booking List</h2>
      <ul className="list-group">
        {bookings.map((booking) => (
          <BookingItem key={booking.id} booking={booking} fetchBookings={() => fetchBookings('1')} />
        ))}
      </ul>
    </div>
  );
}

export default BookingList;
