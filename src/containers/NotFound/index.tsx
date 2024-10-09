import { useNavigate } from 'react-router-dom';
import PAGE_ROUTES from '@routes/routingEnum';
import './styles.scss';

const NotFound = () => {
  const navigate = useNavigate();
  const handleRedirectHome = () => {
    navigate(PAGE_ROUTES.HOME);
  };

  return (
    <div className="styled-container">
      <h3>404</h3>
      <p>Page not found</p>
      <p>The page you are looking for does not exist. Please go back to Home Page to proceed.</p>
      <button className="styled-button" onClick={handleRedirectHome}>Home page</button>
    </div>
  );
};

export default NotFound;
