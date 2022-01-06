import { useState } from 'react';

export const useMenuOpen = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSetOpen = () => setIsOpen(!isOpen);

  const listaMenu = (
    <>
      <ul>
        <li>
          <a href='/'>Repo</a>
        </li>
        <li>
          <a href='/'>LinkedIn</a>
        </li>
        <li>
          <a href='/'>Hire me</a>
        </li>
      </ul>
    </>
  );

  return { isOpen, handleSetOpen, listaMenu };
};
