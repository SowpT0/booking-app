
import { useState } from 'react';
import axios from 'axios';
import BookingUpdateForm from './BookingUpdateForm';

function BookingItem({ booking, fetchBookings }) {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleDelete = async () => {
    const { id } = booking;
    try {
      await axios.delete(`https://booking-system-api-shaunteoh1.sigma-school-full-stack.repl.co/bookings/${id}`);
      fetchBookings();
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  const handleUpdate = () => {
    setIsUpdating(true);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {isUpdating ? (
        <BookingUpdateForm booking={booking} fetchBookings={fetchBookings} setIsUpdating={setIsUpdating} />
      ) : (
        <div>
          <strong>User ID:</strong> {booking.user_id}, <strong>Date:</strong> {booking.date}, <strong>Time:</strong> {booking.time}
        </div>
      )}
      <div>
        <button className="btn btn-warning" onClick={handleUpdate}>Update</button>
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
}

export default BookingItem;
