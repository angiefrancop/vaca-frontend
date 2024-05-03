import React from 'react';
const Amigos = React.lazy(() => import('./pages/Friends'));
const Gastos = React.lazy(() => import('./pages/Expenses'));
const Groups = React.lazy(() => import('./pages/Groups/Groups'));
const GroupById = React.lazy(() => import('./pages/Groups/GroupById'));

const routes = [
  {
    path: '/friends',
    element: <Amigos />
  },
  {
    path: '/expenses',
    element: <Gastos />
  },
  {
    path: '/groups',
    element: <Groups />
  },
  {
    path: '/groups/:id',
    element: <GroupById />
  }
];

export default routes;
