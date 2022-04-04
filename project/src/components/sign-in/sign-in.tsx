import { Link } from 'react-router-dom';
import { FormEvent, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-action';

function SignIn(): JSX.Element {
  const dispatch = useAppDispatch();
  const {requireAuthorization} = useAppSelector((state) => state);
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const handleSubmitLoginForm = (evt: FormEvent) => {
    evt.preventDefault();

    if(emailInput.current !== null && passwordInput.current !== null) {
      dispatch(loginAction({
        email: emailInput.current.value,
        password: passwordInput.current.value,
      }));
    }
  };

  if(requireAuthorization === AuthorizationStatus.Auth) {
    return <Navigate to='/'/>;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmitLoginForm}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input ref={emailInput} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" required />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input ref={passwordInput} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password"/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <Link to="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default SignIn;
