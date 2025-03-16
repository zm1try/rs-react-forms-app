import HomeButton from '../../utils/HomeButton/HomeButton';
import ControlledForm from '../../forms/ControlledForm/ControlledForm';

export default function UncontrolledFormPage() {
  return (
    <>
      <HomeButton />
      <main className="form-container">
        <ControlledForm />
      </main>
    </>
  );
}
