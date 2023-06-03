import { Bookings } from './pages/bookingsPage';
import { Rooms } from './pages/roomsPage';
import { BookingsUserPage } from './pages/bookingUserPage';
import { RoomUserPage } from './pages/roomUserPage';
import { Contact } from './pages/contactPage';
import { Users } from './pages/usersPage';
import { Dashboard } from './pages/dashboardPage';
import { Routes, Route } from "react-router-dom";
import { LoginPage } from './pages/loginPage';
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from './features/loginSlice/userSlice';
import { ProtectedRoute } from './components/Route/protectedRouter';
import { loadFromStorage } from './features/loginSlice/userSlice';
import { NewUser } from './components/Form/NewUser';
import { NewRoom } from './components/Form/NewRoom';

function App() {
  const dispatch = useDispatch();
  dispatch(loadFromStorage());
  const user = useSelector(selectUser);

  return (
    <div>
      <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route index path="/" element={ <ProtectedRoute user={user}> <Dashboard /></ProtectedRoute>} />
          <Route path="/bookings" element={<ProtectedRoute user={user}> <Bookings /></ProtectedRoute>} />
          <Route path="/bookingsUser/*" element={ <ProtectedRoute user={user}> <BookingsUserPage /></ProtectedRoute>} />
          <Route path="/rooms" element={<ProtectedRoute user={user}><Rooms /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute user={user}><Contact /></ProtectedRoute>} />
          <Route path="/users" element={ <ProtectedRoute user={user}><Users /> </ProtectedRoute>} />
          <Route path="/newUser" element={ <ProtectedRoute user={user}><NewUser /> </ProtectedRoute>} />
          <Route path="/newRoom" element={ <ProtectedRoute user={user}><NewRoom /> </ProtectedRoute>} />
          <Route path="/bookingRoom/*" element={ <ProtectedRoute user={user}> <RoomUserPage /></ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default App;
