import { useNavigate } from 'react-router-dom';

export default function HomeButton() {
  const navigate = useNavigate();

  return <button onClick={() => navigate('/')}>Back to Home</button>;
}
