import { Header, NavMobile } from './styles';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { useMenuOpen } from '../../hooks/useMenuOpen';

export const HeaderComponent = () => {
  const { isOpen, handleSetOpen, listaMenu } = useMenuOpen();

  const SIZE = '35';

  return (
    <Header>
      <h1>The CV Project</h1>
      <nav className='desktop'>{listaMenu}</nav>
      {!isOpen ? (
        <FiMenu size={SIZE} onClick={handleSetOpen} />
      ) : (
        <>
          <AiOutlineClose size={SIZE} onClick={handleSetOpen} />
          <NavMobile onClick={handleSetOpen}>{listaMenu}</NavMobile>
        </>
      )}
    </Header>
  );
};
