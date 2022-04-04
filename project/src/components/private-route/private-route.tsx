import { Navigate } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../constants';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const {requireAuthorization} = useAppSelector((state) => state);

  return requireAuthorization === AuthorizationStatus.Auth
    ? children
    : <Navigate to={AppRoutes.SignIn} />;
}

export default PrivateRoute;
