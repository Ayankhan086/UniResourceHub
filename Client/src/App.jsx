import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import Loading from "./components/Loading";

// Lazy loading components
const Homepage = lazy(() => import("./Pages/Homepage"));
const LandingPage = lazy(() => import("./Pages/LandingPage"));
const SignupPage = lazy(() => import("./Pages/SignupPage"));
const LoginPage = lazy(() => import("./Pages/LoginPage"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));
const DepartmentPage = lazy(() => import("./Pages/DepartmentPage"));
const ResourcesPage = lazy(() => import("./Pages/ResourcePage"));
const UserDashboard = lazy(() => import("./Pages/UserDashboard"));
const AdminDashboard = lazy(() => import("./Pages/AdminDashboard"));
const SavedResourcesPage = lazy(() => import("./Pages/SavedResourcesPage"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={
          <ProtectedRoute>
            <Homepage />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<AboutPage />} />
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
    </Suspense>
  );
}

export default App;