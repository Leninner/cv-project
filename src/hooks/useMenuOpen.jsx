import { useState } from 'react';

export const useMenuOpen = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSetOpen = () => setIsOpen(!isOpen);

  const listaMenu = (
    <>
      <ul>
        <li>
          <a href='https://github.com/Leninner/cv-project' rel='noreferrer' target='_blank'>
            Repo
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/leninner/' rel='noreferrer' target='_blank'>
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href='https://api.whatsapp.com/send?phone=593979424062&text=Hi%20Lenin,%20your%20work%20is%20cool,%20please%20let%20me%20know%20more%20about%20yourself'
            rel='noreferrer'
            target='_blank'>
            Hire me
          </a>
        </li>
      </ul>
    </>
  );

  return { isOpen, handleSetOpen, listaMenu };
};
