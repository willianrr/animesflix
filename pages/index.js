import { React, useContext } from 'react';
import AnimeListSLider from '../components/anime-list-slider';
import Banner from '../components/Banner';
import { AnimesContext } from '../src/context/anime-context';
import styles from '../styles/Home.module.css';

const Home = () => {
  const { context } = useContext(AnimesContext);
  return (
    <div>
      <Banner  />
      <div className={styles.wrapperDasboard}>
        {
          context && context.stateFilter.map((anime, index) =>
            <AnimeListSLider key={index}
              generos={anime.genero}
              listAnimes={anime.animes}
            />
          )}
          <div>
              <span className="variable"> Clegane</span>
          </div>
      </div>
    </div>
  )
}
export default Home