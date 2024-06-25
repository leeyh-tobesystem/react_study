import { useState } from 'react';

const EventFunc = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onchangeMessage = (e) => setMessage(e.target.value);

  const onClick = () => {
    alert(username + ': ' + message);
    setUsername('');
    setMessage('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>event practive</h1>
      <input
        type="text"
        name="username"
        placeholder="user"
        value={username}
        onChange={onChangeUsername}
      />
      <br />
      <input
        type="text"
        name="message"
        placeholder="msg"
        value={message}
        onChange={onchangeMessage}
        onKeyDown={onKeyDown}
      />
      <button onClick={onClick}>OK</button>
    </div>
  );
};

export default EventFunc;
