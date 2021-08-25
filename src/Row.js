import axios from 'axios';
import React from 'react';

const Row = ({
  id,
  name,
  age,
  about,
  setshowupdate,
  setidupdate,
  setusername,
  setrefresh,
  refresh,
}) => {
  const handleClick = (id) => {
    setshowupdate(true);
    setidupdate(id);
    setusername(name);
    console.log('enviando id: ', id);
  };
  const removeUser = (id) => {
    axios.delete('/api/Users/' + id).then((response) => {
      console.log(response);
      setrefresh(!refresh);
    });
  };
  return (
    <article key={id} className='row'>
      <h3>{id}</h3>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{about}</h3>
      <button onClick={() => handleClick(id)}>Edit</button>
      <button onClick={() => removeUser(id)} className='btn-delete'>
        DELETE
      </button>
    </article>
  );
};

export default Row;
