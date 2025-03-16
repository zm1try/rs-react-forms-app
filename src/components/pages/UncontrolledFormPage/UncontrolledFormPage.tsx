import HomeButton from '../../utils/HomeButton/HomeButton';
import UncontrolledForm from '../../forms/UncontrolledForm/UncontrolledForm';

export default function UncontrolledFormPage() {
  return (
    <>
      <HomeButton />
      <main className="form-container">
        <UncontrolledForm />
      </main>
    </>
  );
}
