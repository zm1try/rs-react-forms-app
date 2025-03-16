import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import UncontrolledFormPage from '../components/pages/UncontrolledFormPage/UncontrolledFormPage';
import ControlledFormPage from '../components/pages/ControlledFormPage/ControlledFormPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/uncontrolled-form',
    element: <UncontrolledFormPage />,
  },
  {
    path: '/controlled-form',
    element: <ControlledFormPage />,
  },
]);

export { router };
