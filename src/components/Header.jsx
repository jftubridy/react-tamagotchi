import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
      <h1><style jsx> {`
    h1 {
      color: black;
    }
    h1:hover {
      color: green;
    }
    `}</style>Tamagotchis</h1>
      <Link to="/">Home</Link> | <Link to="/NewTamagotchi">Create Tamagotchi</Link>
    </div>
  );
}

export default Header;