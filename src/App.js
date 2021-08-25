import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Row from './Row.js';
import Modal from './Modal.js';
import ModalUpdate from './ModalUpdate';

function App() {
  const [users, setusers] = useState([]);
  const [show, setshow] = useState(false);
  const [showupdate, setshowupdate] = useState(false);
  const [idupdate, setidupdate] = useState(undefined);
  const [username, setusername] = useState('');
  const [refresh, setrefresh] = useState(false);
  useEffect(() => {
    console.log('Despegando !!');
    const data = axios.get('/api/Users').then((response) => {
      setusers(response.data);
      console.log(response.data);
    });
  }, [show, showupdate, refresh]);
  return (
    <div className='table'>
      <h1>
        <span className='W'>W</span>EB_API
      </h1>
      <article className='row'>
        <h2>:/id</h2>
        <h2>:/Name</h2>
        <h2>:/Age</h2>
        <h2>:/About</h2>
        <button className='new-btn' onClick={() => setshow(!show)}>
          New User
        </button>
      </article>
      {users.map((user) => {
        return (
          <Row
            key={user.id}
            {...user}
            setshowupdate={setshowupdate}
            setidupdate={setidupdate}
            setusername={setusername}
            setrefresh={setrefresh}
            refresh={refresh}
          />
        );
      })}
      {show && <Modal users={users} setshow={setshow} />}
      {showupdate && (
        <ModalUpdate
          id={idupdate}
          username={username}
          setshowupdate={setshowupdate}
        />
      )}
    </div>
  );
}

export default App;
