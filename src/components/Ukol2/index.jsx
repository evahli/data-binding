import { useState } from 'react';

/*
Zadání: Přidejte na prvek `input` událost `onChange`, která bude do stavu `login` ukládat aktuální
  hodnotu, kterou uživatel do inputu napíše. Zároveň nastavte `value` políčka na hodnotu ze stavu
  `login`, takže při načtení stránky v políčku uvidíte výchozí hodnotu `petr`.
*/

export const Ukol2 = () => {
  const [login, setLogin] = useState('petr');

  return (
    <>
      <label>
        Login:
        <input value={login} type="text" onChange={(event) => setLogin(event.target.value)} />
      </label>
    </>
  );
};
