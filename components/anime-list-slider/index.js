import { React, useContext, useState } from 'react';
import styles from '../../styles/AnimeList.module.scss';
import Link from 'next/link';
import { AnimesContext } from '../../src/context/anime-context';

const AnimesLists = ({ listAnimes, generos }) => {
  const [scrollX, setScrollX] = useState(0);
  const { setContext } = useContext(AnimesContext);

  const handleLeftArrow = () => {
    if (window.innerWidth < 768) {
      let x = scrollX + Math.round(window.innerWidth);
      if (x > 0) {
        x = 0;
      }
      setScrollX(x);
    } else {
      let x = scrollX + Math.round(window.innerWidth);
      if (x > 0) {
        x = 0;
      }
      setScrollX(x);
    }

  }

  const handleRightArrow = () => {
    if (window.innerWidth < 768) {
      let x = scrollX - Math.round(window.innerWidth);
      let listWidth = listAnimes.length * 300;
      if ((window.innerWidth - listWidth) > x) {
        x = window.innerWidth - listWidth - 60;
      }
      setScrollX(x);
    } else {
      let x = scrollX - Math.round(window.innerWidth / 2);
      let listWidth = listAnimes.length * 350;
      if ((window.innerWidth - listWidth) > x) {
        x = window.innerWidth - listWidth + 10;
      }
      setScrollX(x);
    }

  }

  const onAnimeClick = (anime) => {
    setContext((context) => ({ ...context, selectedItem: anime }));
  }

  return (
    <div className={styles.wrapperFeatured}>
      <h2>{generos}</h2>
      <div className={styles.movieRowLeft} onClick={handleLeftArrow}>
        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" /></svg>
      </div>
      <div className={styles.movieRowRight} onClick={handleRightArrow}>
        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg>
      </div>
      <div className={styles.movieRowListarea}>
        <div className={styles.movieRowList} style={{
          marginLeft: scrollX,
          width: window.innerWidth < 768 ? listAnimes.length * 300 : listAnimes.length * 350
        }}>
          {listAnimes && listAnimes.length >= 0 && listAnimes.map((anime, index) => {
            return (
              <div className={styles.movieRowItem} key={index}>
                <Link href={`anime/${anime.id}`} >
                  <a onClick={() => onAnimeClick(anime)}>
                    <div
                      className={styles.thumbnailHome}
                      style={{
                        backgrounSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url(https://animesflix.tv/external/${anime.id}/${anime.dsImagemThumb}`
                      }}>
                    </div>
                    <span className={styles.animeName}>{anime.dsTitulo}</span>
                  </a>
                </Link>
              </div>
            )
          })
          }
        </div>
      </div>
    </div>
  );
}

export default AnimesLists;
