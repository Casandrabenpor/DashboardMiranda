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
import { EditRoom } from './components/Form/EditRoom';
import { EditPerson } from './components/Form/EditUser';
import { NewBooking } from './components/Form/NewBooking';
import { EditBooking } from './components/Form/EditBooking';
import { NewContact } from './components/Form/NewContact';
import { EditContact } from './components/Form/EditContact';


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
          <Route path="/bookings/edit/*" element={ <ProtectedRoute user={user}> <EditBooking /></ProtectedRoute>} />
          <Route path="/newBooking" element={ <ProtectedRoute user={user}><NewBooking /> </ProtectedRoute>} />
          <Route path="/rooms" element={<ProtectedRoute user={user}><Rooms /></ProtectedRoute>} />
          <Route path="/rooms/edit/*" element={ <ProtectedRoute user={user}> <EditRoom /></ProtectedRoute>} />
          <Route path="/newRoom" element={ <ProtectedRoute user={user}><NewRoom /> </ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute user={user}><Contact /></ProtectedRoute>} />
          <Route path="/users" element={ <ProtectedRoute user={user}><Users /> </ProtectedRoute>} />
          <Route path="/newUser" element={ <ProtectedRoute user={user}><NewUser /> </ProtectedRoute>} />
          <Route path="/bookingRoom/*" element={ <ProtectedRoute user={user}> <RoomUserPage /></ProtectedRoute>} />
          <Route path="/users/edit/*" element={ <ProtectedRoute user={user}> <EditPerson /></ProtectedRoute>} />
          <Route path="/newContact" element={ <ProtectedRoute user={user}><NewContact /> </ProtectedRoute>} />
          <Route path="/contactUser/edit/*" element={ <ProtectedRoute user={user}> <EditContact /></ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default App;
