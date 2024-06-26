
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
// import CalendarPage from "./pages/CalendarPage";
import DatePage from "./pages/DatePage";
import EditPage from "./pages/EditPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ServicePage from "./pages/ServicePage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";
import RevisionPage from "./pages/RevisionPage";
import ServiceList from "./pages/ServiceList";
import AdminError from "./pages/AdminErorPage"
import ProfilePic from "./pages/ProfilePic";

import OnlyPrivate from "./components/OnlyPrivate";
import OnlyAdmin from "./components/OnlyAdmin";

function App() {
  return (
    <div>

      <Navbar />
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/user" element={<OnlyPrivate><ProfilePage /></OnlyPrivate>} />
        <Route path="/user-pic" element={<OnlyPrivate><ProfilePic /></OnlyPrivate>} />
        <Route path="/service" element={<OnlyAdmin><ServicePage /></OnlyAdmin>} />
        <Route path="/date" element={<OnlyAdmin><RevisionPage /></OnlyAdmin>} />
        <Route path="/service-list" element={<OnlyAdmin><ServiceList/></OnlyAdmin>} />
        <Route path="/date/:id" element={<OnlyPrivate><EditPage /></OnlyPrivate>} />
        <Route path="/add-date" element={<OnlyPrivate><DatePage /></OnlyPrivate>} />
        <Route path="/adminError" element={<AdminError />} />
        <Route path="/errorPage" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
      <Footer />
    </div>
  );
}

export default App;
