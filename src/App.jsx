// App.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/bookings" element={<BookingList />} />
          <Route path="/" element={<BookingForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
