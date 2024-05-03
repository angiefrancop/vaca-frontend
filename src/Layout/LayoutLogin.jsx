import { Navigate, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import HeaderLogin from '../components/HeaderLogin';
import { useAuth } from '../auth/AuthProvider';

export default function LayoutLogin() {
  const auth = useAuth();
  console.log(auth);
  if (auth.isAuthenticated) {
    return <Navigate to='/groups' />;
  }
  return (
    <div className='layout-login'>
      <HeaderLogin />
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
