import { Bookings } from './pages/bookingsPage';
import { Rooms } from './pages/roomsPage';
import {BookingsUserPage} from './pages/bookingUserPage';
import { Contact } from './pages/contactPage';
import { Users } from './pages/usersPage';
import { Dashboard } from './pages/dashboardPage';
import { Routes, Route } from "react-router-dom";
import { LoginPage } from './pages/loginPage';
import { useSelector } from 'react-redux';
import { selectUser } from './features/loginSlice/userSlice';

function App() {
    const user = useSelector(selectUser);
    console.log(user);
    return (
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={user ? <Dashboard /> : <LoginPage />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/bookingsUser" element={<BookingsUserPage />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    );
  }
  
  export default App;
