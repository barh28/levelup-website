// In your LoginPage component
import { useDispatch } from 'react-redux';
import { loginUser } from '../..redux/authSlice';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Perform login logic here
    dispatch(loginUser());
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
