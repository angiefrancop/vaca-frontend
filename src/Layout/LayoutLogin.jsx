import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import HeaderLogin from '../components/HeaderLogin';
export default function LayoutLogin() {
  return (
    <div className='layout-login'>
      <HeaderLogin />
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
