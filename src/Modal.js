import React, { useState } from 'react';
import axios from 'axios';

const Modal = ({ users, setshow }) => {
  const [id, setid] = useState(users.length + 1);
  const [name, setname] = useState('');
  const [age, setage] = useState(0);
  const [about, setabout] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { id: id, name: name, age: age, about: about };
    console.log(user);
    axios
      .post('/api/Users', user)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setshow(false);
  };
  return (
    <div className='modal-container'>
      <section className='modal'>
        <form className='grocery-form' onSubmit={handleSubmit}>
          <h1>Create New User !</h1>
          <div className='form-control'>
            <input
              type='text'
              className='grocery'
              placeholder='Name'
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <input
              type='number'
              className='grocery'
              placeholder='Age'
              value={age}
              onChange={(e) => setage(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <input
              type='text'
              className='grocery'
              placeholder='About'
              value={about}
              onChange={(e) => setabout(e.target.value)}
            />
          </div>
          <button type='submit' className='submit-btn'>
            submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Modal;
