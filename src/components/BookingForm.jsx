// BookingForm.jsx
import { useState } from 'react';
import axios from 'axios';

function BookingForm() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    user_id: generateUserId(), // Call the function after it's defined
  });

  // Function to generate a temporary user ID
  function generateUserId() {
    return Math.random().toString(36).substr(2, 9);
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/bookings', formData);
      // Handle success or navigate to another page
    } catch (error) {
      console.error('Error submitting booking:', error);
      // Handle error, show a message, etc.
    }
  };

  return (
    <div>
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Bootstrap form components */}
        <div className="form-group">
          <label>Date</label>
          <input type="date" className="form-control" name="date" value={formData.date} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input type="time" className="form-control" name="time" value={formData.time} onChange={handleInputChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;
