import { createBrowserRouter } from 'react-router-dom';
import List from './list';
import Edit from './edit';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <List />,
  },
  {
    path: '/todos/:todoId',
    element: <Edit />,
  },
]);
