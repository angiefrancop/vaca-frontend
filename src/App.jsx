import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import routes from './Router';
import LayoutLogin from './Layout/LayoutLogin';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthProvider } from './auth/AuthProvider';

function App() {
  const router = createBrowserRouter([
    {
      element: <LayoutLogin />,
      children: [
        {
          path: '/',
          element: <Login />
        },
        {
          path: '/signup',
          element: <Signup />
        }
      ]
    },
    {
      element: <Layout />,
      errorElement: <div>Error 404</div>,
      children: routes
    }
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
