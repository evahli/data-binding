import { useState } from 'react';

/*
Zadání 1: Přidejte na prvek `input` událost `onChange`, která bude do stavu `login` ukládat
  aktuální hodnotu, kterou uživatel do inputu napíše. Zároveň nastavte `value` políčka
  na hodnotu ze stavu `login`, takže při načtení stránky v políčku uvidíte výchozí hodnotu `petr`.
Zadání 2: Na tlačíko přidejte událost `onClick`, která nastaví stav `login` na prázdný řetězec,
 čímž se vyprázdní i políčko s loginem.
*/

export const Ukol3 = () => {
  const [login, setLogin] = useState('petr');

  return (
    <>
      <label>
        Login:
        <input value={login} type="text" onChange={(event) => setLogin(event.target.value)} />
      </label>
      <button onClick={() => setLogin('')}>Vymazat</button>
    </>
  );
};
