import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import LandingPage from "./Pages/LandingPage";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import AboutPage from "./Pages/AboutPage";
import DepartmentPage from "./Pages/DepartmentPage";
import ResourcesPage from "./Pages/ResourcePage";
import UserDashboard from "./Pages/UserDashboard";
import AdminDashboard from "./Pages/AdminDashboard";
import SavedResourcesPage from "./Pages/SavedResourcesPage";
import ProtectedRoute from "./components/ProtectedRoute"; // Make sure this exists

function App() {
  return (
    <Routes>
      <Route path="/" element={
          <LandingPage />
      } />
      <Route path="/home" element={
        <ProtectedRoute>
          <Homepage />
        </ProtectedRoute>
      } />
      <Route path="/login" element={
          <LoginPage />
      } />
      <Route path="/signup" element={
          <SignupPage />
      } />
      <Route path="/about" element={
          <AboutPage />
      } />
      <Route path="/departments" element={
        <ProtectedRoute>
          <DepartmentPage />
        </ProtectedRoute>
      } />
      <Route path="/resources" element={
        <ProtectedRoute>
          <ResourcesPage />
        </ProtectedRoute>
      } />
      <Route path="/userdashboard" element={
        <ProtectedRoute>
          <UserDashboard />
        </ProtectedRoute>
      } />
      <Route path="/admindashboard" element={
        <ProtectedRoute>
          <AdminDashboard />
        </ProtectedRoute>
      } />
      <Route path="/saveresourcepage" element={
        <ProtectedRoute>
          <SavedResourcesPage />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App;