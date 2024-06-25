import { useState } from 'react';

const EventFunc = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });

  const [username, message] = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: '',
    });
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
        onChange={onChange}
      />
      <br />
      <input
        type="text"
        name="message"
        placeholder="msg"
        value={message}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button onClick={onClick}>OK</button>
    </div>
  );
};

export default EventFunc;
