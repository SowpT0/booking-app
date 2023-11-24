

import { useEffect, useState } from 'react';
import axios from 'axios';
import BookingForm from './BookingForm';
import BookingList from './BookingList';

function YourComponent() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('https://booking-system-api-shaunteoh1.sigma-school-full-stack.repl.co/bookings/');
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div>
      <BookingForm fetchBookings={fetchBookings} />
      {}
      <BookingList bookings={bookings} />
    </div>
  );
}

export default YourComponent;
