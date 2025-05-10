import { useState } from 'react';

/*
Zadání: Přidejte na prvek `input` událost `onChange`, která bude do stavu `login` ukládat aktuální
  hodnotu, kterou uživatel do inputu napíše.
*/

export const Ukol1 = () => {
  const [login, setLogin] = useState('petr');
  console.log(login)


  return (
    <>
      <label>
        Login:
        <input value={login} type="text" onChange={(event) => setLogin(event.target.value)} />
      </label>
    </>
  );
};

