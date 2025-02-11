
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css';
import AppLayout from './layout/app-layout';
import LandingPage from './pages/landing';
import Onboarding from './pages/onboarding';
import JobListing from './pages/job-listing';
import PostJob from './pages/post-job';
import MyJobs from './pages/my-job';
import SavedJobs from './pages/saved-job';
import { ThemeProvider } from './components/theme-provider';

import ProtectedRoute from "./components/protected-rote";
import JobPage from "./pages/job";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children:[
      {
        path:'/',
        element:<LandingPage/>
      },
      {
        path:'/onboarding',
        element:
        <ProtectedRoute>
        <Onboarding />
        </ProtectedRoute>
      },
      {
        path:'/jobs',
        element:
        <ProtectedRoute>
        <JobListing />
        </ProtectedRoute>
      },
      {
        path:'/job/:id',
        element:
        <ProtectedRoute>
        <JobPage />
        </ProtectedRoute>
      },
      {
        path:'/my-job',
        element:
        <ProtectedRoute>
        <MyJobs/>
        </ProtectedRoute>
      },
      {
        path:'/post-job',
        element:
        <ProtectedRoute>
        <PostJob />
        </ProtectedRoute>
      },
      {
        path:'/saved-job',
        element:
        <ProtectedRoute>
        <SavedJobs />
        </ProtectedRoute>
      },
    ]
  }
]);
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App
