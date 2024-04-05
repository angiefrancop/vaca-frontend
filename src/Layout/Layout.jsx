import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import { Suspense } from 'react';

export default function Layout() {
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
