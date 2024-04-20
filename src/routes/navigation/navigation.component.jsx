import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './navigation.styles.scss';
import Logo from '../../components/logo/logo.component';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
