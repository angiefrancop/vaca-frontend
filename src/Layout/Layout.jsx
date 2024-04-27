import { Navigate, Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import { Suspense } from 'react';
import { useAuth } from '../auth/AuthProvider';

export default function Layout() {
  const auth = useAuth();
  console.log(auth);
  if (!auth.isAuthenticated) {
    return <Navigate to='/' />;
  }

  return (
    <>
      <Header />
      <main className='content'>
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
