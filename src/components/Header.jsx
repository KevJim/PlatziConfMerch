import React from 'react';

import '../styles/components/Header.css';

const Header = () => {
  return (
    <div className="Header">
      {/* <h1 className="Header-title">PlatziConf Merch</h1> */}
      <div className="Header-title">
        <img
          src="https://static.platzi.com/commons/assets/image/isotipoPlatzi093f27a2fb00922bb105.png"
          alt="Logo_Verde_platzi"
        />
        <img
          src="https://static.platzi.com/commons/assets/image/logotipo-platzie69328f33899695e31fa.png"
          alt="Logo_Platzi"
        />
      </div>
      <div className="Header-checkout">Checkout</div>
    </div>
  );
};

export default Header;
