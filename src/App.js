import './App.css';
import ListUsers from './Components/User/ListUsers';

import { useState } from 'react';
import PropTypes from 'prop-types';

function App() {
  const users = useState([]);

  return (
    <div className="App">
      <ListUsers usersList={users} />
    </div>
  );
}

export default App;

App.prototype = {
  users: PropTypes.array.isRequired
}
