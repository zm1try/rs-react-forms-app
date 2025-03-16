import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';
import FormData from '../../utils/FormData/FormData';

export default function HomePage() {
  const formData = useAppSelector((state) => state.form.formData);
  return (
    <>
      <div className="header">
        <div className="header-links">
          <Link className="header-links-item" to="uncontrolled-form">
            Uncontrolled form
          </Link>
          <Link className="header-links-item" to="controlled-form">
            Controlled form
          </Link>
        </div>
      </div>
      <div className="main">
        <p>Forms data</p>
        {formData.length ? <FormData /> : <p>No data yet</p>}
      </div>
    </>
  );
}
