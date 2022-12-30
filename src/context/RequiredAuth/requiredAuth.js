import { useAppContext } from './authContext';
import { Navigate } from 'react-router-dom';

function RequiredAuth(props) {
    const { children } = props;
    const { isLogin } = useAppContext();
    return isLogin || localStorage.getItem('isLogin') ? children : <Navigate to="/login" />;
}

export default RequiredAuth;
