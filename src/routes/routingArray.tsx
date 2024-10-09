import { RouteObject } from 'react-router-dom';
import NotFound from '@containers/NotFound';
import Layout from '@containers/Layout';
import Home from '@containers/Home';

import PAGE_ROUTES from './routingEnum';

export const routingArray: RouteObject[] = [
  { path: PAGE_ROUTES.NOT_FOUND, element: <NotFound /> },
  {
    element: <Layout />,
    children: [
      { path: PAGE_ROUTES.HOME, element: <Home /> },
    ],
  },
];
