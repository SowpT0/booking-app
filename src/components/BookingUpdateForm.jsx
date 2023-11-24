
import { useState } from 'react';
import axios from 'axios';

function BookingUpdateForm({ booking, fetchBookings, setIsUpdating }) {
  const [formData, setFormData] = useState({
    date: booking.date,
    time: booking.time,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`https://booking-system-api-shaunteoh1.sigma-school-full-stack.repl.co/bookings/${booking.id}`, formData);
      fetchBookings();
      setIsUpdating(false);
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };

  return (
    <div className="mt-4">
      <h2>Update Booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Date</label>
          <input
            type="text"
            className="form-control"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            placeholder="Enter Date"
            required
          />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input
            type="text"
            className="form-control"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            placeholder="Enter Time"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Booking
        </button>
      </form>
    </div>
  );
}

export default BookingUpdateForm;
