import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import routes from './Router';

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <div>Error 404</div>,
      children: routes
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
