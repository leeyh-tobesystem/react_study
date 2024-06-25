import { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('Hi');
  const onClickLeave = () => setMessage('Bye');
  return (
    <div>
      <button onClick={onClickEnter}>in</button>
      <button onClick={onClickLeave}>out</button>
      <h1>{message}</h1>
    </div>
  );
};

export default Say;
