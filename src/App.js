import { Bookings } from './pages/bookingsPage';
import { Rooms } from './pages/roomsPage';
import { BookingsUserPage } from './pages/bookingUserPage';
import { RoomUserPage } from './pages/roomUserPage';
import { Contact } from './pages/contactPage';
import { Users } from './pages/usersPage';
import { Dashboard } from './pages/dashboardPage';
import { Routes, Route } from "react-router-dom";
import { LoginPage } from './pages/loginPage';
import { ProtectedRoute } from './components/Route/protectedRouter';
import { NewUser } from './components/Form/NewUser';
import { NewRoom } from './components/Form/NewRoom';
import { EditRoom } from './components/Form/EditRoom';
import { EditPerson } from './components/Form/EditUser';
import { NewBooking } from './components/Form/NewBooking';
import { EditBooking } from './components/Form/EditBooking';
import { NewContact } from './components/Form/NewContact';
import { EditContact } from './components/Form/EditContact';
import {  AuthProvider } from './components/Authentication/AuthenticationContext';


function App() {
  

  return (
    <div>
      <AuthProvider>
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route index path="/" element={ <ProtectedRoute > <Dashboard /></ProtectedRoute>} />
            <Route path="/bookings" element={<ProtectedRoute > <Bookings /></ProtectedRoute>} />
            <Route path="/bookingsUser/*" element={ <ProtectedRoute > <BookingsUserPage /></ProtectedRoute>} />
            <Route path="/bookings/edit/*" element={ <ProtectedRoute > <EditBooking /></ProtectedRoute>} />
            <Route path="/newBooking" element={ <ProtectedRoute ><NewBooking /> </ProtectedRoute>} />
            <Route path="/rooms" element={<ProtectedRoute ><Rooms /></ProtectedRoute>} />
            <Route path="/rooms/edit/*" element={ <ProtectedRoute > <EditRoom /></ProtectedRoute>} />
            <Route path="/newRoom" element={ <ProtectedRoute ><NewRoom /> </ProtectedRoute>} />
            <Route path="/contact" element={<ProtectedRoute ><Contact /></ProtectedRoute>} />
            <Route path="/users" element={ <ProtectedRoute ><Users /> </ProtectedRoute>} />
            <Route path="/newUser" element={ <ProtectedRoute ><NewUser /> </ProtectedRoute>} />
            <Route path="/bookingRoom/*" element={ <ProtectedRoute > <RoomUserPage /></ProtectedRoute>} />
            <Route path="/users/edit/*" element={ <ProtectedRoute > <EditPerson /></ProtectedRoute>} />
            <Route path="/newContact" element={ <ProtectedRoute ><NewContact /> </ProtectedRoute>} />
            <Route path="/contacts/edit/*" element={ <ProtectedRoute > <EditContact /></ProtectedRoute>} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
