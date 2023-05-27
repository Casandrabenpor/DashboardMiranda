import { Bookings } from './pages/bookings';
import { Rooms } from './pages/rooms';
import { Contact } from './pages/contact';
import { Users } from './pages/users';
import { Dashboard } from './pages/dashboard';
import {  Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
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