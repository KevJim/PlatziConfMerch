import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

import '../styles/components/Header.css';

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <div className="Header">
      {/* <h1 className="Header-title">PlatziConf Merch</h1> */}
      <div className="Header-title">
        <Link to="/">
          <img
            src="https://static.platzi.com/commons/assets/image/isotipoPlatzi093f27a2fb00922bb105.png"
            alt="Logo_Verde_platzi"
          />
          <img
            src="https://static.platzi.com/commons/assets/image/logotipo-platzie69328f33899695e31fa.png"
            alt="Logo_Platzi"
          />
        </Link>
      </div>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" style={{ color: '#eee' }} />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
};

export default Header;
