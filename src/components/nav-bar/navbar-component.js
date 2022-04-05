import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import useMediaState from '../../hooks/use-media-state';
import SearchComponent from './components/search-component';
import useNavbarState from './hooks/use-navbar-state';
import styles from './styles/navbar.module.scss';
import logo from '../../../public/image/logo.png';
import { useState } from 'react';

const NavBar = ({ black }) => {
  const { state, onSearchPress } = useNavbarState();
  const [showList, setShowList] = useState(false);
  const small = useMediaState(["(max-width: 768px)"],
    [true],
    false);

  return (
    <>
      <div className={`${styles.wrapperMenu} ${black ? styles.black : ''}`}>
        {!state.isSearchButtonClicked && <Link href={'/'}><div className={styles.logo}><Image src={logo} alt="Logo AnimeFlix" width="96" height="40" /></div></Link>}
        <ul className={styles.menuList}>
          {/* <li>
            <Link href="/">
              <a>Início</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Animes</a>
            </Link>
          </li> */}
        </ul>

        {<SearchComponent small={small} show={(!small) || (small && state.isSearchButtonClicked)} showList={showList}  onClick={() => setShowList(true)}/>}
        <div className={styles.search}>
          <FontAwesomeIcon icon={state.isSearchButtonClicked ? faTimes : faSearch} onClick={onSearchPress} id={styles.searchButton} />
        </div>
      </div>
    </>
  );
}

export default NavBar;
