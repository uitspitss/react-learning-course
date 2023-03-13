import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Edit from './edit';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/todos/:todoId',
    element: <Edit />,
  },
]);
