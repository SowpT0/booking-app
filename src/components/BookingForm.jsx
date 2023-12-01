import { useState } from 'react';
import axios from 'axios';

function BookingForm({ fetchBookings }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    user_id: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://booking-system-api-shaunteoh1.sigma-school-full-stack.repl.co/bookings', formData);
      fetchBookings();
      setFormData({
        date: '',
        time: '',
        user_id: '',
      });
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };

  return (
    <div className="mt-4">
      <h2>Booking Form</h2>
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
        <div className="form-group">
          <label>User ID</label>
          <input
            type="text"
            className="form-control"
            name="user_id"
            value={formData.user_id}
            onChange={handleInputChange}
            placeholder="Enter User ID"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Booking
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
