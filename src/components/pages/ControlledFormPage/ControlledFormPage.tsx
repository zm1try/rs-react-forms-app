import HomeButton from '../../utils/HomeButton/HomeButton';
import ControlledForm from '../../forms/ControlledForm/ControlledForm';

export default function ControlledFormPage() {
  return (
    <>
      <HomeButton />
      <main className="form-container">
        <ControlledForm />
      </main>
    </>
  );
}
