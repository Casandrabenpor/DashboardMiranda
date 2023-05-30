import { Bookings } from './pages/bookingsPage';
import { Rooms } from './pages/roomsPage';
import { Contact } from './pages/contactPage';
import { Users } from './pages/usersPage';
import { Dashboard } from './pages/dashboardPage';
import { Routes, Route } from "react-router-dom";
import { LoginPage } from './pages/loginPage';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/users" element={<Users />} />

            </Routes>
        </div>
    )
}
export default App;